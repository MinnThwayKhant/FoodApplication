import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [userData, setUserData ] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [searchTerm, setSearchTerm ] = useState('')
    const [allUrl ,setAllUrl] = useState('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')

    const [showModal, setShowModal] = useState(true)

 
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
    <AppContext.Provider value={{userData, loading, error, setAllUrl, showModal, setShowModal}}>
        {children}
    </AppContext.Provider>)
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
