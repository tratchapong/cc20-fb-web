import React from 'react'
import { PhotoIcon2 } from '../icons'

function AddPicture({ file, setFile }) {
  const hdlFileChange = e => {
    // console.log(e.target.files)
    // console.log(e.target.value)
    setFile(e.target.files[0])
    // console.log(URL.createObjectURL(e.target.files[0]))
  }
  const removePic = e => {
    e.stopPropagation()
    document.getElementById('input-file').value = ''
    setFile(null)
  }
  return (
    <div className='flex flex-col p-2 border rounded-lg'>
      <div className='bg-slate-100 min-h-40  relative cursor-pointer hover:bg-slate-200'
        onClick={() => document.getElementById('input-file').click()}
      >
        <input type="file" className='hidden' id='input-file'
          onChange={hdlFileChange}
        />
        {file &&
          <>
            <img src={URL.createObjectURL(file)} className='h-full block mx-auto' />
            <button className='btn btn-sm btn-circle btn-dash btn-error absolute top-0 right-0 opacity-60' 
              onClick={removePic}>x</button>
          </>
        }
        {!file && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <PhotoIcon2 className='w-10 opacity-70' />
        </div>}
      </div>
    </div>
  )
}

export default AddPicture