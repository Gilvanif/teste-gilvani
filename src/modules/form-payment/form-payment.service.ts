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
    return error;
  }
}
