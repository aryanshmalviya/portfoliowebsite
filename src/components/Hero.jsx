import { styles } from '../styles'
import { EarthCanvas } from './canvas/'
import './styles.css'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-x-hidden radial-gradient">
      <div
        className={`${styles.paddingX} absolute top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
          {/* <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#1E90FF]" />
            <div className="w-1 sm:h-80 h-40 dodgerblue-gradient" />
          </div> */}

        <div>
          <h1 className={`${styles.heroHeadTitle}`}>
            Hi, I'm <span className="text-[#ffffff]">Aryansh</span>
          </h1>
          <p className={`${styles.heroSubText}`}>
            I am a junior front-end developer. My passion is to develop web
            applications/sites using React.js (Next.js) and React Native. <br className="sm:block hidden" />  
          </p>
        </div>

        <div>
        {/* <img
            src={"https://www.format.com/wp-content/uploads/about-me-portfolio-page-1.jpg"}
            alt="logo"
            // className="w-10 h-10 object-contain border-solid border-1 border-[#1E90FF] rounded-lg"
          /> */}
        </div>
      </div>
      <EarthCanvas/>
    </section>
  )
}

export default Hero
