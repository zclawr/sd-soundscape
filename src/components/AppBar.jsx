import { Link } from "react-router";
import './AppBar.css'

const pages = ['Home', 'History', 'Ecology'];
const links = ['/', '/history', '/ecology']

function ResponsiveAppBar() {
  return (
    <div className="linkContainer">
      <Link to={links[0]} className="customLink">
        {pages[0]}
      </Link>
      <Link to={links[1]} className="customLink">
        {pages[1]}
      </Link>
      <Link to={links[2]} className="customLink">
        {pages[2]}
      </Link>

    </div>
  )
}
export default ResponsiveAppBar;