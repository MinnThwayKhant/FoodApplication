import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [userData, setUserData ] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [selectedMeal, setSelectedMeal] = useState(null)
    const [allUrl ,setAllUrl] = useState('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    const [favourites, setFavourites] = useState([])

    const [showModal, setShowModal] = useState(false)

     const addFavourite = (id) => {
        const alreadyFavourite = favourites.find(meal => meal.idMeal === id)
        if(alreadyFavourite){
            setFavourites([...favourites])
        } else {
            const updatedData = userData.find((meal) => meal.idMeal === id)
            if(updatedData){
                setFavourites([...favourites, updatedData])
            }
           
        }
    }
    

    useEffect(() => {
        const storedFavMeal = JSON.parse(localStorage.getItem('myFavourite')) || []
        setFavourites(storedFavMeal)
    }, [])

    useEffect(() => {
        localStorage.setItem('myFavourite', JSON.stringify(favourites)) 
    }, [favourites])

    const removeFavourite = (id) => {
        const updatedData = favourites.filter((meal) => meal.idMeal !== id)
        setFavourites(updatedData)
    }

    const selectMeal = (id) => {
        let meal;
        meal = userData.find((item) => parseInt(item.idMeal) === id)
        setSelectedMeal(meal)
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

 
    const fetchMeals = async (url, abortController) => {
            setLoading(true)
            try {
                const response = await axios.get(url, {signal: abortController.signal})
                if(response.data.meals){
                    setUserData(response.data.meals)
                } else {
                    setUserData([])
                }
                
            } catch (e) {
                setError('Something Went Wrong ' + e.response)
            } finally {
                setLoading(false)
            }
        }
    useEffect(() => {
        const abortController = new AbortController();
        fetchMeals(allUrl, abortController);

        return () => {
            abortController.abort();
        }
    }, [allUrl])

    return (
    <AppContext.Provider value={{userData, loading, error, setAllUrl, showModal, setShowModal, selectMeal, selectedMeal, closeModal, addFavourite, removeFavourite, favourites}}>
        {children}
    </AppContext.Provider>)
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
