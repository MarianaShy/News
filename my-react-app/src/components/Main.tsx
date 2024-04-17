import { useEffect, useState } from 'react'
import Navbar from './navbar/Navbar'
import Page from './page/Page'
import Footer from './footer/Footer'
import RightSection from './right-section/Right-section'
//test



const Main = () => {
	
	const [news, setNews] = useState([])
	const [menu, setMenu] = useState("")
	const [loading, setLoading] = useState(true);

	


	const getNews = async() =>{
		try{
			setLoading(true);
			 await fetch(`https://newsapi.org/v2/everything?q=${menu ? menu : "politics"}&sortBy="publishedAt"&language=en&apiKey=6046867fa79f4b379c70524289a2823b`)
			 .then(res => res.json())
			 .then(json => setNews(json.articles))
			 setLoading(false);
		}catch(err){
			 console.error(err)
		}
  }



  useEffect(()=>{
		getNews()
  },[menu])

	
	return (
		<div className='main-flex'>
		<Navbar setMenu={setMenu} menu={menu}/>

		{loading ? 
		(<div>"Loading..."</div>) :

		<main className='main-page'>
			<Page news={news} />
			<RightSection news={news} />
		</main>
		}

		<Footer />
	 </div>
	)
	
}

export default Main