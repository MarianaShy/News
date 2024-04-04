type newsProp = {
	news: any
}


const Page = (props:newsProp) => {
	let count = 0
	return (
		<>
			<div className="current-page-title">
				<h2><span>/  </span>Newest articles</h2>
				
			</div>
			<div className="flex-container">
				{props?.news?.map((data:any) => {
					if(count < 10){
						console.log(data)
						count++
						return <>
							<div className="flex-item">
							<a className="article" href={data?.url}>
								<img src={data?.urlToImage} alt="" className="article-img"/>
								<h4 className="article-title">{data?.title}</h4>
							</a>
							</div>
						
						</>
					}
					
				})}

			</div>
		</>
		
		
	)
	
}

export default Page