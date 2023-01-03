import axios from 'axios'

export async function getDetail(id: string | null){
    let data = await axios.get(`http://localhost:3001/detail}`, {data: id})
    console.log(data.data)
    return data.data
}

