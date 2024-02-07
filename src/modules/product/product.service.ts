import { ETableNames } from "../../database/ETableNames";
import { Knex } from "../../database/knex";
import { IProduct } from "../../database/models";

export async function productServiceCreate(product: IProduct) {
  try {
    const [result] = await Knex(ETableNames.product)
      .insert(product)
      .returning("id");

    return result;
  } catch (error) {
    return error;
  }
}
