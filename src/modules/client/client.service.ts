import { IClient } from "../../database/models";
import { ETableNames } from "../../database/ETableNames";
import { Knex } from "../../database/knex";

export async function clientServiceCreate(client: Omit<IClient, "id">) {
  try {
    const [result] = await Knex(ETableNames.client)
      .insert(client)
      .returning("id");

    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }
  } catch (error) {
    console.log("🚀 ~ clientServiceCreate ~ error:", error);
    return error;
  }
}
