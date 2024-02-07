import { knex } from "knex";
import "dotenv/config";
import pg from "pg";

import { postgres } from "./Environment";

const getEnvironment = () => {
  return postgres;
};

export const Knex = knex(getEnvironment());
