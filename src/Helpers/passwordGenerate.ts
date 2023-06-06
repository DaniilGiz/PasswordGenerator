import { LOWER_LETTERS, NUMBERS, SYMBOLS, UPPER_LETTERS } from "../Constants";

export interface PasswordConfig {
  upperLetters: boolean;
  lowerLetters: boolean;
  numbers: boolean;
  symbols: boolean;
  length: number;
}

export const generatePassword = (config: PasswordConfig) => {
  let charset = "";
  if (config.upperLetters) charset += UPPER_LETTERS;
  if (config.lowerLetters) charset += LOWER_LETTERS;
  if (config.numbers) charset += NUMBERS;
  if (config.symbols) charset += SYMBOLS;

  let password = "";

  for (let i = 0; i < config.length; i++) {
    const randomChar = charset[Math.floor(Math.random() * charset.length)];
    password += randomChar;
  }

  if (!charset) return ""

  return password;
}