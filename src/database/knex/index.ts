import { knex } from "knex";
import pg from "pg";
import { postgres } from "./Environment";

pg.types.setTypeParser(20, "text", parseInt);

const getEnvironment = () => {
  return postgres;
};

export const Knex = knex(getEnvironment());
