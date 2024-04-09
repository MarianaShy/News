import Article from "../article/Article";
import  { newsProp } from "./page.types"



const Page = (props:newsProp) => {
	let count = 0
	return (
		<main>
			<div className="content">
				<div className="left-article-flex">
					{props?.news?.map((data:any) => {
						if(data?.author && data?.urlToImage){
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