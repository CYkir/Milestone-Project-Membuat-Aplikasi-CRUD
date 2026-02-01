const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">

        <a className="navbar-brand fw-bold">CRUD PRODUK</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-lg-3 text-center">
            <li className="nav-item">
              <a className="nav-link active fw-semibold">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold">Product</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold">Kontak Kami</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
