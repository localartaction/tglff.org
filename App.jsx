import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Community from './components/Community'
import TrailOfTrees from './components/TrailOfTrees'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Community />
        <TrailOfTrees />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

