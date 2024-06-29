import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-warning">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">WineApp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <div className="me-auto"></div>
      <ul className="navbar-nav ms-auto">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            VINOS
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">TINTOS</a></li>
            <li><a className="dropdown-item" href="#">BLANCOS</a></li>
            <li><a className="dropdown-item" href="#">ROSADOS</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">ESPUMANTES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">WHISKIES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CERVEZAS</a>
        </li>
        <li className="nav-item">
        <CartWidget/>      
        </li>
      </ul>
    </div> 
  </div>
</nav>
  );
};

    export default NavBar;
 
