import React from 'react'
import { useGlobalContext } from '../Context/Context'
import { Link } from 'react-router';

export const Modals = () => {
    const {selectedMeal, closeModal} = useGlobalContext();
    const {idMeal, strMeal: title, strMealThumb:image, strInstructions:text, strSource:source} = selectedMeal

  return (
    <div className='absolute h-screen w-full top-0 left-0 bg-[rgba(0,0,0,0.85)] flex justify-center items-center'>
        <div className='static w-190 h-180 overflow-scroll bg-white opacity-100 rounded-xl'>
            <div>
                <img src={image} alt='detail' className='rounded-md w-full h-120 object-cover'/>
            </div>
            <div className='px-5 py-8 w-full'>
                <h4 className='text-3xl mb-10 text-amber-900'>{title}</h4>
                <p className='text-lg mb-4 text-amber-950'>Cooking Instrutions</p>
                <p className='text-sm text-amber-950 mb-6'>{text}</p>
                <a href={source} className='cursor-pointer underline text-amber-900 hover:opacity-80 italic'>Original Source</a>
            <div className='mt-5'>
                <button onClick={closeModal} className='cursor-pointer bg-amber-950 text-white hover:opacity-90 py-2 px-4 text-sm rounded-xl shadow-xl'>Close</button>
            </div>
        </div>
        
    </div>
    </div>
  )
}
