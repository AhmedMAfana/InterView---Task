export const state = {
        user: {
            fullName : null,
            email: null,
            password: null,
            authentication : false
        },

        currentUser: sessionStorage.getItem('authUser'),
}
export const getters = {
    loggedIn (state) {
        return !!state.user.authentication
    },

    getUserInfo(){
        return localStorage.getItem('user')
    }

}

export const  mutations = {
          
            SET_NEW_USER_ACCOUNT(state , user) {
                state.user = user
                saveState('user', user)

            },

            SET_USER_LOGIN_SUCCESS(state , user) {
                state.user = user
                localStorage.setItem('user' , JSON.stringify(user))
                window.location.href='/dashboard'

            },
            
            CLEAR_USER_DATA(state) {

                state.user = null
                localStorage.removeItem('user')
                window.location.href='/login'
            }
               
        }

export const actions = {


  
        registerFormApi({commit} , credentials) {

                // Hi Maybe we need some validation  for params as a back-end side  -- # Ahmed Mohammed

               let obj = { authentication: false  , isNew : true};
               let newUser = Object.assign(credentials, obj);

               let response = {
                msg : 'registe success',
                status : 201,
                data : newUser

            }

               commit('SET_NEW_USER_ACCOUNT' ,newUser )

               return response
            },
    
        
            loginFormApi({commit} , credentials) {


                // Hi Maybe we need some validation  for params as a back-end side  -- # Ahmed Mohammed
                // Get User info from localStorage && Check email , password
                
               let loggeduser = localStorage.getItem('user')
               let userAuth = loggeduser ? JSON.parse(loggeduser) :  false

               if (!loggeduser) {

                    let response = {
                        msg : 'No user in localStorage Please Register one first',
                        status : 401
                    }

                    return response


              }else{

                if (userAuth.isNew) {

                    let email = credentials.email
                    let password = credentials.password


                    if( email != userAuth.email || password != userAuth.password )
                    {
                        let response = {
                            msg : 'credentials error',
                            status : 401
                        }

                        return response

                    }else{

                        let obj = { authentication: true  , isNew : false};
                        let loginData = Object.assign(credentials, obj);

                        let response = {
                            msg : 'login success',
                            status : 200,
                            data : loginData
                        }


                        commit('SET_USER_LOGIN_SUCCESS' ,loginData )
                        return response
                    }

                  }
              }
              
            },


            logOut({commit} ){
                commit('CLEAR_USER_DATA')
            },

           
            
    
        }

 // ===
// Private helpers
// ===

function saveState(key, state) {
    window.localStorage.setItem(key, JSON.stringify(state))
}

 