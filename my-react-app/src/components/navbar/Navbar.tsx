import logo from "../../assets/logo.png"
import menuProp from "./navbar.types.ts"


const Navbar = (props:menuProp) => {
	return (

		<header>
			<div className="header">
				<div className="content header-flex">
				<div className="header-title">
					<img src={logo} alt="Blue letters NT on white background with vertical sign 'News Today'  in the middle" className="logo-img"></img>
					<h1 className="title">News Today</h1>
				</div>
				<nav className="navigation-flex">
					<h3 onClick={()=> props?.setMenu("Politics")} className="cursor-pointer">POLITICS</h3>		
					<h3 onClick={()=>props?.setMenu("Ukraine")} className="cursor-pointer">UKRAINE</h3>
					<h3 onClick={()=>props?.setMenu("Sport+news")} className="cursor-pointer">SPORT</h3>
					<h3 onClick={()=>props?.setMenu("Internet+technologies")} className="cursor-pointer">IT</h3>
				</nav>
			</div>
			</div>
			
			<div className="current-page-title">
				<div className="content">
					<h2><span>/  </span>{props.menu ? props.menu : "Politics"}</h2>
				</div>
			</div>
			
		</header>
	)
	
}

export default Navbar