import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Contact App</Link>
      <Link to="/list">List of Contacts</Link>
      <Link className="create-contact" to="/new">
        Create New Contact
      </Link>
    </nav>
  );
}

export default NavBar;
