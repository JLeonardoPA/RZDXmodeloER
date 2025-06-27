import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="https://res.cloudinary.com/dvoakblan/image/upload/v1750188186/logo_jnafhw.png" alt="Logo" width={50} />
        <span><Link className="company-name" to="/">RZDX Implementos Deportivos</Link></span>
    </div>
        
          <ul className="nav-links">
            <li>
              <Link to="/team">Integrantes</Link>
            </li>
            <li >
              <Link  to="/er-model">Modelo ER</Link>
            </li>
            <li >
              <Link  to="/description">Descripción</Link>
            </li>
            <li >
              <Link  to="/operations">Operaciones</Link>
            </li>
          </ul>

      
    </nav>
  );
}

