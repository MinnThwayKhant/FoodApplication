
import { AppContext, useGlobalContext } from '../Context/Context'

export const Meals = () => {

    const {userData, setUserData, setUrl} = useGlobalContext();
    console.log(userData)

  return (
    <div>Meals</div>
  )
}
