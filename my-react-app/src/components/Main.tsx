import { useEffect, useState } from 'react'
import Navbar from './navbar/Navbar'
import Page from './page/Page'
import Footer from './footer/Footer'
//test



const Main = () => {
	
	const [news, setNews] = useState([])
	const [menu, setMenu] = useState("")

	const getNews = async() =>{
		try{
			 await fetch(`https://newsapi.org/v2/everything?q=${menu ? menu : "politics"}&sortBy=publishedAt&language=en&apiKey=6046867fa79f4b379c70524289a2823b`)
			 .then(res => res.json())
			 .then(json => setNews(json.articles))
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
		<Page news={news} />
		<Footer />
	 </div>
	)
	
}

export default Main