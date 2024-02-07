import { Knex } from "knex";

import { ETableNames } from "../ETableNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.sale, (table) => {
      table.bigIncrements("id").primary().index();
      table.integer("id_client").index().notNullable();
      table.integer("id_product").index().notNullable();
      table.integer("id_form_payment").index().notNullable();
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.sale}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.sale).then(() => {
    console.log(`# Dropped table ${ETableNames.sale}`);
  });
}
