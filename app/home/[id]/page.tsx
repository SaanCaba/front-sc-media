import Detail from "../../components/Detail";

import axios from 'axios'

async function getDetail(id: string | null){
    let data:any = await axios.get(`http://localhost:3001/detail?id=${id}`)
    return data.data
}

type Data = {
    _id:string
    name:string
    img:string
    category:string
}

export default async function DetailPage({params} : any) {
    let data: Array<Data> = await getDetail(params.id)
    return (
    <div>
    {
        data.map(e => {
            return(
            <Detail product={e} />
        )})
    }
    </div>
  )
}