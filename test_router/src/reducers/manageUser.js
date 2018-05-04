const manageUser = {
  isLogin : false,
  emailUser: '',
  isAdmin: false
}


const ManageUser = (state = manageUser, action) => {
  switch (action.type) {
      case 'LOGIN_USER':
          return {...state, isLogin: true, emailUser : action.email, isAdmin: false}

      case 'LOGOUT_USER':
          return {isLogin: false, emailUser : '', isAdmin: false}


      default:
          return state
      }
}

export default ManageUser