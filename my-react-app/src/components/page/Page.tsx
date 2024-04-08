import Article from "../article/Article"

type newsProp = {
	news: any
}


const Page = (props:newsProp) => {
	let count = 0
	return (
		<>
			<div className="current-page-title">
				<div className="content">
					<h2><span>/  </span>Newest articles</h2>
				</div>
			</div>
			<div className="content">
				<div className="flex-container">
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
			
		</>
		
		
	)
	
}

export default Page