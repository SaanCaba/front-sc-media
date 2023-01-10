import { DELETE_TOKEN, SET_THEME, SET_TOKEN, SET_USERNAME } from "./action"

type States = {
    userToken : boolean
    username: string
}

const initialState: States = {
    userToken: false,
    username: '',
}

type Action = {
    // sacar este any
    payload?: any,
    type: string 
}


export function rootReducer(state = initialState , action: Action) : any{
    switch(action.type){
        case SET_TOKEN:
          return{
              ...state,
              userToken: true
          }
          
        case DELETE_TOKEN:
            return{
                ...state,
                userToken: false
            }  
        case SET_USERNAME:
            return{
                ...state,
                username: action.payload
            }

          default: 
          return state
        }
}