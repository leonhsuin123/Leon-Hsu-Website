export interface MusicItem {
  id: string;
  title: string;
  artist: string;
  year: string;
  description: string;
  section: 'releases' | 'featured_on' | 'upcoming';
}

export const musicData: MusicItem[] = [
  {
    id: '2',
    title: 'Echoes of Autumn',
    artist: 'Leon Hsu Trio',
    year: '2024',
    description: 'A reflective and spacious trio recording capturing the essence of shifting seasons.',
    section: 'featured_on'
  },
  {
    id: '3',
    title: 'Standards Vol. 1',
    artist: 'Leon Hsu',
    year: '2023',
    description: 'Classic jazz standards reinterpreted with modern harmonic concepts and rhythmic freedom.',
    section: 'featured_on'
  }
  // To add releases: { id, title, artist, year, description, section: 'releases' }
  // To add upcoming projects: { id, title, artist, year, description, section: 'upcoming' }
];
