export function Header() {
  return (
    <header>
      <div>
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="main-heading nav-link a-tag" href="/home">
                Home
              </a>
            </li>

            <li id="GitHub-Portfolio" className="nav-item">
              <a
                className="nav-link brand"
                aria-current="page"
                href={"https://github.com/DMVCodeX"}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.icons8.com/?size=512&id=16318&format=png"
                  alt=""
                  width="35"
                  height="35"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link brand"
                aria-current="page"
                href={"https://www.linkedin.com/in/dianellyventura/"}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.icons8.com/?size=512&id=16166&format=png"
                  alt=""
                  width="35"
                  height="35"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="main-heading nav-link active a-tag" href="/aboutme">
                About Me
              </a>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link active a-tag" href="/aboutme">
                Blog
                <img
                  className=""
                  src="https://img.icons8.com/?size=512&id=NvKD1nx5oUzn&format=png"
                  alt=""
                  width="20"
                  height="20"
                />
              </a>
            </li> */}
            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Diane Code Diaries
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form className="d-flex mt-3" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
