import React, { useState } from 'react'
import { Sun, Moon, Search } from 'lucide-react'
import CurriculumSelector from './components/CurriculumSelector'
import ChapterList from './components/ChapterList'
import ChapterContent from './components/ChapterContent'
import SearchBar from './components/SearchBar'
import QuizMap from './components/QuizMap'

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedCurriculum, setSelectedCurriculum] = useState('')
  const [selectedChapter, setSelectedChapter] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen bg-primary ${darkMode ? 'dark' : ''}`}>
      <header className="bg-secondary p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Math Tutor</h1>
        <div className="flex items-center space-x-4">
          <button onClick={() => setShowSearch(!showSearch)} className="btn btn-secondary">
            <Search size={20} />
          </button>
          <button onClick={toggleDarkMode} className="btn btn-secondary">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>
      
      <main className="container mx-auto p-4">
        {showSearch && <SearchBar />}
        
        {!selectedCurriculum && (
          <CurriculumSelector onSelect={setSelectedCurriculum} />
        )}
        
        {selectedCurriculum && !selectedChapter && (
          <ChapterList curriculum={selectedCurriculum} onSelect={setSelectedChapter} />
        )}
        
        {selectedChapter && (
          <ChapterContent chapter={selectedChapter} onBack={() => setSelectedChapter('')} />
        )}
        
        {selectedCurriculum && <QuizMap curriculum={selectedCurriculum} />}
      </main>
    </div>
  )
}

export default App