import { errors } from '~/models'

export default {
  // Валидация e-mail
  isEmailValid(email) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    return (email == '') ? false : (reg.test(email)) ? true : false
  },

  // Валидация телефона
  isTelValid(tel) {
    const re = /^\+?[78][-\(]?\d{3}\)|\d{3}-?\d{2}-?\d{2}$/
    const valid = re.test(tel)
    return valid
  },

  // поиск родителя по классу
  findParent(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
  },

  // return errors
  returnError(response) {
    const error = { response }
    let code, message
    if (error.response.response) {
      code = error.response.response.data.code
      message = error.response.response.data.message
    } else {
      code = 500
      message = 'Сервер не доступен. Попробуйте позже!'
    }
    return { type: 'error', code, text: errors[code] ? errors[code] : message, message }
  }
}
