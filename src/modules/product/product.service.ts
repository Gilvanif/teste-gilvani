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

export async function productServiceGet(id: number) {
  try {
    const result = await Knex(ETableNames.product)
      .select("*")
      .where("id", "=", id)
      .first();
    return result;
  } catch (error) {
    return error;
  }
}

export async function productServiceGetAll() {
  try {
    const result = await Knex(ETableNames.product).select("*");
    return result;
  } catch (error) {
    return error;
  }
}

export async function productServiceDelete(id: number) {
  try {
    const result = await Knex(ETableNames.product).where("id", id).del();
    return { id: result };
  } catch (error) {
    return error;
  }
}

export async function productServiceUpdate(product: IProduct) {
  try {
    const result = await Knex(ETableNames.product)
      .update(product)
      .where("id", product.id);
    return { count: result };
  } catch (error) {
    return error;
  }
}
