export interface MusicItem {
  id: string;
  title: string;
  artist: string;
  year: string;
  description: string;
  spotify: string;
  appleMusic: string;
  youtube: string;
  section: 'releases' | 'featured_on' | 'upcoming';
}

export const musicData: MusicItem[] = [
  {
    id: '2',
    title: 'Crossroads',
    artist: 'Haik Demirchian',
    year: '2025',
    description: ' ',
    spotify: 'https://open.spotify.com/album/1YT1WwPrq1FwjxFtcVWoQR?si=j07KL-sESa2EQT1FNy16OQ',
    appleMusic: 'https://music.apple.com/us/album/crossroads/1786422285',
    youtube: 'https://www.youtube.com/watch?v=INnEVjTI17Q&list=OLAK5uy_kCAh-7Ue2k4-AOIMLi3m0DHU8pAR3Zbi4',
    section: 'featured_on'
  },
  {
    id: '3',
    title: 'Un-Belonging',
    artist: 'Jacobo Vega-Albela',
    year: '2024',
    description: ' ',
    spotify: 'https://open.spotify.com/album/4Nw07OaoW3aLt74rIrmHKO?si=lCzfPgojStyU3XUSoIo5hg',
    appleMusic: 'https://music.apple.com/us/album/un-belonging/1847754471',
    youtube: 'https://www.youtube.com/watch?v=YRB5crNFw_U&list=OLAK5uy_mvhhi6mtiJzHZ94ZuUAe4WYYFadOradLg',
    section: 'featured_on'
  },
  {
    id: '4',
    title: 'Awake',
    artist: 'Malpaca 羊駝小姐',
    year: '2025',
    description: ' ',
    spotify: 'https://open.spotify.com/track/5XKomIeis5YoEt7ZSCQJlX?si=1523adbf315447a1',
    appleMusic: 'https://music.apple.com/us/album/awake-feat-eq-zhu/1840624886?i=1840624989',
    youtube: 'https://youtu.be/Ct1MQ3yOi0k?si=1HPZkyBLJcwJKfqp',
    section: 'featured_on'
  }
  // To add releases: { id, title, artist, year, description, section: 'releases' }
  // To add upcoming projects: { id, title, artist, year, description, section: 'upcoming' }
];
