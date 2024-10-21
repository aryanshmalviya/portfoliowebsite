import { styles } from '../styles'
import { EarthCanvas } from './canvas/'
import './styles.css'

const Hero = () => {
  const title = "I am a software developer in Precious Infosystem. I thrive in collaborative environments and am adept at turning complex requirements into intuitive, user-friendly interfaces whether developing single-page applications or mobile solutions."
  return (
    <section className="relative w-full h-screen mx-auto overflow-x-hidden radial-gradient">
      <div
        className={`${styles.paddingX} absolute top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadTitle}`}>
            <span className='text-6xl font-bold bg-gradient-to-r from-sky-200 to-indigo-300 bg-clip-text text-transparent'>  Hi, I'm </span>
          <span className="text-6xl font-bold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">Aryansh</span>
          </h1>
          <p className={`${styles.heroSubText}`}>
            {`${title}`} <br className="sm:block hidden" />  
          </p>
        </div>
      </div>
      <EarthCanvas/>
    </section>
  )
}

export default Hero
