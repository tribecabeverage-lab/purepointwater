export type BlogQuizResultKey =
  | 'bottleFree'
  | 'countertop'
  | 'fiveGallon'
  | 'commercialIce';

export interface BlogQuizOption {
  text: string;
  weights: Partial<Record<BlogQuizResultKey, number>>;
}

export interface BlogQuizQuestion {
  prompt: string;
  options: BlogQuizOption[];
}

export interface BlogQuizResultCopy {
  headline: string;
  body: string;
  ctaHref: string;
  ctaLabel: string;
}

export interface BlogQuizConfig {
  questions: BlogQuizQuestion[];
  results: Record<BlogQuizResultKey, BlogQuizResultCopy>;
}
