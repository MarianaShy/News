type newsProp = {
	news: any
}


const Page = (props:newsProp) => {
	let count = 0
	return (
		<div className="flex">
			{props?.news?.map((data:any) => {
				if(count < 20){
					console.log(data)
					count++
					return <>
					<div>{data?.title}</div>
					</>
				}
				
			})}

		</div>
		
	)
	
}

export default Page