import { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className='container'>
                <div className="container">
                    <h2 className='bg-dark text-light px-2 rounded py-2 mt-3'>About</h2>
                    <div className="border rounded px-3 mb-2">
                        <p className='bg-light p-2 m-2 rounded'>
                            Welcome to our News Web App - your one-stop destination for staying informed, engaged, and up-to-date with the world&#39;s most trending news. Our mission is to provide you with a streamlined and immersive news experience that delivers the latest stories right to your fingertips.
                        </p>
                        <h2 className='bg-dark text-light p-2 rounded'>Why Choose Our News Web App?</h2>
                        <div className='bg-light rounded py-2'>
                            <h3>At the heart of our platform is the commitment to delivering news that matters to you. Here&#39;s what sets us apart:</h3>
                            <ul>
                                <li><strong>Curated Trending Stories:</strong> <br />  Our team of dedicated journalists scours the web to curate a daily collection of the most captivating and trending news stories. We filter through the noise to ensure you receive accurate and relevant information.</li>
                                <li><strong>Personalized for You:</strong> <br /> We understand that everyone&#39;s interests vary. Our platform offers personalized news recommendations, tailoring your feed to match your preferences. Say goodbye to irrelevant stories and hello to content that resonates with you.</li>
                                <li><strong>Real-time Updates:</strong> <br /> Stay ahead of the curve with our real-time updates. As stories unfold, we keep you informed, allowing you to be part of the ongoing conversation.</li>
                                <li><strong>User-friendly Interface:</strong> <br /> Navigating news should be easy and intuitive. Our web app features a sleek and user-friendly design that ensures a seamless browsing experience across all devices.</li>
                                <li><strong>Deep Dive or Quick Glance:</strong> <br /> Whether you have a few minutes to spare or want to dive deep into a story, our platform accommodates both. Read concise summaries or explore in-depth articles - the choice is yours.</li>
                                <li><strong>Readability Matters:</strong> <br /> We prioritize readability. Our articles are designed for easy comprehension, enabling you to grasp complex topics without the fuss.</li>
                            </ul>
                        </div>

                        <h2 className='bg-dark text-light px-2 rounded py-2 my-3'>How It Works:</h2>
                        <div className='bg-light rounded py-2 mb-3 mt-1'>
                            <ul>
                                <li><strong>Create Your Profile:</strong> <br /> Sign up and personalize your news feed based on your interests.</li>
                                <li> <strong>Discover Trending Stories:</strong> <br /> Explore a curated selection of trending news from across the globe.</li>
                                <li><strong>Stay Informed:</strong> <br /> Get real-time updates on breaking news and unfolding events.</li>
                                <li><strong>Engage and Share:</strong> <br /> Join the conversation by sharing articles with your friends and colleagues.</li>
                                <li><strong>Bookmark Favorites:</strong> <br /> Save articles to read later or refer back to.</li>
                            </ul>
                        </div>

                        <p>From global headlines to local happenings, our News Web App ensures you&#39;re always in the know. Experience the future of news delivery – reliable, engaging, and tailored to you. Join us today and embark on a journey of informed discovery.</p>


                    </div>

                </div>
            </div>
        )
    }
}
