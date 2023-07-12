import { Link } from "react-router-dom";
import { AppBar, Handle, MenuList, MenuListItem, Toolbar } from "react95";

function NavBar() {
  return (
    <AppBar>
      <Toolbar>
        <MenuList inline="true">
          <MenuListItem>
            <Link to="/">Contact App</Link>
          </MenuListItem>
          <Handle size={38} />
          <MenuListItem>
            <Link to="/list">List of Contacts</Link>
          </MenuListItem>
          <Handle size={38} />
          <MenuListItem>
            <Link className="create-contact" to="/new">
              Create New Contact
            </Link>
          </MenuListItem>
        </MenuList>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
