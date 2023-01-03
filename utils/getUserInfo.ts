import axios from 'axios'

export async function getUserInfo(id:string | null){
    let data = await axios.get('http://localhost:3001/getuserinfo', {data:id})
    console.log(data)
    return data
}