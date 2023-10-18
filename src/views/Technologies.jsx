import { Navbar, Tech, StarsCanvas, Footer } from '../components'

const Technologies = () => {
  return (
    <div className="relative z-0 bg-[#040D12]">
      <div className="my-20">
        <Navbar />
      </div>
      <div className="relative z-0">
        <Tech />
        <StarsCanvas />

      </div>
      <Footer />
    </div>
  )
}

export default Technologies
