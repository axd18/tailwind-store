import { Link } from 'react-router-dom'

const ToggleMenuBar = ({toggleOpenClose}) => {
    return ( 
        <div className="grid grid-rows-3 absolute top-0 left-0 right-0 text-center items-center bg-purple-800 text-white" onClick={toggleOpenClose}>
            <Link to="/" className='p-4'>
                Categorías
            </Link>
            <Link to="/about" className='p-4'>
                Tienda
            </Link>
            <Link to="/contact" className='p-4'>
                Lista
            </Link>
            <Link to="/contact" className='p-4'>
                Carrito
            </Link>
            <Link to="/contact" className='p-4'>
                Cuenta
            </Link>
        </div>
     );
}
 
export default ToggleMenuBar;