export type CurrentUser = {
  author: string;
  id: string;
  password: string;
};

export type FormData = {
  title: string;
  description: string;
  image: string;
};

export interface ArticleType {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
}

export enum InputData {
  title,
  description,
  image,
}

export enum RegistrationData {
  author,
  password,
}

export interface DataState {
  article: ArticleType[];
}

export interface PinType {
  id: string;
}

export interface PinState {
  pin: PinType[];
}
