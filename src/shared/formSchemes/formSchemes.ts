import * as yup from "yup";
import { roleOptions } from "../selectOptions/roleSelectOptions";

export const employeeEditSchema = yup.object().shape({
  name: yup
    .string()
    .max(30, "Максимальная длина имени 30 символов")
    .min(3, "Минимальная длина имени 3 символа!")
    .required("Это обязательное поле"),
  phone: yup
    .string()
    .matches(
      /^\+\d{1,3} \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      "Неверный формат телефона"
    )
    .required("Телефон обязателен"),
  birthday: yup
    .string()
    .required("Это обязательное поле")
    .matches(/^\d{2}\.\d{2}\.\d{4}$/, "Дата должна быть в формате DD.MM.YYYY"),
  role: yup
    .string()
    .oneOf(roleOptions, "Выберите корректную должность")
    .required("Должность обязательна"),
  isArchive: yup.boolean().required(),
});
