import { Knex } from "knex";

import { ETableNames } from "../ETableNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.product, (table) => {
      table.bigIncrements("id").primary().index();
      table.string("nome", 150).index().notNullable();
      table.integer("quantidade").notNullable().defaultTo(0);
      table.float("preco", 2);
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.product}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.product).then(() => {
    console.log(`# Dropped table ${ETableNames.product}`);
  });
}
