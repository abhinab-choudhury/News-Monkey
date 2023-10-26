import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Indexpage from './components/Body/Indexpage/Indexpage'
import NewsBody from './components/Body/NewsBody/NewsBody'
import About from './components/Body/About/About'
import Toptrending from './components/Body/NewsBody/Toptrending'

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                    <Routes>
                        <Route exact path='/News-Monkey' element={<Indexpage />} />
                        <Route exact path='/News-Monkey/trending_news' element={<Toptrending />} />
                        <Route exact path='/News-Monkey/news' element={<NewsBody />} />
                        <Route exact path='/News-Monkey/about' element={<About />} />
                    </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App