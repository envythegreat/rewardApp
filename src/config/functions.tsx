
export const regex = {
  email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{7,}$/,
  username: /^[a-zA-Z0-9]+$/,
  fullname: /^[a-zA-Z]+ [a-zA-Z]+$/,
  address: /^[a-zA-Z0-9\s,'-]*$/
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
    case 'Username':
      if(regex.username.test(data)){
        return true
      } else {
        return false
      }
      break;
    case 'FullName':
      if(regex.fullname.test(data)){
        return true
      } else {
        return false
      }
      break;
    case 'Address':
      if(regex.address.test(data)){
        return true
      } else {
        return false
      }
      break;
  }
  return true
}
// export function handleState( e: string, ref:string) {
//   this.setState({
//     [ref]: e
//   })
// }