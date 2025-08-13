import React from 'react'
import { useGlobalContext } from '../Context/Context'

export const Favourites = () => {
    const {favourites, removeFavourite} = useGlobalContext()
  return (
    <section>
        <div className='w-full text-white bg-gray-800 px-25 py-5 mt-10'>
            <h5 className='text-3xl mb-6 uppercase tracking-widest'>Favourites</h5>
            <div className='flex gap-5'>
                {favourites.map((item) => {
                    return(
                        <div key={item.idMeal} className='py-4'>
                                <img src={item.strMealThumb} alt="favourite" className='w-20 h-20 border-6 border-white rounded-full'/>
                                <button onClick={() => removeFavourite(item.idMeal)} className='bg-gray-400 text-black mt-4 py-1 px-[6px] rounded-lg cursor-pointer ml-[8px] text-sm hover:opacity-90'>
                                    Remove
                                </button>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}
