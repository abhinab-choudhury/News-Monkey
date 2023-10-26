import './Indexpage.css'
import { Component } from 'react'

export default class Indexpage extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img height="300px" width="250px" style={{ objectFit: "cover" }} src="https://hippie-inheels.com/wp-content/uploads/2020/04/where-to-stay-in-goa-pin.jpg" className="d-block w-100" />
                        </div>
                        <div className="carousel-item" data-bs-interval="10000">
                            <img height="300px" width="250px" style={{ objectFit: "cover" }} src="https://www.nurserytoday.co.in/wp-content/uploads/2023/10/1-15.jpg" className="d-block w-100" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img height="300px" width="250px" style={{ objectFit: "cover" }} src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Mumbai_03-2016_41_Bombay_High_Court.jpg" className="d-block w-100" />
                        </div>
                    </div>
                </div>
                <div className='indexpage'>
                    <h1>News Monkey</h1>
                    <p>
                        Introducing our innovative web application built with React: your go-to source for staying informed and up-to-date. Our project is a dynamic web app designed to deliver the latest and most relevant top trending news directly to your screen every day.

                        With a user-friendly interface and a seamless browsing experience, our React-based web app ensures you never miss a beat in the fast-paced world of news and current events. Through intelligent algorithms and real-time data aggregation, we curate a personalized selection of the most important and captivating stories, keeping you engaged and informed.
                    </p>
                    <div>
                        <h3>Key features of our web app include</h3>
                        <ul className='bg-white'>
                            <li>
                                <strong>Top Trending News:</strong>
                                Discover the hottest topics and breaking news stories that are capturing global attention.
                            </li>
                            <li>
                                <strong>Personalized Content:</strong>
                                Tailored to your preferences, our app adapts to your interests, ensuring you see news that matters most to you.
                            </li>
                            <li>
                                <strong>Sleek and Responsive Design:</strong>
                                Whether you&#39;re using a desktop, tablet, or smartphone, our app&#39;s responsive design ensures a consistent and enjoyable user experience.
                            </li>
                            <li>
                                <strong>Real-time Updates:</strong>
                                Stay in the loop with instant updates as news unfolds, allowing you to be part of the conversation as events happen.
                            </li>
                            <li>
                                <strong>Readability and Engagement:</strong>
                                We prioritize clean, easy-to-read articles, enhancing your understanding and engagement with the news.
                            </li>
                        </ul>
                        <div className="text-muted">
                            In a world inundated with information, our React-based web app cuts through the noise, presenting you with the stories that truly deserve your attention. Experience the future of news delivery with our innovative project, where React technology meets accurate and timely reporting. Stay informed effortlessly, every day.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
