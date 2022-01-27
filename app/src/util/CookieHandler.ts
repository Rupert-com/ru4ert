import moment from 'moment'
import { useState } from 'react'

export const getCookie = (cname: string) => {
  var name = cname + '='
  var decodedCookie = decodeURIComponent(document.cookie)
  var ca = decodedCookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
}

export const setCookie = (
  key: string,
  value: string | number,
  expire = moment().add(1, 'h').toDate()
) => {
  if (process.env.NODE_ENV === 'production')
    document.cookie = `${key}=${value}; expires=${expire.toUTCString()}; Secure; path=/`
  else document.cookie = `${key}=${value}; expires=${expire.toUTCString()}; path=/`
}

export const deleteCookie = (key: string) => setCookie(key, '', moment(0).toDate())

export const useCookie = (
  key: string,
  defaultValue?: string
): [string | undefined, (value: string, numberOfDays: Date) => void] => {
  const cCookie = () => getCookie(key) ?? defaultValue
  const [cCookieVal, setcCookieVal] = useState(cCookie())

  const updateCookie = (value: string, numberOfDays: Date) => {
    setcCookieVal(value)
    setCookie(key, value, numberOfDays)
  }

  return [cCookieVal, updateCookie]
}
