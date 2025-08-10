import React, { useState } from 'react'
import { useGlobalContext } from '../Context/Context';



export const Search = () => {
    const [text, setText] = useState();

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const {setAllUrl} = useGlobalContext();


  return (
    <div className='my-15 mx-25'>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Type Favourite Meals' className=' rounded-md outline-none px-4 py-[7px] bg-amber-100' value={text} onChange={handleChange} />
            <button type='submit' className='py-[6px] px-4 bg-amber-800 text-amber-200 rounded ml-2 hover:opacity-80'>Search</button>
            <button type='button' className='ml-1 py-[6px] px-4 bg-amber-300 rounded cursor-pointer hover:opacity-80' onClick={() => setAllUrl('https://www.themealdb.com/api/json/v1/1/random.php')}>Suprise Me!</button>
        </form>
    </div>
  )
}
