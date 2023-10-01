import React, { createContext, useContext, useState } from 'react'

// Creazione del contesto per il tema
const ThemeContext = createContext()

// Custom Hook per utilizzare il tema
export const useTheme = () => {
  return useContext(ThemeContext)
}

// Provider del tema
export const ThemeProvider = ({ children }) => {
  // Stato del tema (predefinito in 'dark')
  const [theme, setTheme] = useState('dark')

  // Funzione per alternare tra i temi
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  // Fornitore del contesto del tema
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
