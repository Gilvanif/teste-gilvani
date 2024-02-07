import { Knex } from "knex";

import { ETableNames } from "../ETableNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.form_payment, (table) => {
      table.bigIncrements("id").primary().index();
      table.string("nome", 150).index().notNullable();
      table.integer("parcelas");
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.form_payment}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.form_payment).then(() => {
    console.log(`# Dropped table ${ETableNames.form_payment}`);
  });
}
