import { Link } from 'react-router-dom'

const Header = () => {
    return ( 
        <>
            
    <header className="py-4 shadow-sm bg-gray-200">
        <div className="container flex items-center justify-between w-auto">
            {/* Logo */}
             <Link to='/about'>
                <h1>Logo</h1>
             </Link>
             
            </div>
    </header>
    
        </>
     );
}
 
export default Header;