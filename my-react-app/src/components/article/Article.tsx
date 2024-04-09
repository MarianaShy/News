import { newsProp, ArticleInterface } from "./article.types"
//test

const Article = (props:newsProp) => {

const article: ArticleInterface = {
	imgUrl: props.news.urlToImage,
	title: props.news.title,
	url: props.news.url
}

console.log(article)

return(
	<div className="flex-item">
	<a className="article" href={article.url} target="_blank">		
		<img src={article.imgUrl} alt="Main picture for the article" className="article-img"/>
		<h4 className="article-title">{article.title}</h4>
	</a>
</div>
)
}



export default Article