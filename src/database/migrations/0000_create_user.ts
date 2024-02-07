import { Knex } from "knex";

import { ETableNames } from "../ETableNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.user, (table) => {
      table.bigIncrements("id").primary().index();
      table.string("nome", 150).index().notNullable();
      table.string("senha", 150).notNullable();
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.user}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.user).then(() => {
    console.log(`# Dropped table ${ETableNames.user}`);
  });
}
