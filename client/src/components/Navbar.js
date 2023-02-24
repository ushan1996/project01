import { useContext, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

function Navbar() {
	const navRef = useRef();
	const { user } = useContext(AuthContext);
	const logout = () => {
	  localStorage.clear();
	  navigator("/login");
	};
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h1>Dashboard</h1>
			<nav ref={navRef} >
				<a href="/#">About Us</a>
				<a href="/#">Contact Us</a>
				<a href="/#"><Link
                  to={`/`}
                  onClick={logout}
                  // style={{ backgroundColor: "red", color: "white", padding: "20px" }}
                >
                  Log Out
                </Link></a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
