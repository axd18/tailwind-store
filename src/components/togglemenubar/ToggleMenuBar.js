import { Link } from 'react-router-dom'

const ToggleMenuBar = ({toggleOpenClose}) => {
    return ( 
        <div className="grid grid-rows-3 text-center items-center bg-purple-800 text-white" onClick={toggleOpenClose}>
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
     );
}
 
export default ToggleMenuBar;