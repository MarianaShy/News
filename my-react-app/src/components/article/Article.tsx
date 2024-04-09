import { newsProp, ArticleInterface } from "./article.types"
import { v4 as uuidv4 } from 'uuid';


const Article = (props:newsProp) => {

const article: ArticleInterface = {
	id: uuidv4(),
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