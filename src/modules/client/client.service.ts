import { IClient } from "../../database/models";
import { ETableNames } from "../../database/ETableNames";
import { Knex } from "../../database/knex";

export async function clientServiceCreate(client: Omit<IClient, "id">) {
  try {
    const [result] = await Knex(ETableNames.client)
      .insert(client)
      .returning("id");
    return result;
  } catch (error) {
    return error;
  }
}
