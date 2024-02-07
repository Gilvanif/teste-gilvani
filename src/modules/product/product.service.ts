import { ETableNames } from "../../database/ETableNames";
import { Knex } from "../../database/knex";
import { IProduct } from "../../database/models";

export async function productServiceCreate(product: IProduct) {
  try {
    const [result] = await Knex(ETableNames.product)
      .insert(product)
      .returning("id");

    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }
  } catch (error) {
    return error;
  }
}
