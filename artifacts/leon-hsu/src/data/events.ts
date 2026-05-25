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
    date: 'March 30, 2026',
    time: '9:00 PM',
    band: 'Woody Shaw Ensemble',
    venue: "Dizzy's Club",
    city: 'New York',
    state: 'NY',
    isPast: true
  },
  {
    id: '2',
    date: 'February 20, 2026',
    time: '9:00 PM',
    band: 'Adam Brenner Quartet',
    venue: 'The Lafayette Bar',
    city: 'Easton',
    state: 'PA',
    isPast: true
  },
  {
    id: '3',
    date: 'February 20, 2026',
    time: '7:30 PM',
    band: 'New Jersey Intercollegiate Big Band',
    venue: 'NJMEA Convention Atlantic City Convention Center',
    city: 'Atlantic City',
    state: 'NJ',
    isPast: true
  },
  {
    id: '4',
    date: 'January 28, 2026',
    time: '7:00 PM',
    band: 'Nate Tota Septet',
    venue: "Chris’ Jazz Café",
    city: 'Philadelphia',
    state: 'PA',
    isPast: true
  },
  {
    id: '5',
    date: 'January 3, 2026',
    time: '8:00 PM',
    band: 'Leon Hsu Quartet',
    venue: "WiJazz Records",
    city: 'Kaoshiung',
    state: 'Taiwan',
    isPast: true
  },
  {
    id: '6',
    date: 'December 29, 2025',
    time: '7:30 PM',
    band: 'Side Step',
    venue: 'Chiayi City International Band Festival',
    city: 'Chiayi',
    state: 'Taiwan',
    isPast: true
  }
];
