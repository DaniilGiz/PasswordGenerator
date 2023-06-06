export const UPPER_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const LOWER_LETTERS = "abcdefghijklmnopqrstuvwxyz";
export const NUMBERS = "0123456789";
export const SYMBOLS = "!@#$%^&*()_+~?";

type CalculatorNum = {
  value: string;
  class: string;
}

export const calculatorNum: CalculatorNum[] = [
  { value: "1", class: "calc_num" },
  { value: "2", class: "calc_num" },
  { value: "3", class: "calc_num" },
  { value: "4", class: "calc_num" },
  { value: "5", class: "calc_num" },
  { value: "6", class: "calc_num" },
  { value: "7", class: "calc_num" },
  { value: "8", class: "calc_num" },
  { value: "9", class: "calc_num" },
  { value: "0", class: "calc_num zero" },
]