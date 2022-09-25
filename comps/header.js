import Link from "next/link";

const Header = () => {
    return (  
        <nav className="nav">
            <div className="icon">Header</div>
            <Link className="link" href="/"><a>Home</a></Link>
            <Link  className="link" href="/about"><a>About</a></Link>
            <Link  className="link" href="/list/"><a>Listing</a></Link>
        </nav>
    );
}
 
export default Header;