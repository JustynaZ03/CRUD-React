import { Link } from "react-router-dom";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__top">
          <div className="navbar__top-items">
            <ul className="navbar__top-items-ul">
              <li className="navbar__top-items-li">
                <Link to="/user/create" className="navbar__top-items-link">
                  Create New User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
