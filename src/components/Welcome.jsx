import React from 'react'
import { CONTAINER_STYLE, OVERLAY_STYLE } from '../constants/welcomeConstants.js'
import { scrollToLatestRelease } from '../functions/scrollToLatestRelease.js'

// Componente di benvenuto/hero
const Welcome = () => {
  return (
    <section
      className='relative overflow-hidden bg-cover bg-no-repeat p-12 text-center border-solid border-b-2 border-black'
      style={CONTAINER_STYLE}
    >
      <div
        className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed'
        style={OVERLAY_STYLE}
      >
        <div className='flex h-full items-center justify-center'>
          <div className='text-white'>
            <div>
              {/* Icona di un libro */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-16 h-16 mx-auto'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
                />
              </svg>
            </div>
            {/* titolo */}
            <h1 className='text-4xl font-semibold mb-4'>Epicbooks</h1>
            {/* sottotitolo */}
            <h4 className='text-xl font-semibold mb-6'>Best books</h4>
            {/* bottone con funzione per scorrere alle latest release */}
            <div id='heroButtonContainer'>
              <button
                onClick={scrollToLatestRelease}
                type='button'
                className='rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200'
                data-te-ripple-init
                data-te-ripple-color='light'
              >
                Latest releases
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome
