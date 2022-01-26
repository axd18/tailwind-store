import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="flex justify-between items-center h-16 bg-white text-black relative bg-gray-200 shadow-sm">
        {/* Logo */}
        <Link to="/about">
          <h1>Logo</h1>
        </Link>
        <div className="px-4 cursor-pointer md:hidden">
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
      </nav>
    </>
  )
}

export default Header
