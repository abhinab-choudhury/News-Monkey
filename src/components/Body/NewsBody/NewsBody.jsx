import React, { Component } from 'react'
import './NewsBody.css'
import NewsCard from '../NewsCard/NewsCard'

export default class NewsBody extends Component {
    data = {
        "status": "ok",
        "totalResults": 24,
        "articles": [
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Russian general who ran Ukraine war fired - report",
                "description": "Sergei Surovikin was head of aerospace forces but has not been since a failed mutiny in June.",
                "url": "https://www.bbc.co.uk/news/world-europe-66590916",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2D9D/production/_130877611_0d75f3577273ac32cff0eae3103ecfc2bc17b3510_25_4738_26661000x563.jpg",
                "publishedAt": "2023-08-23T12:13:29Z",
                "content": "One of Russia's leading military figures, Gen Sergei Surovikin, has reportedly lost his job as air force chief after weeks of speculation his disappearance from public view.\r\nRia Novosti agency said … [+2459 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Lifehacker.com"
                },
                "author": "Amy Drader",
                "title": "Four Questions to Ask Yourself Before Changing Careers",
                "description": "Dreaming of a career change is a near universal experience for anyone with a job, typically arising in the wake of repeated experiences with unfulfilling work, lackluster bosses, or a sense of general dissatisfaction with your chosen field. The result might b…",
                "url": "https://lifehacker.com/four-questions-to-ask-yourself-before-changing-careers-1850679687",
                "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/49af78954b706999bdc1470f81d78fc8.jpg",
                "publishedAt": "2023-07-27T14:30:00Z",
                "content": "Dreaming of a career change is a near universal experience for anyone with a job, typically arising in the wake of repeated experiences with unfulfilling work, lackluster bosses, or a sense of genera… [+5119 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Supreme Court suspends Rahul Gandhi's conviction in defamation case",
                "description": "The ruling potentially allows Mr Gandhi to return to parliament and contest the 2024 general elections.",
                "url": "https://www.bbc.co.uk/news/world-asia-india-66404405",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0CDB/production/_129419230_rahul.jpg",
                "publishedAt": "2023-08-04T09:00:19Z",
                "content": "India's Supreme Court has suspended opposition leader Rahul Gandhi's conviction in a criminal defamation case.\r\nThe Congress leader was sentenced to two years in jail in March for his 2019 comments a… [+1474 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Italy's army general to be disciplined over shock book - Reuters",
                "description": "Italy's army general to be disciplined over shock book  Reuters",
                "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiY2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2V1cm9wZS9pdGFseXMtYXJteS1nZW5lcmFsLWJlLWRpc2NpcGxpbmVkLW92ZXItc2hvY2stYm9vay0yMDIzLTA4LTE3L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
                "urlToImage": null,
                "publishedAt": "2023-08-17T16:38:54Z",
                "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "General Dynamics' revenue rises on private jet, weapon demand - Reuters",
                "description": "General Dynamics' revenue rises on private jet, weapon demand  Reuters",
                "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMid2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2Flcm9zcGFjZS1kZWZlbnNlL2dlbmVyYWwtZHluYW1pY3MtcmV2ZW51ZS1yaXNlcy1wcml2YXRlLWpldC13ZWFwb24tZGVtYW5kLTIwMjMtMDctMjYv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
                "urlToImage": null,
                "publishedAt": "2023-07-26T11:12:52Z",
                "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Hyundai Motor unit to buy General Motors' India plant - Reuters",
                "description": "Hyundai Motor unit to buy General Motors' India plant  Reuters",
                "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiY2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvZGVhbHMvaHl1bmRhaS1tb3Rvci11bml0LWJ1eS1nZW5lcmFsLW1vdG9ycy1pbmRpYS1wbGFudC0yMDIzLTA4LTE2L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
                "urlToImage": null,
                "publishedAt": "2023-08-16T07:07:19Z",
                "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Texas attorney general Paxton seeks dismissal of impeachment articles - Reuters",
                "description": "Texas attorney general Paxton seeks dismissal of impeachment articles  Reuters",
                "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL3VzL3RleGFzLWF0dG9ybmV5LWdlbmVyYWwtcGF4dG9uLXNlZWtzLWRpc21pc3NhbC1pbXBlYWNobWVudC1hcnRpY2xlcy0yMDIzLTA3LTMxL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
                "urlToImage": null,
                "publishedAt": "2023-07-31T22:11:00Z",
                "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gizmodo.com"
                },
                "author": "Ed Cara",
                "title": "Depression and Anxiety Won't Raise Your Risk of Cancer, Study Finds",
                "description": "Here’s some potentially happy news: Depression and anxiety might not raise the chances of cancer after all, new research this week has found. The study, a review of existing research, found no significant link between either condition and an increased risk of…",
                "url": "https://gizmodo.com/study-depression-anxiety-cancer-risk-1850721287",
                "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/e888ae54815aa8a9b524179464e7c338.jpg",
                "publishedAt": "2023-08-09T16:45:00Z",
                "content": "Heres some potentially happy news: Depression and anxiety might not raise the chances of cancer after all, new research this week has found. The study, a review of existing research, found no signifi… [+2292 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "GAM shareholder group demands date change for extraordinary general meeting - Reuters",
                "description": "GAM shareholder group demands date change for extraordinary general meeting  Reuters",
                "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMidGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2dhbS1zaGFyZWhvbGRlci1ncm91cC1kZW1hbmRzLWRhdGUtY2hhbmdlLWV4dHJhb3JkaW5hcnktZ2VuZXJhbC1tZWV0aW5nLTIwMjMtMDgtMDgv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
                "urlToImage": null,
                "publishedAt": "2023-08-08T06:01:29Z",
                "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "North Korea's Kim dismisses top general, calls for war preparations - Flipboard",
                "description": "North Korea's Kim dismisses top general, calls for war preparations  Flipboard",
                "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiqQFodHRwczovL2ZsaXBib2FyZC5jb20vdG9waWMvbWlsaXRhcnkvbm9ydGgta29yZWEtcy1raW0tZGlzbWlzc2VzLXRvcC1nZW5lcmFsLWNhbGxzLWZvci13YXItcHJlcGFyYXRpb25zL2EtWjZYdGIwTTdULXFsLVpDYVZnSE5lZyUzQWElM0E0MTk5OTIyMzktOTQyZDBmOTY0NCUyRnJldXRlcnMuY29t0gG0AWh0dHBzOi8vZmxpcGJvYXJkLmNvbS90b3BpYy9taWxpdGFyeS9ub3J0aC1rb3JlYS1zLWtpbS1kaXNtaXNzZXMtdG9wLWdlbmVyYWwtY2FsbHMtZm9yLXdhci1wcmVwYXJhdGlvbnMvYS1aNlh0YjBNN1QtcWwtWkNhVmdITmVnJTNBYSUzQTQxOTk5MjIzOS05NDJkMGY5NjQ0JTJGcmV1dGVycy5jb20_Zm9ybWF0PWFtcA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
                "urlToImage": null,
                "publishedAt": "2023-08-10T06:52:55Z",
                "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "High interest rates hit Legal & General assets, shares fall - Reuters UK",
                "description": "High interest rates hit Legal & General assets, shares fall  Reuters UK",
                "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMicGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL3VrL3BlbnNpb25zLWJ1c2luZXNzLWJvb3N0cy1sZWdhbC1nZW5lcmFsLWgxLXByb2ZpdC1hYm92ZS1leHBlY3RhdGlvbnMtMjAyMy0wOC0xNS_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
                "urlToImage": null,
                "publishedAt": "2023-08-15T13:12:00Z",
                "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Northwestern taps ex-US attorney general Lynch as hazing lawsuits mount - Reuters",
                "description": "Northwestern taps ex-US attorney general Lynch as hazing lawsuits mount  Reuters",
                "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMieWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2xlZ2FsL2dvdmVybm1lbnQvbm9ydGh3ZXN0ZXJuLXRhcHMtZXgtdXMtYXR0b3JuZXktZ2VuZXJhbC1seW5jaC1oYXppbmctbGF3c3VpdHMtbW91bnQtMjAyMy0wOC0wMS_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
                "urlToImage": null,
                "publishedAt": "2023-08-01T18:28:00Z",
                "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "North Korea's Kim dismisses top general, calls for war preparations - Flipboard",
                "description": "North Korea's Kim dismisses top general, calls for war preparations  Flipboard",
                "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMihAFodHRwczovL2ZsaXBib2FyZC5jb20vdG9waWMvbm9ydGhrb3JlYS9ub3J0aC1rb3JlYS1zLWtpbS1kaXNtaXNzZXMtdG9wLWdlbmVyYWwtY2FsbHMtZm9yLXdhci1wcmVwYXJhdGlvbnMvZi05NDJkMGY5NjQ0JTJGcmV1dGVycy5jb23SAY8BaHR0cHM6Ly9mbGlwYm9hcmQuY29tL3RvcGljL25vcnRoa29yZWEvbm9ydGgta29yZWEtcy1raW0tZGlzbWlzc2VzLXRvcC1nZW5lcmFsLWNhbGxzLWZvci13YXItcHJlcGFyYXRpb25zL2YtOTQyZDBmOTY0NCUyRnJldXRlcnMuY29tP2Zvcm1hdD1hbXA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&cm=2&pc=n&src=1",
                "urlToImage": null,
                "publishedAt": "2023-08-10T00:09:07Z",
                "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "New radiology suite opens at Kelowna General Hospital - Cranbrook Daily Townsman - Cranbrook Townsman",
                "description": "<ol><li>New radiology suite opens at Kelowna General Hospital - Cranbrook Daily Townsman  Cranbrook Townsman\r\n</li><li>$9.6M interventional radiology suite now online at Kelowna General Hospital - Kelowna News  Castanet.net\r\n</li><li>View Full Coverage on Goo…",
                "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiXWh0dHBzOi8vd3d3LmNyYW5icm9va3Rvd25zbWFuLmNvbS9uZXdzL25ldy1yYWRpb2xvZ3ktc3VpdGUtb3BlbnMtYXQta2Vsb3duYS1nZW5lcmFsLWhvc3BpdGFsL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
                "urlToImage": null,
                "publishedAt": "2023-08-08T22:30:00Z",
                "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Pete Syme",
                "title": "Dollar General workers at a Florida store were left without a working restroom, OSHA says",
                "description": "Dollar General has racked up more than $21 million in OHSA fines since 2017 for unsafe working conditions in its stores.",
                "url": "https://www.businessinsider.com/dollar-general-workers-had-no-working-restroom-osha-complaint-2023-8",
                "urlToImage": "https://i.insider.com/6478ff2530404300183aaa81?width=1200&format=jpeg",
                "publishedAt": "2023-08-02T11:19:10Z",
                "content": "Dollar General has been repeatedly fined by OSHA.AP Photo/Eric Gay\r\n<ul>\n<li>A Dollar General store in Florida was cited for seven violations by OSHA inspectors.</li>\n<li>That included the lack of a … [+1854 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Mia Jankowicz",
                "title": "Russia may 'suddenly break' under pressure from Ukraine's counteroffensive, former US general Petraeus says",
                "description": "Despite overwhelming difficulties, Ukraine is applying constant pressure to Russia's front line, Petraeus said, and the cracks may yet show.",
                "url": "https://www.businessinsider.com/russia-may-suddenly-break-under-ukraine-counteroffensive-petraeus-2023-8",
                "urlToImage": "https://i.insider.com/6339abcd6427060019ef0113?width=1200&format=jpeg",
                "publishedAt": "2023-08-25T10:35:49Z",
                "content": "Retired Gen. David Petraeus.Leigh Vogel/Getty Images for Concordia Summit\r\n<ul>\n<li>Ukraine's arduous counteroffensive is \"far from over,\" General David Petraeus has said. </li>\n<li>Even the US milit… [+3838 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Grace Dean",
                "title": "A manager at a Pennsylvania Wendy's invented a fake employee and pocketed wages of $20,000, police say",
                "description": "Police said that the Lancaster store's former general manager manually clocked the \"ghost employee\" in and out for 128 shifts.",
                "url": "https://www.businessinsider.com/wendys-pennsylvania-manager-invented-fake-employee-wages-police-lancaster-2023-7",
                "urlToImage": "https://i.insider.com/630cd794417a0a0019107e86?width=1200&format=jpeg",
                "publishedAt": "2023-07-28T12:22:34Z",
                "content": "The woman worked at a Wendy's in Lancaster, Pennsylvania.Dan Tian/Getty Images\r\n<ul>\n<li>The ex-manager of a Pennsylvania Wendy's made up a fake employee to pocket extra wages, police say.</li>\n<li>S… [+1584 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Matthew Fox",
                "title": "Dick's Sporting Goods plunges 25% after it says retail-theft crime wave lowered profits",
                "description": "\"Organized retail crime and theft in general is an increasingly serious issue impacting many retailers,\" Dick's CEO Lauren Hobart said.",
                "url": "https://markets.businessinsider.com/news/stocks/dicks-stock-price-plunge-retail-theft-crime-shrinkage-earnings-dks-2023-8",
                "urlToImage": "https://i.insider.com/64e4ef42bd98a600197c1b28?width=1200&format=jpeg",
                "publishedAt": "2023-08-22T18:43:44Z",
                "content": "Gus Promollo delivers an order into a customer's trunk at Dick's Sporting Goods in Paramus, N.J., Monday, May 18, 2020.Seth Wenig/AP\r\n<ul><li>Dick's Sporting Goods plunged 25% on Tuesday after the co… [+3095 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "rpickrell@businessinsider.com (Ryan Pickrell)",
                "title": "Videos of an artillery ambush show Russian tanks and armor making 'opening day mistakes' and paying the price for them",
                "description": "A former US Army general told Insider that he is amazed that after 18 months of fighting, Russia is still making these kinds of costly errors.",
                "url": "https://www.businessinsider.com/artillery-ambush-videos-show-russian-tanks-make-opening-day-mistakes-2023-8",
                "urlToImage": "https://i.insider.com/64e3f03ebd98a600197b6c5f?width=1200&format=jpeg",
                "publishedAt": "2023-08-22T20:59:20Z",
                "content": "Videos of what looks like a very skillfully executed artillery ambush appear to show Russian armor forces making costly mistakes as the Ukrainians carry out what a retired US general called a \"textbo… [+5669 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "jwilkins@insider.com (Joseph Wilkins)",
                "title": "A Vietnamese electric carmaker is now worth $85 billion – almost as much as Ford and General Motors combined",
                "description": "Shares in VinFast soared more 250% in a Spac-led debut Tuesday, leaving founder Pham Nhat Vuong worth more than $44 billion.",
                "url": "https://markets.businessinsider.com/news/stocks/vietnamese-ev-maker-vinfast-worth-85-billion-ford-gm-combined-2023-8",
                "urlToImage": "https://i.insider.com/64dcc7364ef9f30019f7f401?width=1200&format=jpeg",
                "publishedAt": "2023-08-16T13:19:18Z",
                "content": "A Vietnamese electric carmaker is now worth almost as much as Ford and General Motors combined after its shares soared in their market debut Tuesday. \r\nVinFast jumped 255% to close at $37.06 on the N… [+1381 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Boing Boing"
                },
                "author": "Rob Beschizza",
                "title": "Trump \"nauseating,\" says his former Attorney General Bill Barr",
                "description": "Bill Barr was Donald Trump's attorney general and an effective protector and legal hatchetman for the former president while he was in office. But now he says that Trump is \"nauseating\" and predicts worse for his old boss as prosecutor Jack Smith pursues his …",
                "url": "https://boingboing.net/2023/08/03/trump-nauseating-says-his-former-attorney-general-bill-barr.html",
                "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2020/09/50297459368_b489d4edd5_o.jpg?fit=1200%2C800&ssl=1",
                "publishedAt": "2023-08-03T13:04:18Z",
                "content": "Bill Barr was Donald Trump's attorney general and an effective protector and legal hatchetman for the former president while he was in office. But now he says that Trump is \"nauseating\" and predicts … [+1576 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Boing Boing"
                },
                "author": "Thom Dunn",
                "title": "\"Washington's Gay General\" is a fabulous look at the queerness of America's founding",
                "description": "Washington's Gay General: The Legends and Loves of Baron von Steuben is a wonderful new graphic novel from writer Josh Trujillo and illustrator Levi Hastings that explores the oft-ignored life of Baron von Steuben, one of the most important military leaders i…",
                "url": "https://boingboing.net/2023/08/18/washingtons-gay-general-is-a-fabulous-look-at-the-queerness-of-americas-founding.html",
                "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/08/9781419743726_s3.jpg?fit=1200%2C760&ssl=1",
                "publishedAt": "2023-08-18T14:20:56Z",
                "content": "Washington's Gay General: The Legends and Loves of Baron von Steuben is a wonderful new graphic novel from writer Josh Trujillo and illustrator Levi Hastings that explores the oft-ignored life of Bar… [+4908 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "VentureBeat"
                },
                "author": "Rachel Kaser",
                "title": "Mortal Kombat 1 reveals Sindel and General Shao in latest trailer",
                "description": "Netherrealm debuted the latest trailer for Mortal Kombat 1 at Gamescom, which reveals Sindel, General Shao, Motaro and Shujinko.",
                "url": "https://venturebeat.com/games/mortal-kombat-1-reveals-sindel-and-general-shao-in-latest-trailer/",
                "urlToImage": "https://venturebeat.com/wp-content/uploads/2023/08/MK1-Sindel.jpg?w=1200&strip=all",
                "publishedAt": "2023-08-22T20:03:13Z",
                "content": "We're thrilled to announce the return of GamesBeat Summit Next, hosted in San Francisco this October, where we will explore the theme of \"Playing the Edge.\" Apply to speak here and learn more about s… [+1280 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Christopher Woody",
                "title": "US Marines gearing up to defend 'key' terrain near China are about to get a first-of-its-kind ship-hunting missile",
                "description": "\"NMESIS is going to teach us how do we control key maritime terrain,\" the US Marine Corps' top general said in June.",
                "url": "https://www.businessinsider.com/marine-corps-about-to-get-nmesis-first-ground-antiship-missile-2023-7",
                "urlToImage": "https://i.insider.com/64cadbc895fe1f0019df73f9?width=1200&format=jpeg",
                "publishedAt": "2023-08-06T14:12:17Z",
                "content": "US Marines fire a missile from a Navy/Marine Expeditionary Ship Interdiction System in California on June 28.US Marine Corps/Cpl. Earik Barton\r\n<ul>\n<li>Marines did a first-of-its-kind test of the Na… [+6392 chars]"
            }
        ]
    }
    news = this.data.articles

    constructor(Props) {
        super(Props)
        this.state = {
            articleCnt: this.data.totalResults,
            articles: this.news,
            query: "",
            currentPageNum: 1,
            country: 'id'
        }
    }


    render() {
        const queryHandler = (event) => {
            this.setState({
                ...Component,
                query: event.target.value
            })
            console.log(event.target.value)
        }

        const pageHandler = (event) => {
            let pageHTML = event.target.innerHTML
            if (pageHTML == "Previous") {
                this.setState({
                    ...Component,
                    currentPageNum: this.state.currentPageNum - 1
                })
            } else if (pageHTML == "Next") {
                this.setState({
                    ...Component,
                    previousPageNum: this.state.currentPageNum + 1
                })
            } else {
                let updatePageNumber = parseInt(pageHTML, 10)
                this.setState({
                    ...Component,
                    currentPageNum: updatePageNumber
                })
            }
            SubmitHandler()
        }

        const SubmitHandler = async () => {
            // Fetch trending news data and update state
            const data = await fetch(`https://newsapi.org/v2/everything?q=${this.state.query}&pageSize=25&page=${this.state.currentPageNum}&apiKey=7089a70bb7eb4580a51394b8f7beaf75`)
            if (data.status) {
                let parsed_data = await data.json()
                let articles = parsed_data.articles
                let totalResults = parsed_data.totalResults
                this.setState({
                    ...Component,
                    articleCnt: totalResults,
                    articles: articles,
                    query: this.state.query,
                }, () => {
                    console.log(this.state.currentPageNum + " " + this.state.articleCnt + " " + Math.ceil(this.state.articleCnt / 25))
                    console.log(this.state.currentPageNum + 3 <= Math.ceil(this.state.articleCnt / 25))
                }
                )
                console.log(totalResults)
            }

        }

        return (
            <div>
                <div className="container">
                    <h3>{this.state.query}</h3>
                    <form action="/" onSubmit={(event) => {
                        event.preventDefault();
                        this.setState({
                            ...Component,
                            currentPageNum: 1
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
                            <option value="Global-Warming">Global Warming</option>
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
                            <nav aria-label="Page navigation example" style={{ marginTop: '20px' }}>
                                <ul className="pagination">
                                    {this.state.currentPageNum !== 1 ? <li className="page-item"><a onClick={pageHandler} className="page-link" href="#">Previous</a></li> : <li className="page-item disabled"><a onClick={pageHandler} className="page-link" href="#">Previous</a></li>}
                                    {this.state.currentPageNum < Math.ceil(this.state.articleCnt / 25) ?
                                        <>
                                            <li className="page-item"><a onClick={pageHandler} className="page-link" href="#">{this.state.currentPageNum + 1}</a></li>
                                            <li className="page-item"><a onClick={pageHandler} className="page-link" href="#">{this.state.currentPageNum + 2}</a></li>
                                            <li className="page-item"><a onClick={pageHandler} className="page-link" href="#">{this.state.currentPageNum + 3}</a></li>
                                            <li className="page-item"><a onClick={pageHandler} className="page-link" href="#">Next</a></li>
                                        </> : <>
                                            <li className="page-item disabled"><a onClick={pageHandler} className="page-link" href="#">{this.state.currentPageNum + 2}</a></li>
                                            <li className="page-item disabled"><a onClick={pageHandler} className="page-link" href="#">{this.state.currentPageNum + 1}</a></li>
                                            <li className="page-item disabled"><a onClick={pageHandler} className="page-link" href="#">{this.state.currentPageNum + 3}</a></li>
                                            <li className="page-item disabled"><a onClick={pageHandler} className="page-link" href="#">Next</a></li>
                                        </>}

                                </ul>
                            </nav>
                            <div className='text-muted mb-3'> Page - {this.state.currentPageNum} </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

