import { ETableNames } from "../../database/ETableNames";
import { Knex } from "../../database/knex";
import { ISale } from "../../database/models";

export async function saleServiceCreate(sale: ISale) {
  try {
    const [result] = await Knex(ETableNames.sale).insert(sale).returning("id");

    return result;
  } catch (error) {
    return error;
  }
}
