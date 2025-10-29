import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TranslationProvider } from './contexts/TranslationContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import HumanitarianServices from './pages/HumanitarianServices'
import NewsEvents from './pages/NewsEvents'
import FriendshipMeet from './pages/FriendshipMeet'
import FriendsDay from './pages/FriendsDay'
import Contact from './pages/Contact'
import './App.css'

const App = () => {
  return (
    <TranslationProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-page">
          <Header />
          <main className="grow bg-page">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/humanitarian-services" element={<HumanitarianServices />} />
              <Route path="/news-events" element={<NewsEvents />} />
              <Route path="/friendship-meet" element={<FriendshipMeet />} />
              <Route path="/friends-day" element={<FriendsDay />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </TranslationProvider>
  )
}

export default App
