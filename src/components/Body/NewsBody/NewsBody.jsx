import React, { Component } from 'react'
import './NewsBody.css'
import NewsCard from '../NewsCard/NewsCard'

export default class NewsBody extends Component {
    data = {
        "status": "ok",
        "totalResults": 10,
        "articles": [
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC Sport",
                "title": "Fifa opens disciplinary proceedings against Rubiales",
                "description": "World football's governing body opens disciplinary proceedings against Spanish football federation president Luis Rubiales.",
                "url": "http://www.bbc.co.uk/sport/football/66606387",
                "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/2522/production/_130860590_hermoso-index-bbc.jpg",
                "publishedAt": "2023-08-24T12:37:21.0082418Z",
                "content": "World football's governing body has opened disciplinary proceedings against Spanish football federation president Luis Rubiales for his behaviour at Sunday's Women's World Cup final.\r\nHe earlier grab… [+1737 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Vivek Ramaswamy: Five things the Republican presidential candidate believes",
                "description": "The tech executive and youngest candidate in the race supports raising the voting age and abolishing the FBI.",
                "url": "http://www.bbc.co.uk/news/world-us-canada-66603166",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1322A/production/_130887387_gettyimages-1610283806.jpg",
                "publishedAt": "2023-08-24T12:22:14.7580367Z",
                "content": "Vivek Ramaswamy, the 38-year-old biotech multi-millionaire running for president, was a standout performer in the first debate between Republican candidates for the party's nomination.\r\nWith no previ… [+4460 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Ukraine claims Crimea landing for 'special operation' on Independence Day",
                "description": "Kyiv claims Russia suffered personnel losses in an encounter that ensued in the peninsula's west.",
                "url": "http://www.bbc.co.uk/news/world-europe-66603644",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/140B2/production/_130889028_5567afdd3d601687bb13bc45d01a66d286d3c9c5.jpg",
                "publishedAt": "2023-08-24T12:07:21.5395099Z",
                "content": "Ukraine has claimed that its troops landed in occupied Crimea, as it marked its second Independence Day fighting Russian invaders.\r\nThe mission's objectives were achieved with no casualties among its… [+2355 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Republican debate: What they said (and didn't say) about climate",
                "description": "Asked in the first primary debate about climate change, only one candidate said it was real.",
                "url": "http://www.bbc.co.uk/news/world-us-canada-66603577",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3712/production/_130889041_haly_976getty.jpg",
                "publishedAt": "2023-08-24T11:07:19.0858651Z",
                "content": "One of the most illuminating moments in the debate Republican debate came 20 minutes in. The reaction to it was swift and - among some young people and scientists - angry.\r\nDid humans contribute to c… [+4609 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "California shooting: Four killed, six hurt in Cook's Corner bar",
                "description": "Six others have been wounded in the incident at Cook's Corner, a popular community hangout.",
                "url": "http://www.bbc.co.uk/news/world-us-canada-66603641",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/14490/production/_130888038_4700b87f93cf8901ebf249f3c4ddeb2d77e8caec.jpg",
                "publishedAt": "2023-08-24T10:07:17.930206Z",
                "content": "Four people have been killed and six others hurt in a shooting incident at a biker bar in southern California.\r\nThe gunman was among the four who died in the shooting at Cook's Corner in Orange Count… [+1533 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Fukushima: China retaliates as Japan releases treated nuclear water",
                "description": "The controversial discharge of treated nuclear water sparks an outcry and a seafood ban from China.",
                "url": "http://www.bbc.co.uk/news/world-asia-66577769",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1100E/production/_130864696_gettyimages-1615542134.jpg",
                "publishedAt": "2023-08-24T10:07:15.7120076Z",
                "content": "Japan has begun its controversial discharge of treated waste water from the Fukushima nuclear plant into the Pacific Ocean, sparking protests in the region and retaliation from Beijing.\r\nChina is the… [+5861 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Chandrayaan-3: India lunar rover Pragyaan takes a walk on the Moon",
                "description": "Chandrayaan-3's rover Pragyaan exits Vikram lander and takes first steps near the little-explored south pole.",
                "url": "http://www.bbc.co.uk/news/world-asia-india-66601996",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3ADC/production/_130886051_f4ohqjxbkaarkr2.jpg",
                "publishedAt": "2023-08-24T05:07:21.0391469Z",
                "content": "India's Moon rover has taken first steps on the lunar surface a day after the country made history by becoming the first to land near the south pole.\r\nChandrayaan-3's rover \"ramped down\" from the lan… [+3627 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Trump's surrender at Georgia jail explained",
                "description": "When the former president turns himself in on Thursday it will be unlike any of his previous cases",
                "url": "http://www.bbc.co.uk/news/world-us-canada-66601604",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/174D6/production/_130864459_p0g8gpfd.jpg",
                "publishedAt": "2023-08-24T04:22:19.1650829Z",
                "content": "When the former president surrenders at a Georgia jail on Thursday, it will be unlike any of his previous cases. The BBC's Barbara Plett Usher explains what makes the appearance, and Trump's fourth i… [+20 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Key moments from Republican presidential debate so far",
                "description": "It was a race to see who out of eight candidates would make a splash during the first Republican debate.",
                "url": "http://www.bbc.co.uk/news/world-us-canada-66601291",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C9CA/production/_130885615_gettyimages-1634871164.jpg",
                "publishedAt": "2023-08-24T02:52:16.8210873Z",
                "content": "We're more than halfway through the first Republican debate, and so far it's a fight to see who can stand out on a crowded - and loud - stage.\r\nEight candidates are vying to prove to the American pub… [+4024 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Yevgeny Prigozhin latest: Wagner boss Prigozhin was on crashed plane, aviation authorities say",
                "description": "Ten people on board a private aircraft died when it \"came down\" in western Russia, according to officials.",
                "url": "http://www.bbc.co.uk/news/live/world-66599774",
                "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
                "publishedAt": "2023-08-24T00:52:19.8514181Z",
                "content": "In Kyiv, the Ukrainian capital, there was little sympathy for Yevgeny\r\nPrigozhins apparent demise let's not forget that his Wagner troops led the\r\nattacks on Bakhmut, one of the most gruesome campaig… [+558 chars]"
            }
        ]
    }
    news = this.data.articles

    constructor(Props) {
        super(Props)
        this.state = {
            articleCnt: this.news.totalResults,
            articles: this.news,
            query: "",
            currentPageNum: 2,
            previousPageNum: 1
        }
    }


    render() {
        const trendingNews = this.state.articles
        const queryHandler = (event) => {
            this.setState({
                ...Component,
                query: event.target.value
            })
            console.log(event.target.value)
        }

        const pageHandler = (event) => {
            let currentPageNum = parseInt(this.state.currentPageNum,10)
            let previousPageNum = parseInt(this.state.previousPageNum,10)

            let pageHTML = event.target.innerHTML 

            let updatePageNumber = 1

        
            if (pageHTML == "Previous" && currentPageNum !== 1) {
                updatePageNumber = previousPageNum
                this.setState({
                    ...Component,
                    currentPageNum: previousPageNum,
                    previousPageNum: previousPageNum - 1
                })
            } else if (pageHTML == "Next") {
                updatePageNumber = currentPageNum + 1

                this.setState({
                    ...Component,
                    previousPageNum: currentPageNum,
                    currentPageNum: currentPageNum + 1
                })
            } else {
                updatePageNumber = parseInt(pageHTML, 10)
                this.setState({
                    ...Component,
                    currentPageNum: parseInt(pageHTML),
                    previousPageNum: parseInt(pageHTML) - 1
                })
            }

            SubmitHandler(this.state.query, updatePageNumber)
        }

        const SubmitHandler = async (query, page=2) => {
            // Fetch trending news data and update state
            const data = await fetch(`https://newsapi.org/v2/everything?q=${query}&pageSize=28&page=${page}&language=en&apiKey=7089a70bb7eb4580a51394b8f7beaf75`)
            if (data.status) {
                let parsed_data = await data.json()
                let articles = parsed_data.articles
                let totalResults = parsed_data.totalResults
                this.setState({
                    articleCnt: totalResults,
                    articles: articles,
                    query: query,
                    currentPageNum: page,
                    previousPageNum: page !== 1 ? page-1 : page
                })
                console.log(totalResults)
            }
            console.log(this.state.currentPageNum)
            console.log(parseInt(trendingNews.articleCnt, 10) > parseInt(25,10))
        }

        return (
            <div>
                <div className="container">
                    <h3>{this.state.query}</h3>
                    <form action="/" onSubmit={(event) => { event.preventDefault(); SubmitHandler(this.state.query,parseInt(this.state.currentPageNum,10)) }}>
                        <input type="text" className="m-2 p-2" onChange={queryHandler} name="subject" placeholder="subject" />
                        <input className="mx-1 p-2 btn btn-dark" type="submit" value="GET" />
                    </form>
                    <div className='m-auto'>
                        <div className="card-grid">
                            {trendingNews && trendingNews.map((news) =>
                                <NewsCard key={news.url} url={news.url} urlToImage={news.urlToImage} title={news.title} author={news.author} description={news.description} />
                            )}
                        </div>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                    
                                <li className="page-item"><a onClick={pageHandler} className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a onClick={pageHandler} className="page-link" href="#">{parseInt(this.state.currentPageNum,10) - 1}</a></li>
                                <li className="page-item"><a onClick={pageHandler} className="page-link" href="#">{parseInt(this.state.currentPageNum,10)}</a></li>
                                <li className="page-item"><a onClick={pageHandler} className="page-link" href="#">{parseInt(this.state.currentPageNum,10) + 1}</a></li>
                                <li className="page-item"><a onClick={pageHandler} className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

