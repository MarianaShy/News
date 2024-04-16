import Article from "../article/Article";
import  { pageProp } from "./page.types"


const Page = (props:pageProp) => {
	let count = 0
	return (
		<main>
			<div className="content">
				<ul className="left-article-flex">
					{props?.news?.map((data:any) => {
						if(data?.title && data?.urlToImage){
							console.log(data)
							if(count < 10){
								count++
								return <>
									<Article news={data}/>
								</>
							}
						}
					})}
				</ul>
				<ul className="right-article-flex"></ul>
			</div>
			
		</main>
		
		
	)
	
}

export default Page