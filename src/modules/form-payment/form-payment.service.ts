import { ETableNames } from "../../database/ETableNames";
import { Knex } from "../../database/knex";
import { IFormPayment } from "../../database/models";

export async function formPaymentServiceCreate(formPayment: IFormPayment) {
  try {
    const [result] = await Knex(ETableNames.form_payment)
      .insert(formPayment)
      .returning("id");

    return result;
  } catch (error) {
    console.log("🚀 ~ formPaymentServiceCreate ~ error:", error);
    return error;
  }
}

export async function formPaymentServiceGet(id: number) {
  try {
    const result = await Knex(ETableNames.form_payment)
      .select("*")
      .where("id", "=", id)
      .first();
    return result;
  } catch (error) {
    return error;
  }
}

export async function formPaymentServiceGetAll() {
  try {
    const result = await Knex(ETableNames.form_payment).select("*");
    return result;
  } catch (error) {
    return error;
  }
}

export async function formPaymentServiceDelete(id: number) {
  try {
    const result = await Knex(ETableNames.form_payment).where("id", id).del();
    return { count: result };
  } catch (error) {
    return error;
  }
}

export async function formPaymentServiceUpdate(formPayment: IFormPayment) {
  try {
    const result = await Knex(ETableNames.form_payment)
      .update(formPayment)
      .where("id", formPayment.id);
    return { count: result };
  } catch (error) {
    return error;
  }
}
