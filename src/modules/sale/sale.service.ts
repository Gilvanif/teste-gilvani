import { ETableNames } from "../../database/ETableNames";
import { Knex } from "../../database/knex";
import { ISale } from "../../database/models";

export async function saleServiceCreate(sale: ISale) {
  try {
    const [result] = await Knex(ETableNames.sale).insert(sale).returning("id");

    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }
  } catch (error) {
    return error;
  }
}
