export const getAgeFromBirthday = (birthdayDateFormat) => {
  const [day, month, year] = birthdayDateFormat.split('-').map(Number)
  const birthdayDate = new Date(year, month - 1, day)
  const today = new Date()
  let age = today.getFullYear() - birthdayDate.getFullYear()
  if (
    today.getMonth() < birthdayDate.getMonth() ||
    (today.getMonth() === birthdayDate.getMonth() && today.getDate() < birthdayDate.getDate())
  ) {
    age--
  }
  return age
}