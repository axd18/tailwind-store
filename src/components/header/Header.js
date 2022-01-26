import { Link } from 'react-router-dom'
import Container from '../container/container.component'

const Header = ({ toggleOpen }) => {
  return (
    <Container>
      <nav classNameName="container flex items-center justify-between">
        {/* <div classNameName="px-4 cursor-pointer md:hidden" onClick={toggleOpen}>
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
        </div> */}
        <div className="container flex items-center justify-between">
          <Link to="/about">
            <h1>Logo</h1>
          </Link>

          <div className="w-full max-w-xl relative flex">
            <span className="absolute left-4 top-3 text-lg text-gray-200">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              className="w-full border border-primary border-r-0 pl-12 py-3 rounded-l-md focus:outline-none"
              placeholder="Buscar"
            />
            <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
              Buscar
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="txt-2xl">
                <i className="far fa-heart"></i>
              </div>
              <div className="text-xs leading-3">Lista</div>
              <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                8
              </span>
            </Link>
            <Link
              to="/about"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="txt-2xl">
                <i className="fas fa-shopping-bag"></i>
              </div>
              <div className="text-xs leading-3">Carrito</div>
              <span className="absolute -right-2 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                8
              </span>
            </Link>
            <Link
              to="/"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="txt-2xl">
                <i className="far fa-user"></i>
              </div>
              <div className="text-xs leading-3">Cuenta</div>
            </Link>
          </div>
        </div>
      </nav>
    </Container>
  )
}

export default Header
