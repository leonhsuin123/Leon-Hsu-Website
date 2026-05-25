export interface EventItem {
  id: string;
  date: string;
  time: string;
  band: string;
  venue: string;
  city: string;
  state: string;
  isPast: boolean;
}

export const eventsData: EventItem[] = [
  {
    id: '1',
    date: 'May 24, 2026',
    time: '8:00 PM',
    band: 'Leon Hsu Quartet',
    venue: 'Blue Note',
    city: 'New York',
    state: 'NY',
    isPast: true
  },
  {
    id: '2',
    date: 'June 12, 2026',
    time: '7:30 PM',
    band: 'Leon Hsu Trio',
    venue: 'Smalls Jazz Club',
    city: 'New York',
    state: 'NY',
    isPast: true
  },
  {
    id: '3',
    date: 'March 15, 2025',
    time: '9:00 PM',
    band: 'Leon Hsu Solo Piano',
    venue: 'The Village Vanguard',
    city: 'New York',
    state: 'NY',
    isPast: true
  },
  {
    id: '4',
    date: 'February 10, 2025',
    time: '8:00 PM',
    band: 'Leon Hsu Trio',
    venue: "Dizzy's Club",
    city: 'New York',
    state: 'NY',
    isPast: true
  }
];
