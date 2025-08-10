import { Favourites } from './Components/Favourites'
import { Meals } from './Components/Meals'
import { Modals } from './Components/Modals'
import { Search } from './Components/Search'
import { AppProvider, useGlobalContext } from './Context/Context'

function App() {

  const { showModal } = useGlobalContext()

  return (
    <>
        <Search />
        <Favourites />
        <Meals />
        {showModal && <Modals />}
      
    </>
  )
}

export default App
