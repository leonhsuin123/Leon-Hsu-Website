export interface MediaItem {
  id: string;
  title: string;
  embedUrl: string;
}

export const mediaData: MediaItem[] = [
  {
    id: '1',
    title: 'Memories of Formosa',
    embedUrl: 'https://www.youtube.com/embed/A8bbRDBuilA'
  },
  {
    id: '2',
    title: 'Jacobo Vega-Albela Quintet Live at PAUSA Art House',
    embedUrl: 'https://www.youtube.com/embed/KhyCUowDq74'
  },
  {
    id: '3',
    title: 'Joshua Mercado Graduate Recital',
    embedUrl: 'https://www.youtube.com/embed/WKNl7j_hdQ0'
  },
  {
    id: '4',
    title: 'Oriental Folk Song',
    embedUrl: 'https://www.youtube.com/embed/8oEL4RfiEZk'
  }
];
