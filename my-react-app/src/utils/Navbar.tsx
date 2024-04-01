import N from "../assets/N.png"

const Navbar = () => {
	return (

		<div className="header">
			<div className="inline-flex">
			<img src={N} alt="Blue letters NT on white background with vertical sign 'News Today'  in the middle" className="logo-img"></img>
			<div className="title">News Today</div>
			</div>
		   <div className="nav-bar">Navbar</div>
		</div>
	)
	
}

export default Navbar