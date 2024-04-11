import Article from "../article/Article";
import  { pageProp } from "./page.types"

/*type articleProp = {
	title: string,
	urlToImage: string,
	url: string
}
*/

const Page = (props:pageProp) => {
	let count = 0
	return (
		<main>
			<div className="content">
				<div className="left-article-flex">
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
				</div>
			</div>
			
		</main>
		
		
	)
	
}

export default Page