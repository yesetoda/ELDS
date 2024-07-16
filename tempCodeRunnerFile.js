import { google } from 'googleapis';

async function getCalendarEvents(email) {
  try {
    // Set up the Google API client
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_id: 'YOUR_CLIENT_ID',
        client_secret: 'YOUR_CLIENT_SECRET',
        refresh_token: 'YOUR_REFRESH_TOKEN',
      },
      scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
    });

    // Create the Google Calendar API client
    const calendar = google.calendar({ version: 'v3', auth });

    // Fetch the user's primary calendar
    const primaryCalendar = await calendar.calendarList.get({
      calendarId: email,
    });
    console.log('Primary calendar:', primaryCalendar.data);

    // Fetch the user's upcoming events
    const events = await calendar.events.list({
      calendarId: email,
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });
    console.log('Upcoming events:', events.data.items);
  } catch (error) {
    console.error('Error fetching calendar events:', error);
  }
}

// Call the function with the user's email address
getCalendarEvents('yeneineh.seiba@a2sv.org');