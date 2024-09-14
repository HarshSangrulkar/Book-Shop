const { type } = require("@testing-library/user-event/dist/type");

import { buy_book } from "./BookTypes";
//here we are defining an action
const purchase_book = () => {
  return {
    type: buy_book,
  };
};
