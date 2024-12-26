import styles from "../styles/repository.module.css";
import logo from "../images/logo (2).png";
import { useState } from "react";
import "./App.css";
const RepositoryPage = () => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(showMenu ? false : true);
  }

  return (
    <div className={`container-fluid ${styles.appContainer} d-flex`}>
      {/* Sidebar */}
      <aside className={`${styles.sidebar} border-end`}>
        <div className="sidebar-header p-3">
          <div className="d-flex">
            <img
              className="d-block"
              style={{ height: "32px", width: "28pxF" }}
              src={logo}
              alt=""
            />
            <h2 style={{ fontWeight: "300" }}> CodeAnt AI</h2>{" "}
          </div>
          <div className="form-group my-3">
            <select
              className="form-control"
              id="nameDropdown"
              style={{
                appearance: "auto",
                WebkitAppearance: "menulist",
                MozAppearance: "menulist",
              }}
            >
              <option>Utkarsh Dhairya Panwar</option>
              <option>Saif</option>
              <option>Anurag</option>
              <option>Nas</option>
            </select>
          </div>

          <nav className="sidebar-nav">
            <ul className="list-unstyled ">
              <i></i>
              <li className={` ${styles.sidebarItems}`}>
                <i className={`fa-solid fa-house ${styles.sidebarIcon}`}></i>{" "}
                Repositories
              </li>
              <li className={` ${styles.sidebarItems}`}>
                {" "}
                <i className={`fa-solid fa-code ${styles.sidebarIcon}`}></i> AI
                Code Review
              </li>
              <li className={` ${styles.sidebarItems}`}>
                <i className={`fa-solid fa-cloud ${styles.sidebarIcon}`}></i>{" "}
                Cloud Security
              </li>
              <li className={` ${styles.sidebarItems}`}>
                {" "}
                <i className={`fa-solid fa-book ${styles.sidebarIcon}`}></i> How
                to Use
              </li>
              <li className={` ${styles.sidebarItems}`}>
                {" "}
                <i
                  className={`fa-solid fa-gear ${styles.sidebarIcon}`}
                ></i>{" "}
                Settings
              </li>
            </ul>
          </nav>
        </div>

        <div className="sidebar-footer p-3">
          <div>
            <i className="fa-solid fa-phone"></i> Support
          </div>
          <div>
            {" "}
            <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
          </div>
        </div>
      </aside>

      {/* Main Section */}

      <main
        className={`${styles.mainContent} ${
          showMenu ? styles.hideScroll : ""
        } flex-grow-1 p-4`}
      >
        {" "}
        <div id={styles.mobileViewHeader}>
          <div className="d-flex">
            <img
              className="d-block"
              style={{ height: "32px", width: "28pxF" }}
              src={logo}
              alt=""
            />
            <h2 style={{ fontWeight: "300" }}> CodeAnt AI</h2>{" "}
          </div>
          <div>
            {showMenu ? (
              <button onClick={toggleMenu} className={styles.toggleBtn}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            ) : (
              <button onClick={toggleMenu} className={styles.toggleBtn}>
                <i className="fa-solid fa-bars"></i>
              </button>
            )}
          </div>
        </div>
        {showMenu ? (
          <nav className={`sidebar-nav ${styles.mobileNav}`}>
            <ul className="list-unstyled ">
              <i></i>
              <li className={` ${styles.sidebarItems}`}>
                <i className={`fa-solid fa-house ${styles.sidebarIcon}`}></i>{" "}
                Repositories
              </li>
              <li className={` ${styles.sidebarItems}`}>
                {" "}
                <i className={`fa-solid fa-code ${styles.sidebarIcon}`}></i> AI
                Code Review
              </li>
              <li className={` ${styles.sidebarItems}`}>
                <i className={`fa-solid fa-cloud ${styles.sidebarIcon}`}></i>{" "}
                Cloud Security
              </li>
              <li className={` ${styles.sidebarItems}`}>
                {" "}
                <i className={`fa-solid fa-book ${styles.sidebarIcon}`}></i> How
                to Use
              </li>
              <li className={` ${styles.sidebarItems}`}>
                {" "}
                <i
                  className={`fa-solid fa-gear ${styles.sidebarIcon}`}
                ></i>{" "}
                Settings
              </li>
              <li className={` ${styles.sidebarItems}`}>
                <i className="fa-solid fa-phone"></i> Support
              </li>
              <li className={` ${styles.sidebarItems}`}>
                {" "}
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
              </li>
            </ul>
          </nav>
        ) : (
          ""
        )}
        <section
          className={`${styles.repositories} ${
            showMenu ? styles.hideScroll : ""
          } bg-white rounded`}
        >
          <header className="p-3">
            {showMenu ? (
              ""
            ) : (
              <div className="repositories-header d-flex flex-wrap justify-content-between align-items-center mb-2 ">
                <div className="d-flex flex-column">
                  <h2 className="mb-0">Repositories</h2>
                  <h6 id={styles.totalRepoHead}>33 total repositories</h6>
                </div>

                <div>
                  <button className="btn btn-outline-secondary me-2">
                    <i className="fa-solid fa-arrows-rotate"></i> Refresh All
                  </button>
                  <button className="btn btn-primary">
                    <i className="fa-solid fa-plus"></i> Add Repository
                  </button>
                </div>
              </div>
            )}
            <div className={`${styles.searchBar} mb-1`}>
              <input
                type="text"
                className="form-control"
                placeholder=" Search Repositories"
              />
            </div>
          </header>
          <ul
            className="list-unstyled repository-list"
            id={showMenu ? styles.repoListBlur : ""}
          >
            <li className={`repository-item py-2 ${styles.repoListItem}`}>
              <h3>
                design-system{" "}
                <span
                  className={`badge  ${styles.access} ${
                    showMenu ? styles.dimAccess : ""
                  }`}
                >
                  Public
                </span>
              </h3>
              <p className="text-muted d-flex">
                <span className={`{styles.language} me-4`}>
                  React{" "}
                  <span
                    className="d-inline-block"
                    style={{
                      color: "#1570EF",
                      height: "8px",
                      width: "8px",
                      borderRadius: "100%",
                      backgroundColor: "#1570EF",
                    }}
                  ></span>
                </span>
                <span className={styles.size}>
                  <i className="fa-solid fa-database"></i> 7320 KB
                </span>
                <span className={`{styles.timePeriod} ms-4`}>
                  Updated 1 day ago
                </span>
              </p>
            </li>
            <li className={`repository-item py-2 ${styles.repoListItem}`}>
              <h3>
                codeant-ci-app{" "}
                <span
                  className={`badge  ${styles.access} ${
                    showMenu ? styles.dimAccess : ""
                  }`}
                >
                  Private
                </span>
              </h3>
              <p className="text-muted d-flex">
                <span className={`{styles.language} me-4`}>
                  Javascript{" "}
                  <span
                    className="d-inline-block"
                    style={{
                      color: "#1570EF",
                      height: "8px",
                      width: "8px",
                      borderRadius: "100%",
                      backgroundColor: "#1570EF",
                    }}
                  ></span>
                </span>
                <span className={styles.size}>
                  <i className="fa-solid fa-database"></i> 5871 KB
                </span>
                <span className={`{styles.timePeriod} ms-4`}>
                  Updated 2 days ago
                </span>
              </p>
            </li>
            <li className={`repository-item py-2 ${styles.repoListItem}`}>
              <h3>
                analytics-dashboard{" "}
                <span
                  className={`badge  ${styles.access} ${
                    showMenu ? styles.dimAccess : ""
                  }`}
                >
                  Private
                </span>
              </h3>
              <p className="text-muted d-flex">
                <span className={`{styles.language} me-4`}>
                  Python{" "}
                  <span
                    className="d-inline-block"
                    style={{
                      color: "#1570EF",
                      height: "8px",
                      width: "8px",
                      borderRadius: "100%",
                      backgroundColor: "#1570EF",
                    }}
                  ></span>
                </span>
                <span className={styles.size}>
                  <i className="fa-solid fa-database"></i> 4521 KB
                </span>
                <span className={`{styles.timePeriod} ms-4`}>
                  Updated 5 days ago
                </span>
              </p>
            </li>
            <li className={`repository-item py-2 ${styles.repoListItem}`}>
              <h3>
                mobile-app{" "}
                <span
                  className={`badge  ${styles.access} ${
                    showMenu ? styles.dimAccess : ""
                  }`}
                >
                  Public
                </span>
              </h3>
              <p className="text-muted d-flex">
                <span className={`{styles.language} me-4`}>
                  Swift{" "}
                  <span
                    className="d-inline-block"
                    style={{
                      color: "#1570EF",
                      height: "8px",
                      width: "8px",
                      borderRadius: "100%",
                      backgroundColor: "#1570EF",
                    }}
                  ></span>
                </span>
                <span className={styles.size}>
                  <i className="fa-solid fa-database"></i> 3096 KB
                </span>
                <span className={`{styles.timePeriod} ms-4`}>
                  Updated 3 days ago
                </span>
              </p>
            </li>
            <li className={`repository-item py-2 ${styles.repoListItem}`}>
              <h3>
                e-commerce-platform{" "}
                <span
                  className={`badge  ${styles.access} ${
                    showMenu ? styles.dimAccess : ""
                  }`}
                >
                  Private
                </span>
              </h3>
              <p className="text-muted d-flex">
                <span className={`{styles.language} me-4`}>
                  Java{" "}
                  <span
                    className="d-inline-block"
                    style={{
                      color: "#1570EF",
                      height: "8px",
                      width: "8px",
                      borderRadius: "100%",
                      backgroundColor: "#1570EF",
                    }}
                  ></span>
                </span>
                <span className={styles.size}>
                  <i className="fa-solid fa-database"></i> 6210 KB
                </span>
                <span className={`{styles.timePeriod} ms-4`}>
                  Updated 6 days ago
                </span>
              </p>
            </li>
            <li className={`repository-item py-2 ${styles.repoListItem}`}>
              <h3>
                blog-website{" "}
                <span
                  className={`badge  ${styles.access} ${
                    showMenu ? styles.dimAccess : ""
                  }`}
                >
                  Public
                </span>
              </h3>
              <p className="text-muted d-flex">
                <span className={`{styles.language} me-4`}>
                  HTML/CSS{" "}
                  <span
                    className="d-inline-block"
                    style={{
                      color: "#1570EF",
                      height: "8px",
                      width: "8px",
                      borderRadius: "100%",
                      backgroundColor: "#1570EF",
                    }}
                  ></span>
                </span>
                <span className={styles.size}>
                  <i className="fa-solid fa-database"></i> 1876 KB
                </span>
                <span className={`{styles.timePeriod} ms-4`}>
                  Updated 4 days ago
                </span>
              </p>
            </li>
            <li className={`repository-item py-2 ${styles.repoListItem}`}>
              <h3>
                social-network{" "}
                <span
                  className={`badge  ${styles.access} ${
                    showMenu ? styles.dimAccess : ""
                  }`}
                >
                  Private
                </span>{" "}
              </h3>
              <p className="text-muted d-flex">
                <span className={`{styles.language} me-4`}>
                  PHP{" "}
                  <span
                    className="d-inline-block"
                    style={{
                      color: "#1570EF",
                      height: "8px",
                      width: "8px",
                      borderRadius: "100%",
                      backgroundColor: "#1570EF",
                    }}
                  ></span>
                </span>
                <span className={styles.size}>
                  <i className="fa-solid fa-database"></i> 5432 KB
                </span>
                <span className={`{styles.timePeriod} ms-4`}>
                  Updated 7 days ago
                </span>
              </p>
            </li>
            <li className={`repository-item py-2 ${styles.repoListItem}`}>
              <h3>
                codeant-ci-app{" "}
                <span
                  className={`badge  ${styles.access} ${
                    showMenu ? styles.dimAccess : ""
                  }`}
                >
                  Private
                </span>
              </h3>
              <p className="text-muted d-flex">
                <span className={`{styles.language} me-4`}>
                  Javascript{" "}
                  <span
                    className="d-inline-block"
                    style={{
                      color: "#1570EF",
                      height: "8px",
                      width: "8px",
                      borderRadius: "100%",
                      backgroundColor: "#1570EF",
                    }}
                  ></span>
                </span>
                <span className={styles.size}>
                  <i className="fa-solid fa-database"></i> 5871 KB
                </span>
                <span className={`{styles.timePeriod} ms-4`}>
                  Updated 2 days ago
                </span>
              </p>
            </li>
            <li className={`repository-item py-2 ${styles.repoListItem}`}>
              <h3>
                codeant-ci-app{" "}
                <span
                  className={`badge  ${styles.access} ${
                    showMenu ? styles.dimAccess : ""
                  }`}
                >
                  Private
                </span>
              </h3>
              <p className="text-muted d-flex">
                <span className={`{styles.language} me-4`}>
                  Javascript{" "}
                  <span
                    className="d-inline-block"
                    style={{
                      color: "#1570EF",
                      height: "8px",
                      width: "8px",
                      borderRadius: "100%",
                      backgroundColor: "#1570EF",
                    }}
                  ></span>
                </span>
                <span className={styles.size}>
                  <i className="fa-solid fa-database"></i> 5871 KB
                </span>
                <span className={`{styles.timePeriod} ms-4`}>
                  Updated 2 days ago
                </span>
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default RepositoryPage;
