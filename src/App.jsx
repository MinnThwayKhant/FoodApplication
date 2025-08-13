import { Favourites } from './Components/Favourites'
import { Meals } from './Components/Meals'
import { Modals } from './Components/Modals'
import { Search } from './Components/Search'
import { AppProvider, useGlobalContext } from './Context/Context'

function App() {

  const { showModal, favourites } = useGlobalContext()

  return (
    <>
    <div className='relative pt-15'>
        <Search />
        {favourites.length > 0 && <Favourites />}
        <Meals />
        {showModal && <Modals />}
    </div>
      
    </>
  )
}

export default App
