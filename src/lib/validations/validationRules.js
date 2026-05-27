const onlyLetters = (value) => /^[a-zA-Z]+$/.test(value);
const onlyNumbers = (value) => /^[0-9]+$/.test(value);
const isValidTelephone = (phone) => /^\d{9}$/.test(phone)
const isAlfanumeric = (value) => /^[a-zA-Z0-9 áéíóúÁÉÍÓÚüÜ]+$/.test(value);

const isValidDNI = (value) => onlyNumbers(value) && value.length === 8;
const isValidRUC = (value) => onlyNumbers(value) && value.length === 11;
const isValidPassport = (value) =>isAlfanumeric(value) && value.length >= 6 && value.length <= 12;

export {
  onlyLetters,
  onlyNumbers,
  isValidTelephone,
  isAlfanumeric,
  isValidDNI,
  isValidRUC,
  isValidPassport,
};