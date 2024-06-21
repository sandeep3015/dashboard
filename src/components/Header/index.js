import { CgProfile } from "react-icons/cg"
import './index.css'

const Header = () => (
    <nav className="navbar-header">
      <h1 className="main-heading">Dashboard</h1>
      <CgProfile className="profile-icon"/>
    </nav>
)

export default Header