export interface KBArticle {
  id: string;
  path: string;
  name: string;
  file: string;
  title: string;
  img?: string;
  author?: string;
  date: string;
  tags: string[];
}

export interface KBRepository {
  updated: string;
  articles: KBArticle[];
}

export interface KBUser {
  user: string;
  name: string;
  avatar: string;
}

export interface KBTag {
  tag: string;
  count: number;
}

// Constants

export const EMPTY_REPO: KBRepository = {
  updated: '2000-01-01 12:00',
  articles: [],
};

export const EMPTY_USER: KBUser = {
  user: 'adalbero',
  name: 'Adalbero F. Guimaraes',
  avatar: 'assets/adalbero_f_guimaraes.jpg'
}
