import "../styles/Header.css"
import createLogo from "../images/createlogo.zip"
function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <createLogo />
      </div>

      <div className="menu">
        <ul>
            <li>About Us</li>
            <li>courses</li>
            <li>Ewents</li>
            <li>Blog</li>
            <li>Contacts</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
