import { Link } from 'react-router-dom'

import Icons from './icons/Icons'
import Searchbar from './searchbar/Searchbar'

const Header = ({ toggleOpen }) => {
  return (
    <header className="p-4 shadow-sm">
      <div className=" container block md:flex justify-between">
        <div className=" container flex md:block justify-between">
          <Link to="/about">
            <h1>Logo</h1>
          </Link>

          <div
            className="w-8 h-8 cursor-pointer md:hidden"
            onClick={toggleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              classNameName="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
        </div>
        <Searchbar />
        <Icons />
      </div>
    </header>
  )
}

export default Header
