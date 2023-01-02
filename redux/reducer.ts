import { DELETE_TOKEN, SET_TOKEN } from "./action"

type States = {
    userToken : boolean
}

const initialState: States = {
    userToken: false
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

          default: 
          return state
        }
}