import N from "../../assets/N.png"

type menuProp = {
	setMenu:any}

const Navbar = (props:menuProp) => {
	return (

		<header>
			<div className="content header-flex">
				<div className="header-title">
					<img src={N} alt="Blue letters NT on white background with vertical sign 'News Today'  in the middle" className="logo-img"></img>
					<h1 className="title">News Today</h1>
				</div>
				<nav className="navigation-flex">
					<h3 onClick={()=> props?.setMenu("Politics")} className="cursor-pointer">POLITICS</h3>		
					<h3 onClick={()=>props?.setMenu("Ukraine")} className="cursor-pointer">UKRAINE</h3>
					<h3 onClick={()=>props?.setMenu("Sport+news")} className="cursor-pointer">SPORT</h3>
					<h3 onClick={()=>props?.setMenu("internet+technologies")} className="cursor-pointer">IT</h3>
				</nav>
			</div>
			
		</header>
	)
	
}

export default Navbar