import React, { Component } from 'react'

export default class NewsCard extends Component {
    render() {
        const { url, urlToImage, title, author, description } = this.props
        return (       
            <div className="card my-3 mx-3" style={{ width: "18rem" }}>
                <img src={urlToImage !== null ? urlToImage : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} className="card-img-top" alt={urlToImage} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5> <h6 className="text-muted">{author !== null ? author : "Anonymous"}</h6>
                    <p className="card-text">{description !== null? description:"Not Avilable"}</p>
                    <a href={`${url}`} className="btn btn-primary">Read</a>
                </div>
            </div>
        )
    }
}
