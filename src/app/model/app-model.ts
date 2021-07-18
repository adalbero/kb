export interface KBArticle {
  id: string;
  path: string;
  file: string;
  title: string;
  img?: string;
  tags: string[];
}

export interface KBRepository {
  updated: string;
  articles: KBArticle[];
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
