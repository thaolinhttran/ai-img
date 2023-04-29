import React, { useState } from 'react'
import { FormField } from '../components'
import preview from '../assets/preview.png'
import {Loader} from '../components'

const handleSubmit = () => {

}

const handleSurpriseMe = () => {

}

const handleChange = () =>{

}

const CreatePost = () => {
  const [isSurpriseMe, setIsSurpriseMe] = useState(false);
  const [generatingImg, setGeneratingImg] = useState(false);
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
          Let The Magic Begins
        </h1>
        <p className='mt-3 text-[666e75] text-16px max-w-[500px]'>
          Create imaginative and visually stunning images generated through
          DALL-E AI and share them with the community
        </p>
      </div>

      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col font-medium'>
        <FormField 
            LabelName="Prompt"
            type="text"
            name="prompt"
            placeholder="an armchair in the shape of an avocado"
            value={[]}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className='relative bg-gray-50 border border-gray-300
          text-gray-900 text-sm rounded-lg focus:ring-blue-500
          focus:border-blue-500 w-[50%] p-3 h-[50%] flex justify-center 
          items-center mt-5'>
            {form.photo ? (
              <img 
                src={form.photo}
                alt={form.prompt}
                className='w-full h-full object-contain'
              />
            ): (
              <img 
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {generatingImg && (
              <div className='absolute inset-0 z-0 flex justify-center items-center
              bg-[rgba(0,0,0,0.5)] rounded-lg'>
                <Loader/>
              </div>
            )}

          </div>
        </div>
        <div className='mt-5 flex gap-5'>
        <button
                type="button"
                onClick={[]}
                className='text-white bg-green-700 font-medium
                rounded-md text-sm w-full sm:w-auto px-5 py-2.5
                text-center'
              >
                Generate
        </button>
        </div>
      </form>
    </section>
  )
}

export default CreatePost