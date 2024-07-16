const { google } = require('googleapis');

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
async function getPrimaryCalendar(email) {
  try {
    const primaryCalendar = await calendar.calendarList.get({
      calendarId: email,
    });
    console.log('Primary calendar:', primaryCalendar.data);
  } catch (error) {
    console.error('Error fetching primary calendar:', error);
  }
}

// Fetch the user's upcoming events
async function getUpcomingEvents(email) {
  try {
    const events = await calendar.events.list({
      calendarId: email,
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });
    console.log('Upcoming events:', events.data.items);
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
  }
}

// Call the functions with the user's email address
getPrimaryCalendar('yeneineh.seiba@a2sv.org');
getUpcomingEvents('yeneineh.seiba@a2sv.org');