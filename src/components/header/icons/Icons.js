import { Link } from 'react-router-dom'

const Icons = () => {
    return ( 
        <>
        <div className="flex items-center space-x-4 hidden md:flex">
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
        </>
     );
}
 
export default Icons;