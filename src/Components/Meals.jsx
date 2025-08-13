
import { useGlobalContext } from '../Context/Context'
import { FaRegThumbsUp } from "react-icons/fa";

export const Meals = () => {

    const {userData, loading, error, selectMeal, addFavourite} = useGlobalContext();
    console.log(userData)

    if(loading){
        return(
            <section>
                <h4>Loading...</h4>
            </section>
        )
    }

    if(error){
        return(
            <section>
                <h4>{error}</h4>
            </section>
        )
    }
  return (
    <div className='w-full my-18'>
    <div className='grid grid-cols-3 gap-15 mx-25'> 

    
    {userData.length < 1 ? <p>No Meals matched your search term. Please try again.</p> : userData?.map(meal => {

    const {idMeal, strMeal: title, strMealThumb:image} = meal
        return(
            <div key={meal.idMeal} className='shadow-2xl rounded-lg overflow-hidden w-110'>
                <div>
                    <img src={image} alt={meal.strMeal} className='object-cover w-full h-60' onClick={()=>selectMeal(parseInt(idMeal))}/>
                </div>
                <div className='m-4 flex justify-between'>
                    <h1 className='text-lg'>{title}</h1>
                    <button className='text-amber-900 cursor-pointer text-lg hover:opacity-80 transition-transform duration-300 hover:-translate-y-0.5' onClick={() => addFavourite(meal.idMeal)}><FaRegThumbsUp className='text-xl'/></button>
                </div>
            </div>
        )
  
})}
    </div>
    </div>
  )
}
