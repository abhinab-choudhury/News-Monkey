import React, { Component } from 'react'
import './NewsBody.css'
import NewsCard from '../NewsCard/NewsCard'
import Spinner from '../Spinner/Spinner'

export default class NewsBody extends Component {
    data = {
        "status": "ok",
        "totalResults": 24,
        "articles": [
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Ron Miller",
                "title": "Splinter group officially launches OpenTF fork of HashiCorp Terraform | TechCrunch",
                "description": "A group that formed recently in reaction to HashiCorp's open source license change, announced it was officially launching on Friday.",
                "url": "https://techcrunch.com/2023/08/28/splinter-group-officially-launches-opentf-fork-of-hashicorp-terraform/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/GettyImages-173063503.jpg?resize=1200,800",
                "publishedAt": "2023-08-28T13:20:53Z",
                "content": "Earlier this month HashiCorp announced that it was changing the open source license it uses for Terraform and its other developer tools. The change triggered an uproar in the open source community. O… [+2810 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Jagmeet Singh",
                "title": "India to launch solar observatory mission Aditya-L1 this week | TechCrunch",
                "description": "India is launching its first space-based solar observatory mission called Aditya-L1 to study the sun — just days after the successful landing of the India is launching its first space-based solar observatory mission called Aditya-L1 to study the sun — just da…",
                "url": "https://techcrunch.com/2023/08/28/aditya-l1-launch-solar-observatory-mission/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/isro-aditya-l1-space-based-solar-observatory-mission.jpg?w=1200",
                "publishedAt": "2023-08-28T13:08:13Z",
                "content": "India is launching its first space-based solar observatory mission called Aditya-L1 to study the sun just days after the successful landingof the country’s moon rover mission Chandrayaan-3.\r\nThe laun… [+2075 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Christine Hall",
                "title": "Leadsales targets LatAm businesses with conversational commerce tool for WhatsApp | TechCrunch",
                "description": "Leadsales targets LatAm businesses with conversational commerce tool for WhatsApp | TechCrunchtechcrunch.com",
                "url": "https://techcrunch.com/2023/08/28/whatsapp-leadsales-conversational-commerce/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/SkyDeck_2022@MarlaAufmuth_9894.jpeg?resize=1200,675",
                "publishedAt": "2023-08-28T13:03:54Z",
                "content": "Mobile commerce in Latin America is expected to continue a healthy growth streak over the next few years, and Leadsales, a Mexican startup, wants to help small and medium businesses in Latin America … [+2764 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Catherine Shu",
                "title": "Moxie raises $15.7M to make opening medspas easier | TechCrunch",
                "description": "Treatments like botox are becoming more ubiquitous, spurring growth in the number of medspas, or centers that offer botox, IV hydration and laser Treatments like botox are becoming more ubiquitous, spurring growth in the number of medspas, or centers that off…",
                "url": "https://techcrunch.com/2023/08/28/moxie/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/Medspa_Image.jpg?resize=1200,798",
                "publishedAt": "2023-08-28T13:00:35Z",
                "content": "Treatments like botox are becoming more ubiquitous, spurring growth in the number of medspas, or centers that offer botox, IV hydration and laser treatments from certified providers like registered n… [+5066 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Christine Hall",
                "title": "Geek Ventures targets immigrant founders with its first fund | TechCrunch",
                "description": "Geek Ventures provides immigrant-focused networking events so founders have an opportunity to grow their professional network.",
                "url": "https://techcrunch.com/2023/08/28/geek-ventures-immigrant-venture-capital/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/Ihar-NYC1.jpg?resize=1200,676",
                "publishedAt": "2023-08-28T12:45:17Z",
                "content": "Geek Ventures is the latest venture capital firm to launch its first fund and has $23 million in capital commitments to invest in immigrant tech founders at the pre-seed and seed stages.\r\nIhar Mahani… [+2526 chars]"
            },
            {
                "source": {
                    "id": "the-next-web",
                    "name": "The Next Web"
                },
                "author": "Si\\u00f4n Geschwindt",
                "title": "Nordic tech to power the world’s biggest electric ship",
                "description": "Australian shipbuilder Incat Tasmania has selected two Nordic companies to provide the battery and propulsion technology for the world’s largest electric ship, as the industry looks ...",
                "url": "https://thenextweb.com/news/nordic-tech-worlds-biggest-electric-ship",
                "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F08%2Fincat-worlds-biggest-electric-ship.jpg&signature=cdc2d51c603d96ba6dfdb41a2687b5e0",
                "publishedAt": "2023-08-28T12:16:47Z",
                "content": "Australian shipbuilder Incat Tasmania has selected two Nordic companies to provide the battery and propulsion technology for the worlds largest electric ship, as the industry looks to charter a cours… [+2299 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Christine Hall",
                "title": "Devolut leverages e-commerce growth in Latin America to develop reverse logistics tool | TechCrunch",
                "description": "Devolut leverages e-commerce growth in Latin America to develop reverse logistics tool | TechCrunchtechcrunch.com",
                "url": "https://techcrunch.com/2023/08/28/devolut-e-commerce-latin-america-returns/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/Devolut-team.jpg?resize=1200,676",
                "publishedAt": "2023-08-28T12:02:01Z",
                "content": "With the explosion of e-commerce during the global pandemic, companies not only had to adopt Amazon-like shipping skills, but also how to coordinate and manage returns.\r\nIn Latin America, the reverse… [+4186 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Manish Singh",
                "title": "Reliance's financial services unit to offer insurance, merchant lending | TechCrunch",
                "description": "Jio Financial Services, the financial services unit of Mukesh Ambani-run Indian conglomerate Reliance Industries, plans to expand to merchant lending and Jio Financial Services plans to expand to merchant lending and insurance, Reliance chairman Mukesh Ambani…",
                "url": "https://techcrunch.com/2023/08/28/reliance-jio-financial-services-unit/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/GettyImages-1614989268.jpg?resize=1200,800",
                "publishedAt": "2023-08-28T10:56:26Z",
                "content": "Jio Financial Services, the financial services unit of Mukesh Ambani-run Indian conglomerate Reliance Industries, plans to expand to merchant lending and insurance, Ambani said at Reliance’s annual g… [+3356 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Jagmeet Singh",
                "title": "Reliance's 5G hotspot Jio AirFiber to hit stores next month in broadband push | TechCrunch",
                "description": "Jio Platforms on Monday launched the AirFiber, a wireless plug-and-play 5G hotspot, as the top Indian top telecom operator races to make a dent to the Reliance Jio Infocomm, India's top telecom mobile operator, launched its wireless plug-and-play 5G hotspot A…",
                "url": "https://techcrunch.com/2023/08/28/jio-airfiber-india-launch/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/jio-airfiber.jpg?w=1200",
                "publishedAt": "2023-08-28T09:20:26Z",
                "content": "Jio Platforms on Monday launched the AirFiber, a wireless plug-and-play 5G hotspot, as the top Indian top telecom operator races to make a dent to the broadband market.\r\nWith the Jio AirFiber, first … [+1584 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Manish Singh",
                "title": "Reliance appoints Ambani's children to board | TechCrunch",
                "description": "Reliance Industries said Monday it has appointed the three children of billionaire Mukesh Ambani -- Isha Ambani, Akash Ambani and Anant Ambani -- to its",
                "url": "https://techcrunch.com/2023/08/28/reliance-board-ambani/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/06/GettyImages-1161221564.jpg?resize=1200,800",
                "publishedAt": "2023-08-28T08:59:22Z",
                "content": "Reliance Industries said Monday it has appointed the three children of billionaire Mukesh Ambani — Isha Ambani, Akash Ambani and Anant Ambani — to its board, the latest in the succession plan at the … [+993 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Ivan Mehta",
                "title": "After Threads, Bluesky also adds a way to see your own likes | TechCrunch",
                "description": "Bluesky introduced a bunch of updates on Friday to its mobile apps and website including a new tab to see your own likes.",
                "url": "https://techcrunch.com/2023/08/27/after-threads-bluesky-also-adds-a-way-to-see-your-own-likes/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/05/bluesky-felt.jpg?resize=1200,675",
                "publishedAt": "2023-08-28T06:36:44Z",
                "content": "Bluesky introduced a bunch of updates on Friday to its mobile apps and website including a new tab to see your own likes, notification support for apps, and an emoji picker for the web composer.\r\nEar… [+1315 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Rita Liao",
                "title": "Tesla's China rival Xpeng buys ride hailing giant Didi's smart EV assets for $744M | TechCrunch",
                "description": "Chinese electric vehicle upstart Xpeng is acquiring the smart EV assets of ride hailing giant Didi for $744 million, marking another significant alliance",
                "url": "https://techcrunch.com/2023/08/27/teslas-china-rival-xpeng-buys-ride-hailing-giant-didis-smart-ev-assets-for-744m/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/11/20220822_GZ_小鹏G9_KIWI0017.jpg?resize=1200,800",
                "publishedAt": "2023-08-28T03:19:55Z",
                "content": "Chinese electric vehicle upstart Xpeng is acquiring the smart EV assets of ride hailing giant Didi for $744 million, marking another significant alliance that the Tesla challenger has struck in recen… [+1628 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Rita Liao",
                "title": "Tesla's China rival Xpeng buys ride hailing giant Didi's EV unit | TechCrunch",
                "description": "Chinese electric vehicle upstart Xpeng is acquiring the smart EV assets of Didi, China's ride hailing giant, marking another significant alliance that the",
                "url": "https://techcrunch.com/2023/08/27/teslas-china-rival-xpeng-buys-ride-hailing-giant-didis-smart-ev-business/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/11/20220822_GZ_小鹏G9_KIWI0017.jpg?resize=1200,800",
                "publishedAt": "2023-08-28T02:46:31Z",
                "content": "Chinese electric vehicle upstart Xpeng is acquiring the smart EV assets of Didi, China’s ride hailing giant, marking another significant alliance that the Tesla challenge has struck in recent months.… [+692 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Kirsten Korosec",
                "title": "The battery business is booming and Zeekr kicks off it IPO roadshow | TechCrunch",
                "description": "TechCrunch's weekly transportation newsletter digs into Zeekr's IPO plans, Northvolt's latest investment, Tesla, Uber and more.",
                "url": "https://techcrunch.com/2023/08/27/the-battery-business-is-booming-and-zeekr-kicks-off-it-ipo-roadshow/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/ev-battery-factories-2.jpg?resize=1200,675",
                "publishedAt": "2023-08-27T20:01:36Z",
                "content": "The Station is a weekly newsletter dedicated to all things transportation. Sign up here  just click The Station  to receive the newsletter every weekend in your inbox. Subscribe for free. \r\nWelcome b… [+7298 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Haje Jan Kamps",
                "title": "Never express your ‘use of funds’ slide as percentages | TechCrunch",
                "description": "Early-stage companies need to paint a compelling picture for another round of funding. That’s where startups often fall down. Here’s how to fix that.",
                "url": "https://techcrunch.com/2023/08/27/use-of-funds-are-not-percentages/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/Ask-and-Use-of-Funds-fail-2.jpeg?w=960",
                "publishedAt": "2023-08-27T16:00:56Z",
                "content": "When investors look at a startup slide deck, they are looking for something very specific. Yes, they want to know if the team is great and the market is huge and the problem is worth solving and the … [+1393 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Anna Heim",
                "title": "Looking for your next book? These 9 authors have reading recommendations for you | TechCrunch",
                "description": "We asked authors whose work is closely tied to tech and startups this simple question: \"What book have you read this summer that you think others might enjoy?\"",
                "url": "https://techcrunch.com/2023/08/27/tech-startups-recommendations/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/04/GettyImages-1397220250.jpg?resize=1200,800",
                "publishedAt": "2023-08-27T15:01:09Z",
                "content": "What’s the hardest part of reading? More often than not, it’s picking a good book. “L’embarras du choix,” as we say in French: Presented with infinite options, it becomes very hard to make a decision… [+2853 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Christine Hall",
                "title": "Better.com’s public market debut was Miserable.com",
                "description": "Welcome back to The Interchange, where we take a look at the hottest fintech news of the previous week. Better.com finally went public last week, and the stock’s performance was worse than expected. Affirm, on the other hand, saw its shares get a boost on the…",
                "url": "https://techcrunch.com/2023/08/27/better-com-had-a-miserable-com-public-debut/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/06/GettyImages-1179848673.jpg?resize=1200,795",
                "publishedAt": "2023-08-27T14:16:23Z",
                "content": "Welcome back to The Interchange, where we take a look at the hottest fintech news of the previous week. Better.com finally went public last week, and the stock’s performance was worse than expected. … [+8396 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Kyle Wiggers",
                "title": "Microsoft brings Python to Excel, Cruise reduces fleet following crash, and MrBeast creates controversy | TechCrunch",
                "description": "In this edition of Week in Review (WiR), we cover Microsoft bringing Python to Excel, MrBeast stirring up controversy and Cruise reducing its robotaxi fleet following a crash.",
                "url": "https://techcrunch.com/2023/08/26/microsoft-brings-python-to-excel-cruise-reduces-fleet-following-crash-and-mrbeast-creates-controversy/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1185699748.jpg?resize=1200,800",
                "publishedAt": "2023-08-26T20:15:50Z",
                "content": "Hello, folks, and welcome to Week in Review (WiR), TechCrunch’s regular newsletter that covers the biggest happenings in tech over the past few days. Haven’t been able to follow the news closely? Don… [+5552 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Zack Whittaker",
                "title": "A Brazilian phone spyware was hacked and victims' stolen data 'deleted' | TechCrunch",
                "description": "The Portuguese-language spyware app has been used to compromise over 76,000 devices to date, the leaked data shows.",
                "url": "https://techcrunch.com/2023/08/26/brazil-webdetetive-spyware-deleted/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/getty-photo-mosh-stalkerware.jpg?resize=1200,799",
                "publishedAt": "2023-08-26T20:01:42Z",
                "content": "A Portuguese-language spyware called WebDetetive has been used to compromise more than 76,000 Android phones in recent years across South America, largely in Brazil. WebDetetive is also the latest ph… [+8350 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Anna Heim",
                "title": "Yes, in my backyard | TechCrunch",
                "description": "BuildCasa raised a $3.5 million round of pre-seed funding to let California homeowners build new homes in their backyards.",
                "url": "https://techcrunch.com/2023/08/26/housing-supply-startups/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/BuildCasa-rendering-Backyard-house.jpg?resize=1200,600",
                "publishedAt": "2023-08-26T17:01:07Z",
                "content": "Welcome to the TechCrunch Exchange, a weekly startups-and-markets newsletter. Its inspired by the daily TechCrunch+ column where it gets its name. Want it in your inbox every Saturday? Sign up here.\r… [+686 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Alex Wilhelm",
                "title": "The scoop on Gen-Z and how they are rewriting the rules of the Internet | TechCrunch",
                "description": "Equity's bringing you a bonus episode! Battery Ventures dropped an interesting report on Gen-Z, and we wanted to talk about it. Alex brought on Courtney Chow, a vice president at Battery Ventures focused on early- and growth-stage consumer internet, software …",
                "url": "https://techcrunch.com/2023/08/26/the-scoop-on-gen-z-and-how-they-are-rewriting-the-rules-of-the-internet/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/11/equity-podcast-2019-phone.webp?w=680",
                "publishedAt": "2023-08-26T14:06:16Z",
                "content": "Listen here or wherever you get your podcasts.\r\nHello and welcome back to Equity, a podcast about the business of startups, where we unpack the numbers and nuance behind the headlines.\r\nWelcome to an… [+1885 chars]"
            },
            {
                "source": {
                    "id": "the-next-web",
                    "name": "The Next Web"
                },
                "author": null,
                "title": "Headway Premium: Lifetime Subscription (2 Users) for $99",
                "description": "Expires August 24, 2123 23:59 PST\n\n\n\n\n Buy now and get 83% off\n\n\n\n\n \n \n \n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n\n \n KEY FEATURES\r\nAre you ready to take your reading to the next level? It's time to get personal with your reading.\n\nHeadway is an app that wi…",
                "url": "https://deals.thenextweb.com/sales/headway-premium-lifetime-subscription-2-users?aid=&utm_campaign=feed&utm_medium=RSS&utm_source=thenextweb",
                "urlToImage": "https://cdnp2.stackassets.com/790c0cee180479d62906e71dcf4ecf8f74434ab9/store/c74b58ab8737ae6680aaaa79b42fe251a7b55882b8fbe7c734b83f908f57/sale_322901_primary_image.jpg",
                "publishedAt": "2023-08-25T23:00:00Z",
                "content": "Are you ready to take your reading to the next level? It's time to get personal with your reading.\r\nHeadway is an app that will help you develop the most powerful learning habits and make sure you're… [+1765 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Amanda Silberling",
                "title": "The mugshot that launched a thousand memes | TechCrunch",
                "description": "Once we knew Donald Trump would be processed at Fulton County Jail, we knew the resulting mugshot would be everywhere for years to come.",
                "url": "https://techcrunch.com/2023/08/25/the-mugshot-that-launched-a-thousand-memes/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/trump-mugshot-memes.jpg?resize=1200,600",
                "publishedAt": "2023-08-25T21:15:57Z",
                "content": "Memes can happen in the blink of an eye, like a Jeopardy! contestant who accidentally makes a sexual innuendo under the pressure of stage lights, or a kid who randomly gets interviewed on a playgroun… [+5304 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Alex Wilhelm",
                "title": "Five takeaways from Instacart’s S-1 filing | TechCrunch",
                "description": "Instacart dropped its S-1 on Friday. Instacart is a very large private company, making its eventual debut a critical event for the back-half of 2023.",
                "url": "https://techcrunch.com/2023/08/25/instacart-s1-five-takeaways/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/09/instacart-logo.jpg?resize=1200,800",
                "publishedAt": "2023-08-25T19:34:27Z",
                "content": "On-demand grocery delivery giant Instacart has finally dropped its long-awaited S-1. The company, actually named MapleBear, is one of the best-known unicorns on the IPO shortlist. Instacarts public-o… [+2291 chars]"
            }
        ]
    }

    news = this.data.articles

    constructor(Props) {
        super(Props)
        this.state = {
            articleCnt: this.data.totalResults,
            articles: this.news,
            query: "General",
            currentPageNum: 1,
            country: 'id',
            loading: false
        }
    }


    render() {
        const queryHandler = (event) => {
            this.setState({
                ...Component,
                query: event.target.value
            })
        }

        const pageHandler = (event) => {
            let pageHTML = event.target.innerHTML
            console.log("pageHTML: ", pageHTML)
            if (pageHTML == "Previous") {
                this.setState({
                    ...Component,
                    currentPageNum: this.state.currentPageNum - 1
                }, () => {
                    SubmitHandler()
                })
            } else if (pageHTML == "Next") {
                this.setState({
                    ...Component,
                    currentPageNum: this.state.currentPageNum + 1
                }, () => {
                    SubmitHandler()
                })
            } else {
                this.setState({
                    ...Component,
                    currentPageNum: parseInt(pageHTML, 10)
                }, () => {
                    SubmitHandler()
                })
            }
            
        }

        const SubmitHandler = async () => {
            // Fetch trending news data and update state
            this.setState({
                ...Component,
                loading: true
            }, () => {
                console.log("state named loading Updated to true")
            })
            const data = await fetch(`https://newsapi.org/v2/everything?q=${this.state.query}&pageSize=24&page=${this.state.currentPageNum}&apiKey=7089a70bb7eb4580a51394b8f7beaf75`)
            if (data.status) {
                let parsed_data = await data.json()
                let articles = parsed_data.articles
                let totalResults = parsed_data.totalResults
                this.setState({
                    ...Component,
                    articleCnt: totalResults,
                    articles: articles,
                    query: this.state.query,
                    loading: false
                }, () => {
                    console.log(this.state.currentPageNum + " " + this.state.articleCnt + " " + Math.ceil(this.state.articleCnt / 25))
                    console.log(this.state.currentPageNum + 3 <= Math.ceil(this.state.articleCnt / 24))
                }
                )
                console.log(totalResults)

            }

        }

        return (
            <div>
                <div className="container">
                    {this.state.loading && <Spinner />}
                    {!this.state.loading && <>
                        <h3>{this.state.query}</h3>
                        <form action="/" onSubmit={(event) => {
                            event.preventDefault();
                            this.setState({
                                ...Component,
                                currentPageNum: 1
                            }, () => {
                                console.log("setting the page number to 1 before making an API Call.")
                            });
                            SubmitHandler()
                        }}>
                            <select className='btn btn-outline-light border mx-2' onChange={queryHandler} style={{ color: "black" }} name="Category" id="category">
                                <option defaultValue value="General">General</option>
                                <option value="Anime">Anime</option>
                                <option value="Politics">Politics</option>
                                <option value="Economy">Economy</option>
                                <option value="Business">Business</option>
                                <option value="Health">Health</option>
                                <option value="Science">Science</option>
                                <option value="Technology">Technology</option>
                                <option value="Lifestyle">Lifestyle</option>
                                <option value="GlobalWarming">Global Warming</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Music">Music</option>
                                <option value="Sports">Sports</option>
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
                                <nav arialabel="Page navigation example" style={{ marginTop: '20px' }}>
                                    <ul className="pagination">
                                        {this.state.currentPageNum !== 1 ? <li className="page-item"><a onClick={pageHandler} className="page-link" href="#">Previous</a></li> : <li className="page-item disabled"><a onClick={pageHandler} className="page-link" href="#">Previous</a></li>}
                                        {this.state.currentPageNum < Math.ceil(this.state.articleCnt / 24) ? <> <li className="page-item"><a onClick={pageHandler} className="page-link" href="#">{this.state.currentPageNum + 1}</a></li> <li className="page-item"><a onClick={pageHandler} className="page-link" href="#">{this.state.currentPageNum + 2}</a></li> <li className="page-item"><a onClick={pageHandler} className="page-link" href="#">{this.state.currentPageNum + 3}</a></li> <li className="page-item"><a onClick={pageHandler} className="page-link" href="#">Next</a></li></> : <><li className="page-item disabled"><a onClick={pageHandler} className="page-link" href="#">{this.state.currentPageNum + 2}</a></li><li className="page-item disabled"><a onClick={pageHandler} className="page-link" href="#">{this.state.currentPageNum + 1}</a></li><li className="page-item disabled"><a onClick={pageHandler} className="page-link" href="#">{this.state.currentPageNum + 3}</a></li><li className="page-item disabled"><a onClick={pageHandler} className="page-link" href="#">Next</a></li> </>}
                                    </ul>
                                </nav>
                                <div className='text-muted mb-3'> Page - {this.state.currentPageNum} </div>
                            </div>
                        </div>

                    </>
                    }
                </div>
            </div>
        )
    }
}

