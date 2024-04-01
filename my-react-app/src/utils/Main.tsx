import { useEffect, useState } from 'react'
import Navbar from '../utils/Navbar'
import Page from '../utils/Page'




const Main = () => {
	
	const [news, setNews] = useState([])

	const getNews = async() =>{
		try{
			 await fetch(`https://newsapi.org/v2/everything?q=politics&sortBy=popularity&apiKey=6046867fa79f4b379c70524289a2823b`)
			 .then(res => res.json())
			 .then(json => setNews(json.articles))
		}catch(err){
			 console.error(err)
		}
  }

  useEffect(()=>{
		getNews()
  },[])

	
	return (
		<>
		<Navbar/>
		<Page news={news} />

	 </>
	)
	
}

export default Main