import { knex } from "knex";

import { postgres } from "./Environment";

const getEnvironment = () => {
  return postgres;
};

export const Knex = knex(getEnvironment());
