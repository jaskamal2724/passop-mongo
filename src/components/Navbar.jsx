import React from 'react'
// import {passimg} from '../images/passop.png'
import passimg from '../images/passop.png'
import github from '../images/github.png'

const Navbar = () => {
    return (
        <>
            <header className="text-gray-600 body-font" >
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={passimg} alt="" className='pi'/>
                        <span className="ml-3 text-xl text-purple-900">PassOP
                        <lord-icon
                                src="https://cdn.lordicon.com/kpustzzg.json"
                                trigger="hover"
                                style={{"width":"50px","height":"50px",}}>
                            </lord-icon>
                        </span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        
                    </nav> 
                    <a href="https://github.com/joy2724/passop" target='_blank'>
                    <button className="btn inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-purple-200 rounded text-base mt-4 md:mt-0"> <img src={github} className='gi' alt="" /> 
                        GitHub
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                    </a>
                </div>
            </header>

        </>
    )
}

export default Navbar