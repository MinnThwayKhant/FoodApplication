import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [userData, setUserData ] = useState([])
    const [allUrl ,setAllUrl] = useState('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    const [singalUrl, setSingalUrl] = useState('https://www.themealdb.com/api/json/v1/1/random.php')

    useEffect(() => {

        const abortController = new AbortController();

        const fetchMeals = async () => {
            try {
                const response = await axios.get(allUrl, {signal: abortController.signal})
                setUserData(response.data)
                console.log(response.data)
            } catch (e) {
                console.log('Something Went Wrong ' + e.response)
            }
        }

        fetchMeals();

        return () => {
            abortController.abort();
        }
    }, [allUrl])


    return (<AppContext.Provider value={{userData}}>
        {children}
    </AppContext.Provider>)
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
