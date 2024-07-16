import "./App.css";
import {
  useSession,
  useSupabaseClient,
  useSessionContext,
} from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";

function ViewEvents() {
  const [viewAddEvents, setViewAddEvents] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [chosenDateTime, setChosenDateTime] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(false);
  const [message, setMessage] = useState("");
  const [currentTimeMessage, setCurrentTimeMessage] = useState("");

  const session = useSession(); // tokens, when session exists we have a user
  const supabase = useSupabaseClient(); // talk to supabase!
  const { isLoading } = useSessionContext();

  useEffect(() => {
    if (session) {
      fetchEventsForDate(new Date());
    }
  }, [session]);

  useEffect(() => {
    if (events.length > 0) {
      updateCurrentTimeMessage();
    }
  }, [events, chosenDateTime]);

  if (isLoading) {
    return <></>;
  }

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar",
      },
    });
    if (error) {
      alert("Error logging in to Google provider with Supabase");
      console.log(error);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  async function fetchEventsForDate(date) {
    setViewAddEvents(false);
    setLoadingEvents(true);

    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    try {
      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${startOfDay.toISOString()}&timeMax=${endOfDay.toISOString()}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + session.provider_token,
          },
        }
      );
      const data = await response.json();
      console.log("Fetched events:", data);
      setEvents(data.items || []);
      setLoadingEvents(false);
      const eventCount = data.items.length;
      if (eventCount === 0) {
        setMessage("You're free today! No events scheduled.");
      } else if (eventCount <= 3) {
        setMessage("You've got a few events to attend today.");
      } else {
        setMessage("It's going to be a busy day! Lots of events lined up.");
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      setMessage("Failed to load events.");
      setLoadingEvents(false);
    }
  }

  function handleDateTimeChange(event) {
    const { value } = event.target;
    const date = new Date(value);
    setChosenDateTime(date);
    fetchEventsForDate(date);
  }

  function updateCurrentTimeMessage() {
    const now = new Date(chosenDateTime);
    const currentEvent = events.find(
      (event) =>
        new Date(event.start.dateTime) <= now &&
        now <= new Date(event.end.dateTime)
    );

    if (currentEvent) {
      setCurrentTimeMessage(
        `Current time (${formatDate(now)}) falls within the event: "${
          currentEvent.summary
        }"`
      );
    } else {
      setCurrentTimeMessage(
        `Current time (${formatDate(
          now
        )}) does not fall within any scheduled events.`
      );
    }
  }

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  return <>
  
  <div className="App">
      <div className="container">
        <>
          <h3>View Events</h3>
          <p>Select Date, Time, and AM/PM</p>
          <div className="datetime-picker">
            <input
              type="datetime-local"
              value={formatDate(chosenDateTime)}
              onChange={handleDateTimeChange}
            />
          </div>
          {loadingEvents ? (
            <p>Loading events...</p>
          ) : (
            <>
              <p>{message}</p>
              <p>{currentTimeMessage}</p>
              <ul>
                {events.map((event) => (
                  <li
                    key={event.id}
                    className={
                      new Date(event.start.dateTime) <= chosenDateTime &&
                      chosenDateTime <= new Date(event.end.dateTime)
                        ? "highlighted-event"
                        : ""
                    }
                  >
                    <strong>{event.summary}</strong>
                    <br />
                    {event.description}
                    <br />
                    {new Date(event.start.dateTime).toLocaleString()} -{" "}
                    {new Date(event.end.dateTime).toLocaleString()}
                  </li>
                ))}
              </ul>
            </>
          )
          }
          </>

      </div>
    </div>
  </>
}

export default ViewEvents;
