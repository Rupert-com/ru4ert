import md5 from 'md5'
/**
 * Get either a Gravatar URL or complete image tag for a specified email address.
 *
 * @param string $email The email address
 * @param string $s Size in pixels, defaults to 80px [ 1 - 2048 ]
 * @param string $d Default imageset to use [ 404 | mp | identicon | monsterid | wavatar ]
 * @param string $r Maximum rating (inclusive) [ g | pg | r | x ]
 * @param boole $img True to return a complete IMG tag False for just the URL
 * @param array $atts Optional, additional key/value attributes to include in the IMG tag
 * @return String containing either just a URL or a complete image tag
 * @source https://gravatar.com/site/implement/images/php/
 */
export function Gravatar(
  email: string,
  s = 80,
  d = 'mp',
  r = 'g',
  img = false,
  atts?: { [key: string]: string }
) {
  const url = `https://www.gravatar.com/avatar/${md5(
    email.trim().toLowerCase()
  )}?s=${s}&d=${d}&r=${r}`
  if (img) {
    let cRVal = `<img src="${url}"`

    if (atts)
      Object.keys(atts).forEach(key => {
        cRVal += `${key}=${atts[key]}`
      })
    cRVal += `/>`
    return cRVal
  }
  return url
}
