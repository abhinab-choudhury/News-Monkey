import React, { Component } from 'react'

export default class NewsCard extends Component {
    render() {
        const { url, urlToImage, title, author, description, time} = this.props
        return (
            <div className="card my-3 mx-3" style={{ width: "18rem" }}>
                <img src={urlToImage !== null ? urlToImage : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} className="card-img-top" alt={urlToImage} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5> <h6 className="text-muted">{author !== null ? author : "Anonymous"}</h6>
                    <p className="card-text">{description !== null ? description.replace(/<[^>]+>/g, '') : ""}</p>
                    <div style={{height:"40px", padding:"0px", margin:"0px"}} >
                        <a href={`${url}`} className="w-100 btn btn-primary text-center mb-1">Read</a>
                    </div>
                </div>
                <div className="card-footer m-0 text-muted">
                    {Date(time)}
                </div>
            </div>
        )
    }
}
