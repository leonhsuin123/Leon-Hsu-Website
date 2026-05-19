export interface MusicItem {
  id: string;
  title: string;
  artist: string;
  year: string;
  description: string;
  section: 'featured' | 'recordings' | 'upcoming';
}

export const musicData: MusicItem[] = [
  {
    id: '1',
    title: 'Midnight in Taipei',
    artist: 'Leon Hsu',
    year: '2025',
    description: 'A dark, brooding exploration of late-night cityscapes. Solo piano and subtle electronics.',
    section: 'featured'
  },
  {
    id: '2',
    title: 'Echoes of Autumn',
    artist: 'Leon Hsu Trio',
    year: '2024',
    description: 'A reflective and spacious trio recording capturing the essence of shifting seasons.',
    section: 'recordings'
  },
  {
    id: '3',
    title: 'Standards Vol. 1',
    artist: 'Leon Hsu',
    year: '2023',
    description: 'Classic jazz standards reinterpreted with modern harmonic concepts and rhythmic freedom.',
    section: 'recordings'
  },
  {
    id: '4',
    title: 'New Horizons',
    artist: 'Leon Hsu Quintet',
    year: '2026',
    description: 'Upcoming quintet album featuring original compositions bridging post-bop and contemporary classical music.',
    section: 'upcoming'
  }
];
