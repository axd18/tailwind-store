import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    
    
      <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>          
        </ul>
      </nav>
      
    
  )
}

export default Navbar
