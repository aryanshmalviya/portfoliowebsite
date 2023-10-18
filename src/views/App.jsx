import {
  About,
  Contact,
  Experience,
  School,
  Hero,
  Navbar,
  StarsCanvas,
  Footer,
} from '../components'

const App = () => {
  return (
    <div className="relative z-0 bg-[#040D12]" >
      <div>
        <Navbar />
        <Hero />
      </div>
      <About />
      <School />
      <Experience />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
      <StarsCanvas/>
    </div>
  )
}

export default App
