import styles from './page.module.css'
import Home from '../components/Home'

async function getData(){
  const res = await fetch('http://localhost:3001/products')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

type DataTypes = {
    name:string,
    img: string,
    category:string,
    _id: string
}

export default async function HomePage() {
  const data:Array<DataTypes> = await getData()
  console.log(data)
  return (
    <>
      <Home products={data} />
    </>
  )
}