
export const regex = {
  email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{7,}$/
}
export const ValidateColors = {
  Valid: '#2CB9B0',
  Invalid: '#FF0058',
  Default: '#8A8D90'
}
export function validate(data: string, ref: string) {
  switch(ref) {
    case 'Email':
      if(regex.email.test(data)){
       return true
      } else {
        return false
      }
      break;
    case 'Password':
      if(regex.password.test(data)){
        return true
      } else {
        return false
      }
      break;
  }
  return true
}