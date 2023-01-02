'use client'
import axios from 'axios'
import React,{FormEvent, useState} from 'react'
import Swal from 'sweetalert2'
import { getFileExtension2 } from '../../utils/getfileExtension'
import { publishProduct } from '../../utils/newProduct'


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
        Swal.fire({
            text:data.data || data.response.data.message
        }) 
        return setLoad(false)
    }

    const handleSelectChange = (e: FormEvent<HTMLSelectElement>) => {
        console.log(e.currentTarget.value)
        setInfo({
            ...info,
            category: e.currentTarget.value
        })
    }

  return (
    <div className='flex flex-col' >
        {
            load ? (
                <div className='h-screen w-full'>
                    <div className='flex justify-center items-center'>
                        <h1 className='text-white'>Cargando...</h1>
                    </div>
                </div>
            ) : ''
        }
        <input name='image' value={fileInput} onChange={(e) => handleFileInputChange(e)} type='file' />
       {
        previewSource && (
            <img src={previewSource} style={{height:'300px'}} />
        )
       }
       {/* <button onClick={() => handleSubmitFile()}>upload image</button> */}
        <input className='border border-black m-1' type="text" value={info.name} name='name' onChange={(e) => handleChange(e)} />
        <select onChange={(e) => handleSelectChange(e)}>
            {
                options.map((e, i) => {
                    return(
                        <option key={i} value={e}>{e}</option>
                    )
                })
            }
        </select>
        {/* <input className='border border-black m-1' type="text" value={info.category} name='category' onChange={(e) => handleChange(e)} /> */}
        <button className='bg-[#81d2eb] p-2' onClick={(e) => handleForm(e)}>PUBLISH</button>
        {
            test.length > 0 && <img src={test} style={{height:'300px'}} />
        }
    </div>
  )
}

export default FormProduct