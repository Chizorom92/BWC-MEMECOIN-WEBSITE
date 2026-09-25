import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Statement from './components/Statement'
import Token from './components/Token'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'
import MarketStats from './components/MarketStats'
import Community from './components/Community'
import SocialFeed from './components/SocialFeed'
import Meme from './components/Meme'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-void">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Statement />
        <Token />
        <Tokenomics />
        <Roadmap />
        <MarketStats />
        <Community />
        <SocialFeed />
        <Meme />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
