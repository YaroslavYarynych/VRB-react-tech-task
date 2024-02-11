import axious from "axios";

export const BASE_URL = "https://vrb-test-task.onrender.com";

const requests = {
  get: (pathname: string) => axious.get(`${BASE_URL}${pathname}`),
};

export const getFirst10Articles = () => requests.get("/articles");

export const getMoreArticles = (page: number) =>
  requests.get(`/articles/${page}`);
