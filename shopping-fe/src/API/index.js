const BASE_URL = "http://localhost:3001";
const ITEMS = "items";
const DESCRIPTION = "description";
const ALL_ITEMS = "all";
const USER = "users";
const LOGIN = "login";
const SAVE_USER = "save";

export const CATEGORIES = [
  { label: "Books", value: "books" },
  { label: "Electronics", value: "electronics" },
  { label: "Furniture", value: "furniture" },
];

export const GET_FEW_ITEMS_URL = (number) =>
  `${BASE_URL}/${ITEMS}/${ALL_ITEMS}/${number}`;

export const ALL_ITEMS_URL = `${BASE_URL}/${ITEMS}/${ALL_ITEMS}`;

export const GET_ITEM_DESCRIPTION = (id) =>
  `${BASE_URL}/${ITEMS}/${DESCRIPTION}/${id}`;

export const LOGIN_URL = () => `${BASE_URL}/${USER}/${LOGIN}`;
export const SIGN_UP_URL = () => `${BASE_URL}/${USER}/${SAVE_USER}`;
