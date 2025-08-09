import './App.css'
import { Favourites } from './Components/Favourites'
import { Meals } from './Components/Meals'
import { Modals } from './Components/Modals'
import { Search } from './Components/Search'
import { AppProvider } from './Context/Context'

function App() {

  return (
    <>
    <AppProvider>
        <Search />
        <Favourites />
        <Meals />
        <Modals />
      </AppProvider>
    </>
  )
}

export default App
