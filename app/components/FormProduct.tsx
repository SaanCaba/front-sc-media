'use client'
import axios from 'axios'
import Image from 'next/dist/client/image'
import React,{FormEvent, useState} from 'react'
import Swal from 'sweetalert2'
import { getFileExtension2 } from '../../utils/getfileExtension'
import { publishProduct } from '../../utils/newProduct'
import styles from '../styles/FormProduct.module.css'
import Loader from './Loader'

type FileTypes = {
    lastModified: number
    name:string
    size: number
    type: string
    webkitRelativePath: string
}

function FormProduct() {
    
    const [options, setOptions] = useState(['Remeras', 'Gorra', 'Camisa', 'Automovil', 'Casa', 'Motocicleta', 'Bebida', 'Consola', 'Juegos de consolas', 'Electrodomesticos'])
    const [load, setLoad] = useState(false)
    
    const[info, setInfo] = useState({
        name: '',
        img: '',
        category: ''
    })
    const[test, setTest] = useState('')
    const [fileInput, setFileInput] = useState('')
    const [selectedFile, setSelectedFile] = useState('')
    const [previewSource ,setPreviewSource ] = useState('')
    console.log(selectedFile)

    const handleFileInputChange = ( e: FormEvent<HTMLInputElement>) => {
        if(e.currentTarget.files !== null){
            const file : FileTypes = e.currentTarget.files[0]
            console.log(file.type)
        if(file.type.includes('application/pdf') || file.type.includes('video/mp4')){
            return Swal.fire({
                text:'Formato inválido!'
            })
        }
            previewFile(file)
        }
    }

    const previewFile = (file:any) => {
        const reader:any = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () =>{
            setPreviewSource(reader.result)
            setInfo({
                ...info,
                img:reader.result
            })
        }
    }
    console.log(info)
    const handleSubmitFile = () => {
        if(!previewSource) return;
        uploadImage(previewSource)
    }

    const uploadImage = async (base64EncodedImage: string) => {
        try {
        let img =  await axios.post('http://localhost:3001/uploadimage', {data: base64EncodedImage})
        setTest(img.data.img)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e : FormEvent<HTMLInputElement>) => {
        setInfo({
            ...info,
            [e.currentTarget.name] : e.currentTarget.value
        })
    }

    const handleForm  = async(e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(info.name.length === 0) return Swal.fire({text:'El nombre no puede estar vacía'})
        if(info.category.length === 0) return Swal.fire({text:'La categoría no puede estar vacía'})
        if(info.img.length === 0) return Swal.fire({text:'Hay que seleccionar una imagen!'})
        setLoad(true)
        
        let data: any =  await publishProduct(info)
        console.log(data)
       await Swal.fire({
            text:data.data || data.response.data.message
        }) 

       setLoad(false)
       return window.location.reload()
    }

    const handleSelectChange = (e: FormEvent<HTMLSelectElement>) => {
        console.log(e.currentTarget.value)
        setInfo({
            ...info,
            category: e.currentTarget.value
        })
    }

  return (
    <div className={load ? `h-screen flex flex-col relative ${styles.noOverflow}` : `${styles.noOverflow} h-screen bg-black flex flex-col relative`} >
        {
            load ? (
                <div  className={` absolute ${styles.cargandoEdit} ${styles.noOverflow}`}>
                    <div className='h-screen w-screen flex items-center justify-center'>
                    <div style={{marginTop:'70px'}} >
                        <Loader />
                    </div>
                </div>
                </div>

            ) : ''
        }
        <div style={{marginTop:'70px'}} className='flex justify-center mt-4'>
            <div className='flex flex-col'>


        <input name='image' style={{width:'250px'}} value={fileInput} onChange={(e) => handleFileInputChange(e)} type='file' />
       {
        previewSource && (
            <div className='flex justify-center'>
            <Image src={previewSource} alt={info.name} height={250} width={250} />
            </div>
        
        )
       }
       {/* <button onClick={() => handleSubmitFile()}>upload image</button> */}
        <input style={{width:'250px'}} className='border border-black m-1' type="text" value={info.name} name='name' onChange={(e) => handleChange(e)} />
        <select style={{width:'250px'}} onChange={(e) => handleSelectChange(e)}>
            {
                options.map((e, i) => {
                    return(
                        <option key={i} value={e}>{e}</option>
                    )
                })
            }
        </select>
        {/* <input className='border border-black m-1' type="text" value={info.category} name='category' onChange={(e) => handleChange(e)} /> */}
        <button style={{width:'250px'}} className='bg-[#81d2eb] p-2' onClick={(e) => handleForm(e)}>PUBLISH</button>
        {
            test.length > 0 && <img src={test} style={{height:'300px'}} />
        }
            </div>

        </div>

    </div>
  )
}

export default FormProduct