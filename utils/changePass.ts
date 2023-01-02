import axios from 'axios'

export async function changePass(id: string | null, password: string){
    let data = await axios.put('http://localhost:3001/changePassword', {id: id, password: password})
    console.log(data)
    return data.data
}