import Navbar from './Components/Navbar'
import TopSection from './Components/TopSection'
import Button from './Components/Button'
import sc from './assets/social.svg'
import HomePage from './Pages/HomePage'
import './App.css'


function App() {
  if (window.innerWidth < 1403) {
    return alert('The website is only for Desktop view. Please open it in Desktop view.')
  }
  else {
    return (
      <>
        <HomePage />
      </>
    )
  }

}
export default App
