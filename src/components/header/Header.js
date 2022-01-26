import { Link } from 'react-router-dom'

const Header = ({toggleOpen}) => {
  return (
    <>
      <nav className="flex justify-between items-center h-16 bg-white text-black relative bg-gray-200 shadow-sm">
        {/* Logo */}
        <Link to="/about">
          <h1>Logo</h1>
        </Link>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggleOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        <div className='pr-8 hidden md:block'>
            <Link to="/" className='p-4'>
                Home
            </Link>
            <Link to="/about" className='p-4'>
                About
            </Link>
            <Link to="/contact" className='p-4'>
                Contact
            </Link>
        </div>
      </nav>
    </>
  )
}

export default Header
