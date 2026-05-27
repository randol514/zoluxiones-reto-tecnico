//Validations
import { isValidTelephone, onlyNumbers, isValidDNI, isValidRUC, isValidPassport } from '@/lib/validations/validationRules'
import { ERROR_MESSAGES } from '@/lib/validations/errorMessages'

export const formHomeValidation = (form) => {
  let errors = {}

  if (!form.typeDocument) {
    errors.typeDocument = ERROR_MESSAGES.required
  } else {
    if (!form.document?.trim()) {
      errors.document = ERROR_MESSAGES.required
    } 
    else {
      switch (form.typeDocument) {
        case "DNI":
          if (!onlyNumbers(form.document)) {
            errors.document = ERROR_MESSAGES.invalidNumeric
          } else if (!isValidDNI(form.document)) {
            errors.document = ERROR_MESSAGES.maxLength(8)
          }
          break

        case "RUC":
          if (!onlyNumbers(form.document)) {
            errors.document = ERROR_MESSAGES.invalidNumeric
          } else if (!isValidRUC(form.document)) {
            errors.document = ERROR_MESSAGES.maxLength(11)
          }
          break
        case "Pasaporte":
          if (!isValidPassport(form.document)) {
            errors.document = "El pasaporte debe tener entre 6 y 12 caracteres"
          }
          break

        default:
          break
      }
    }
  }


  if (!form.telephone?.trim()) {
    errors.telephone = ERROR_MESSAGES.required
  } else if (!isValidTelephone(form.telephone)) {
    errors.telephone = ERROR_MESSAGES.invalidTelephone
  }

  if (!form.politiesPrivacy) {
    errors.politiesPrivacy = ERROR_MESSAGES.requiredCheckbox
  }

  if (!form.politiesCommunications) {
    errors.politiesCommunications = ERROR_MESSAGES.requiredCheckbox
  }

  return errors
}
