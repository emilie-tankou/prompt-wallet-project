import { useState } from 'react'
import './css/App.css'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Dashboard from './pages/Dashboard'
import PromptForm from './pages/PromptForm'
import UsePrompt from './pages/UsePrompt'
import Terms from './pages/Terms'
import About from './pages/About'
 
 
function App() {
  // État pour gérer la page active
  const [activePage, setActivePage] = useState('dashboard')
 
  // État pour le dark mode
  const [isDarkMode, setIsDarkMode] = useState(false)
 
  // Fonction pour changer de page
  const handlePageChange = (page) => {
    setActivePage(page)
  }
 
  // Fonction pour toggle le dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }
 
  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Sidebar activePage={activePage} onPageChange={handlePageChange} />
     
      <div className="main-content">
        <TopBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
       
        {/* Affichage conditionnel des pages */}
        {activePage === 'dashboard' && <Dashboard onPageChange={handlePageChange} />}
        {activePage === 'form' && <PromptForm onPageChange={handlePageChange} />}
        {activePage === 'use' && <UsePrompt />}
        {activePage === 'terms' && <Terms />}
        {activePage === 'about' && <About onPageChange={handlePageChange} />}
       
      </div>
    </div>
  )
}
 
export default App
 
 













