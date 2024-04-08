type newsProp = {
	news: any
}


const Article = (props:newsProp) => {
console.log(props)


return(
	<div className="flex-item">
	<a className="article" href={props?.news?.url}>		
		<img src={props?.news?.urlToImage} alt="" className="article-img"/>
		<h4 className="article-title">{props?.news?.title}</h4>
	</a>
</div>
)

}



export default Article