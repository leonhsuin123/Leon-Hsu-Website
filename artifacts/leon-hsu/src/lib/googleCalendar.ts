const CALENDAR_ID = "0328a6e7ca2bf448876a24e0a287a842cc3f53e51dfe95399c6f5399c5d341b1@group.calendar.google.com";
const API_KEY = "AIzaSyA9rp-efvFUGvyFBz9zSpMezXbiCOhyUWw";

function parseCityState(location: string) {
  const parts = location.split(",").map((p: string) => p.trim());

  const stateZipPart = parts.find((p: string) =>
    /^[A-Z]{2}\s+\d{5}/.test(p)
  );

  if (stateZipPart) {
    const state = stateZipPart.split(" ")[0];
    const stateIndex = parts.indexOf(stateZipPart);
    const city = stateIndex > 0 ? parts[stateIndex - 1] : "";

    return { city, state };
  }

  if (parts.length >= 2) {
    return {
      city: parts[parts.length - 2],
      state: parts[parts.length - 1],
    };
  }

  return { city: "", state: "" };
}

function extractTicketUrl(description: string) {
  const match = description.match(/(?:https?:\/\/)?(?:www\.)?[^\s<]+\.[^\s<]+/);

  if (!match) return "";

  let url = match[0];

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = `https://${url}`;
  }

  return url;
}

function removeUrls(description: string) {
  return description
    .replace(/(?:https?:\/\/)?(?:www\.)?[^\s<]+\.[^\s<]+/g, "")
    .trim();
}

export async function fetchGoogleEvents() {
  const now = new Date().toISOString();

  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${now}`
  );

  const data = await res.json();
  console.log("GOOGLE RESPONSE:", data);
  console.log("STATUS:", res.status);

  if (!res.ok) {
    return [];
  }

  return (data.items || []).map((event: any, index: number) => {
    const location = event.location || "";
    const { city, state } = parseCityState(location);

    const startRaw = event.start?.dateTime || event.start?.date || "";
    const startDate = new Date(startRaw);

    const description = event.description || "";
    const ticketUrl = extractTicketUrl(description);
    const band = removeUrls(description);

    return {
      id: event.id || index,

      date: startDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),

      time: event.start?.dateTime
        ? startDate.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          })
        : "",

      venue: event.summary || "Untitled Event",
      band,
      city,
      state,
      isPast: false,
      ticketUrl,
    };
  });
}
