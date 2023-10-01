import { useTheme } from '../contexts/ThemeContext'

export default function MyFooter () {
  const { theme } = useTheme()

  return (
    <footer className={`min-w-[97%] p-4 m-3 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 ${theme === 'dark' ? 'bg-slate-800 text-white' : ''}`}>
      <span className={`text-sm text-gray-500 sm:text-center ${theme === 'dark' ? 'text-white' : ''}`}>
        © 2023{' '}
        <a href='/' className='hover:underline' target='_blank'>
          Epicbooks
        </a>
        . All Rights Reserved.
      </span>
      <ul className='flex flex-wrap items-center mt-3 sm:mt-0'>
        <li>
          <a
            href='/'
            className={`mr-4 text-sm text-gray-500 hover:underline md:mr-6 ${theme === 'dark' ? 'text-white' : ''}`}
          >
            About
          </a>
        </li>
        <li>
          <a
            href='/'
            className={`mr-4 text-sm text-gray-500 hover:underline md:mr-6 ${theme === 'dark' ? 'text-white' : ''}`}
          >
            Privacy Policy
          </a>
        </li>

        <li>
          <a
            href='/'
            className={`text-sm text-gray-500 hover:underline ${theme === 'dark' ? 'text-white' : ''}`}
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  )
}
