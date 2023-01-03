export const SET_TOKEN = "SET_TOKEN"
export const DELETE_TOKEN = "DELETE_TOKEN"
export const SET_USERNAME = "SET_USERNAME"

export function setToken(){

    return{
        type : SET_TOKEN,
    }

}

export function deleteToken(){
    return {
        type: DELETE_TOKEN
    }
}

export function setUserName(name: string | null){
    return {
        type: SET_USERNAME, payload: name
    }
}