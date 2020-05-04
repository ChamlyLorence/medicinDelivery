import axios from 'axios'

export const register = newUser => {
  return axios
    .post('http://localhost:5000/users/register', {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('http://localhost:5000/users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = user => {
  return axios
    .get('http://localhost:5000/users/profile', {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const order = medicin => {
  return axios
    .post('http://localhost:5000/orders/add', {
      userID : medicin.userID,
      orderName : medicin.orderName,
      address: medicin.address,
      discription: medicin.discription,
      paymentType: medicin.paymentType
    })
    .then(response => {
      console.log('Registered')
    })
}

export const getOrderDetails = userID => {
  return axios
    .get('http://localhost:5000/orders/'+userID )
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
