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

export async function clientServiceGet(id: number) {
  try {
    const result = await Knex(ETableNames.client)
      .select("*")
      .where("id", "=", id)
      .first();
    return result;
  } catch (error) {
    return error;
  }
}

export async function clientServiceGetAll() {
  try {
    const result = await Knex(ETableNames.client).select("*");
    return result;
  } catch (error) {
    return error;
  }
}

export async function clientServiceDelete(id: number) {
  try {
    const result = await Knex(ETableNames.client).where("id", id).del();
    return { count: result };
  } catch (error) {
    return error;
  }
}

export async function clientServiceUpdate(client: IClient) {
  try {
    const result = await Knex(ETableNames.client)
      .update(client)
      .where("id", client.id);
    return { count: result };
  } catch (error) {
    return error;
  }
}
