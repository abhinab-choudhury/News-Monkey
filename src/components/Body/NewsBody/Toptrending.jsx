import { Component } from 'react'
import NewsCard from '../NewsCard/NewsCard'
import Spinner from '../Spinner/Spinner'

export default class Toptrending extends Component {
    constructor() {
        super()
        this.state = {
            articleCnt: 0,
            articles: [],
            currentPageNum: 1,
            country: 'id',
            loading: true
        }
    }
    async componentDidMount() {
        this.setState({
            ...Component,
            loading: true
        })
        const data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.state.country}&pageSize=25&page=${this.state.currentPageNum}&apiKey=7089a70bb7eb4580a51394b8f7beaf75`)
        const parsed_data = await data.json()
        const articles = parsed_data.articles
        this.setState({
            ...Component,
            articles: articles,
            articleCnt: parsed_data.totalResults,
            currentPageNum: this.state.currentPageNum,
            loading: false
        })
        console.log(this.state.articleCnt)
        console.log(this.state.currentPageNum < Math.ceil(this.state.articleCnt / 25))
    }

    render() {
        const queryHandler = (event) => {
            this.setState({
                ...Component,
                country: event.target.value
            })
            console.log(event.target.value)
        }

        const pageHandler = (event) => {
            let pageHTML = event.target.innerHTML
            if (pageHTML == "Previous") {
                this.setState({
                    ...Component,
                    currentPageNum: this.state.currentPageNum - 1
                }, () => {
                    this.componentDidMount()
                })
            } else if (pageHTML == "Next") {
                this.setState({
                    ...Component,
                    previousPageNum: this.state.currentPageNum + 1
                }, () => {
                    this.componentDidMount()
                })
            } else {
                let updatePageNumber = parseInt(pageHTML, 10)
                this.setState({
                    ...Component,
                    currentPageNum: updatePageNumber
                }, () => {
                    this.componentDidMount()
                })
            }

        }

        return (
            <div>
                <div className="container">
                    <h3>Top Trending News </h3>
                    {this.state.loading && <Spinner />}
                    {!this.state.loading && <>
                        <form action="/" onSubmit={(event) => {
                            event.preventDefault();
                            this.setState({
                                ...Component,
                                currentPageNum: 1
                            });
                            this.componentDidMount()
                        }}>
                            <select className='btn btn-outline-light border mx-2' onChange={queryHandler} style={{ color: "black" }} name="Category" id="category">
                                <option defaultValue value="in">India</option>
                                <option value="us">United States of America</option>
                                <option value="jp">Japan</option>
                                <option value="kr">Korea</option>
                                <option value="gb">UK</option>
                                <option value="il">Isreal</option>
                            </select>
                            <input className="btn btn-primary" type="submit" value="GET" />
                        </form>
                        <div className='m-auto'>
                            <div className="card-grid">
                                {this.state.articles && this.state.articles.map((news) =>
                                    <NewsCard key={news.url} url={news.url} urlToImage={news.urlToImage} title={news.title} author={news.author} description={news.description} />
                                )}
                            </div>

                            <div className="d-flex justify-content-between">
                                <nav aria-label="Page navigation example" style={{ marginTop: '20px' }}>
                                    <ul className="pagination">
                                        {this.state.currentPageNum !== 1 ? <li className="page-item"><a onClick={pageHandler} className="page-link" href="#">Previous</a></li> : <li className="page-item disabled"><a onClick={pageHandler} className="page-link" href="#">Previous</a></li>}
                                        <li className="page-item"><a onClick={pageHandler} className="page-link" href="#">{this.state.currentPageNum + 1}</a></li>
                                        <li className="page-item"><a onClick={pageHandler} className="page-link" href="#">{this.state.currentPageNum + 2}</a></li>
                                        <li className="page-item"><a onClick={pageHandler} className="page-link" href="#">{this.state.currentPageNum + 3}</a></li>
                                        <li className="page-item"><a onClick={pageHandler} className="page-link" href="#">Next</a></li>
                                    </ul>
                                </nav>
                                <div className='text-muted mb-3'> Page - {this.state.currentPageNum} </div>
                            </div>
                        </div>
                    </>}
                </div>
            </div>
        )
    }
}
