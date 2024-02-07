import { Knex } from "knex";

import { ETableNames } from "../ETableNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.client, (table) => {
      table.bigIncrements("id").primary().index();
      table.string("nome", 150).index().notNullable();
      table.string("cpf", 150).index().notNullable();
      table.string("endereco", 400);
      table.string("email", 150);
      table.string("cep", 8);
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.client}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.client).then(() => {
    console.log(`# Dropped table ${ETableNames.client}`);
  });
}
