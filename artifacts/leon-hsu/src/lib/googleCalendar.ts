const CALENDAR_ID = "0328a6e7ca2bf448876a24e0a287a842cc3f53e51dfe95399c6f5399c5d341b1@group.calendar.google.com";
const API_KEY = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;

export async function fetchGoogleEvents() {
  const now = new Date().toISOString();

  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${now}`
  );

  const data = await res.json();

  return (data.items || []).map((event: any, index: number) => {
    const location = event.location || "";

    // Split "City, State" (or "Venue, City, State")
    const parts = location.split(",").map((p: string) => p.trim());

    // More robust parsing (handles venue names too)
    const city = parts.length >= 2 ? parts[parts.length - 2] : "";
    const state = parts.length >= 2 ? parts[parts.length - 1] : "";

    return {
      id: event.id || index,
      date: event.start?.date || event.start?.dateTime,

      time: event.start?.dateTime
        ? new Date(event.start.dateTime).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        : "",

      venue: event.summary || "Untitled Event",
      band: event.description || "",

      city,
      state,

      isPast: false,
    };
  });
}
