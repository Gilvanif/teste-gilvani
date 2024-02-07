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

export async function saleServiceGet(id: number) {
  try {
    const result = await Knex(ETableNames.sale)
      .select("*")
      .where("id", "=", id)
      .first();
    return result;
  } catch (error) {
    return error;
  }
}

export async function saleServiceGetAll() {
  try {
    const result = await Knex(ETableNames.sale).select("*");
    return result;
  } catch (error) {
    return error;
  }
}

export async function saleServiceDelete(id: number) {
  try {
    const result = await Knex(ETableNames.sale).where("id", id).del();
    return { id: result };
  } catch (error) {
    return error;
  }
}

export async function saleServiceUpdate(sale: ISale) {
  try {
    const result = await Knex(ETableNames.sale)
      .update(sale)
      .where("id", sale.id);
    return { count: result };
  } catch (error) {
    return error;
  }
}
