export interface PasswordConfig {
  upperLetters: boolean;
  lowerLetters: boolean;
  numbers: boolean;
  symbols: boolean;
  length: number;
}

export const generatePassword = (config: PasswordConfig) => {
  let charset = "";
  if (config.upperLetters) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (config.lowerLetters) charset += "abcdefghijklmnopqrstuvwxyz";
  if (config.numbers) charset += "0123456789";
  if (config.symbols) charset += "!@#$%^&*()_+~?";

  let password = "";

  for (let i = 0; i < config.length; i++) {
    const randomChar = charset[Math.floor(Math.random() * charset.length)];
    password += randomChar;
  }

  if (!charset) return ""

  return password;
}