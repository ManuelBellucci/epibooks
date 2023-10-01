import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyNav from './components/MyNav'
import Welcome from './components/Welcome'
import LatestRelease from './components/LatestRelease'
import MyFooter from './components/MyFooter'
import NotFound from './components/NotFound'
import BookDetails from './components/BookDetails'
import { ThemeProvider } from './contexts/ThemeContext'
import './index.css'

function App () {
  const [query, setQuery] = useState('')

  return (
    <ThemeProvider>
      <Router>
        <MyNav query={query} setQuery={setQuery} />
        <main className='flex flex-col min-h-screen'>
          <Welcome />
          <Routes>
            <Route path='/' element={<LatestRelease query={query} />} />
            <Route path='/books/:asin' element={<BookDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <MyFooter />
        </main>
      </Router>
    </ThemeProvider>
  )
}

export default App
