import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  )
}
const CustomLink = ({ to, children, ...props }) => {
  // This hook resolves the pathname of the location in the given to value against the pathname of the current location.
  const resolvedPath = useResolvedPath(to);
  // Returns match data about a route at the given path relative to the current location.
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props} >
        {children}
      </Link>
    </li>
  )
}
export default Navbar;