import { Knex } from "knex";
import { ETableNames } from "../ETableNames";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(ETableNames.user).del();

  // Inserts seed entries
  await knex(ETableNames.user).insert([
    {
      id: 1,
      nome: "teste",
      senha: "teste",
    },
  ]);
}
