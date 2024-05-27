import { Outlet, Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

const TopNavigation = () => {


  return (
    <>
      <nav>
      <aside className="quickNavigation">
      <ul id="navi" className="navul">
          <li className="navli">
            <Link to="/">Home</Link>
          </li>
          <li className="navli">
            <Link to="/cv">CV</Link>
          </li>
        </ul>
        </aside>
      </nav>

      <Outlet />
    </>
  )
};

export default withTranslation()(TopNavigation);
