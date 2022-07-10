const utils = {
  /**
   * Modifica el string de error para hacerlo más legible.
   *
   * @param {String} msg Cadena de error
   */
  formatMsg(msg) {
    msg = msg.replace('non_field_errors: ', '')
    msg = msg.replace('[object Object]', '')
    msg = msg.replace('name', 'Nombre')
    msg = msg.replace('userNombre', 'Email')
    msg = msg.replace('password', 'Password')
    msg = msg.replace('email', 'Email')
    return msg
  },
  getErrorDetails(errors) {
    let errorDetails = ''
    let messages = ''
    errors.some((err) => {
      messages = err.message
      const field = err.field
      if (field === 'Error') {
        errorDetails += `${messages} \n`
      } else {
        errorDetails += `${field}: ${messages} \n`
      }
      return true
    })

    return utils.formatMsg(errorDetails)
  },
  getUrlVars() {
    const vars = {}
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value
    })
    return vars
  },
  isString(value) {
    return typeof value === 'string' || value instanceof String
  },
}

module.exports = utils
