import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">WineApp</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <div class="me-auto"></div>
      <ul class="navbar-nav ms-auto">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            VINOS
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">TINTOS</a></li>
            <li><a class="dropdown-item" href="#">BLANCOS</a></li>
            <li><a class="dropdown-item" href="#">ROSADOS</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">ESPUMANTES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">WHISKIES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CERVEZAS</a>
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
 
