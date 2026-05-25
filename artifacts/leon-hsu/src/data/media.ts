export interface MediaItem {
  id: string;
  title: string;
  embedUrl: string;
  section: "performances" | "projects";
}

export const mediaData: MediaItem[] = [
  {
    id: '1',
    title: 'Memories of Formosa by Leon Hsu',
    embedUrl: 'https://www.youtube.com/embed/A8bbRDBuilA',
    section: 'performances'
  },
  {
    id: '2',
    title: 'Major Advance by Joshua Mercado',
    embedUrl: 'https://www.youtube.com/embed/0bz4XAWMeI0',
    section: 'performances'
  },
  {
    id: '3',
    title: 'Lush Life by Billy Strayhorn',
    embedUrl: 'https://www.youtube.com/embed/aSbsZdi_C-M',
    section: 'performances'
  },
  {
    id: '4',
    title: 'New Moon by Steve Grossman & 丟丟銅仔',
    embedUrl: 'https://www.youtube.com/embed/kxOFvckfDs0',
    section: 'performances'
  },
  {
    id: '5',
    title: 'Oriental Folk Song by Wayne Shorter',
    embedUrl: 'https://www.youtube.com/embed/8oEL4RfiEZk',
    section: 'performances'
  },
  {
    id: '6',
    title: 'Joshua Mercado Graduate Recital',
    embedUrl: 'https://www.youtube.com/embed/WKNl7j_hdQ0',
    section: 'performances'
  },
  {
    id: '7',
    title: 'Jacobo Vega-Albela Quintet Live at PAUSA Art House',
    embedUrl: 'https://www.youtube.com/embed/KhyCUowDq74',
    section: 'performances'
  },
  {
    id: '8',
    title: 'Time After Time',
    embedUrl: 'https://www.youtube.com/embed/d1UGdQczo4Y',
    section: 'performances'
  },
  {
    id: '9',
    title: "《It's Our Time》Official MV",
    embedUrl: 'https://www.youtube.com/embed/6BL_tgQtx-Q',
    section: 'projects'
  },
  {
    id: '10',
    title: 'Bedtime - Animation Scoring',
    embedUrl: 'https://www.youtube.com/embed/Pqwt4btku9E',
    section: 'projects'
  },
  {
    id: '11',
    title: 'Samsung QLED TV Commercial Scoring',
    embedUrl: 'https://www.youtube.com/embed/JGBiBJgZ6bY',
    section: 'projects'
  },
  {
    id: '12',
    title: 'Clouds - Animation Scoring',
    embedUrl: 'https://www.youtube.com/embed/D6CyW9q2XW4',
    section: 'projects'
  }
];
