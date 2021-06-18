export interface KBArticle {
  page: string;
  name: string;
  title?: string;
  tags: string[];
}

export interface KBRepository {
  updated: string;
  articles: KBArticle[];
}

// Constants

export const EMPTY_REPO: KBRepository = {
  updated: '2000-01-01 12:00',
  articles: [],
};
