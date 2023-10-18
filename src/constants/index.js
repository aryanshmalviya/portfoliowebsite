import {
  javascript,
  mysql,
  html,
  css,
  docker,
  figma,
  git,
  mongodb,
  nodejs,
  next,
  nextjs,
  reactjs,
  tailwind,
  php,
  android,
  bash,
  bootstrap,
  insomnia,
  laravel,
  linux,
  photoshop,
  python,
  sass,
  virtualbox,
  vmware,
  windows,
  office365,
  ccs,
  sonnenhof,
  glaubitz,
  service,
  pitagora,
  ccicampus,
  ifcaad,
  cpp,
  native,
  reactNative
} from '../assets'
import {sgsits , vindhyachal } from "../../src/assets"
import { preci , ojaswa } from '../assets'
import { weather , spark  ,video} from '../assets'

export const navLinks = [
  {
    id: 'technologies',
    external: true,
    title: 'Techs',
  },
  {
    id: 'projects',
    external: true,
    title: 'Projects',
  },
  {
    id: 'contact',
    external: false,
    title: 'Contact',
  },
]

export const footLinks = [
  {
    id: 'mentions',
    external: true,
    title: 'Legal Mentions',
  },
]

const programming = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name:"HTML",
    icon:html
  },
  {
    name: 'CSS',
    icon: css,
  },
  {
    name: 'C++',
    icon: cpp,
  },
]

const framework = [
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name:'Next.js',
    icon:'https://pulkitgangwar.gallerycdn.vsassets.io/extensions/pulkitgangwar/nextjs-snippets/1.0.1/1678968590213/Microsoft.VisualStudio.Services.Icons.Default'
  },
]

const back = [
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
]

const devops = [
]

const softwares = [
  {
    name: 'Figma',
    icon: figma,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Linux',
    icon: linux,
  }
]

const mentions = [
  {
    title: 'Editor and owner of the website',
    content:
      'Mr. Aryansh Malviya\n Editorial manager : Aryansh Malviya\n Email : aryanshmalviya2626@gmail.com\n',
  },
  {
    title: 'Terms and conditions of use',
    content:
      'This site www.aryansh-malviya.com is proposed in different web languages (ReactJs - ThreeJs - TailwindCSS). For a better comfort of use and a more pleasant graphics, it is recommended to use modern browsers such as Microsoft Edge, Safari, Firefox, Google Chrome, Brave, etc...\n Mr. Aryansh Malviya uses all the means at his disposal to ensure reliable information and a reliable update of his website. However, errors or omissions may occur. Mr. Aryansh Malviya is in no way responsible for the use made of this information, and for any direct or indirect damage that may result from it.',
  },
  {
    title: 'Intellectual Property Rights',
    content:
      'All the content of this site, including texts, animations, logos and icons, as well as their layout, are the exclusive property of Mr. Aryansh Malviya. Any reproduction, distribution, modification, adaptation, retransmission or publication, even partial, of these different elements is strictly forbidden without the express written consent of Mr. Aryansh Malviya.\n This representation or reproduction, by any means whatsoever, constitutes an infringement punishable by articles L.335-2 and following of the Intellectual Property Code.\n Failure to comply with this prohibition constitutes an infringement that may incur the civil and criminal liability of the infringer. In addition, the owners of the copied contents could take legal action against you.',
  },
  {
    title: 'Personal information',
    content:
      'In general, you are not required to provide us with your personal data when you visit the www.aryansh-malviya.com website.\n You can refuse to provide your personal data. In this case, you will not be able to use the services of the site, in particular that of requesting information.\n We may automatically collect certain information about you when you simply browse this website, including: information about your use of the site, such as the areas you visit and the services you access, your IP address, your browser type, your access times.\n Such information is used exclusively for internal statistical purposes. The databases are protected by the provisions of the law of July 1, 1998 transposing the directive 96/9 of March 11, 1996 on the legal protection of databases.',
  },
]

const experiences = [
  {
    title: 'Front-end Developer',
    company_name: 'Precious Infosystem Pvt Ltd.',
    icon: preci,
    iconBg: '#383E56',
    date: 'April 2023 - Present',
    dateColor: '#373737',
    points: [
      'I am working as junior software developer .',
      'My designated stack at present is front-end, extensively using React and React Native for developing user centric web/mobile applications ',
      'Currently working on mobile application for Mizanek for legal consultation.',
      'Develop skills in social support and teamwork.',
    ],
  },
  {
    title: 'Resource Manager',
    company_name: 'Club OJASWA',
    icon: ojaswa,
    iconBg: '#E6DEDD',
    date: 'Oct 2021 - july 2023',
    points: [
      'As Resource manager at club OJASWA I was responsible for allocating & managing the resources for various events.',
      'Empower individuals to serve the society to the best of their capabilities..',
      'Bring out the potential talents and skills of students to make them the vanguards of the upcoming generations.',
      `And refine today's youth in all possible spheres`,
    ],
  }
]

const schools = [
  {
    title: "Bachelor's degree",
    company_name: 'SGSITS , Indore , M.P.',
    icon: sgsits,
    iconBg: '#09248f',
    date: 'May 2019 - September 2023',
    points: [
      "I accquired branch Electronics and Telecommunication engineering in SGSITS and have passed my all semester examinations with 7.24 CGPA overall .",
      'I was Resource manager at club Ojaswa for almost 2 years and under my supervision various prestigious events were organised like TEDx and GS-MUN21 .',
      'Organised College cricket tournament HPL , played inter college basketball tournament  and anchored various events like G-Summit held in College',
      
    ],
  },
  {
    title: 'Vindhyachal Academy',
    company_name: '10th , CBSE',
    icon: vindhyachal,
    iconBg: '#E6DEDD',
    date: 'October 2016 - April 2017',
    points: [
      'Graduated higher secondary with 7.8 CGPA',
      'Participated in math olympiad in 2017 and runner up in National Science Olympiad(NSO).',
      'Won gold medal in interbranch school basketball tournament (2017).',
      'Won bronze medal in interschool basketball tournament (2017) .',
      'House captain and school vice captain in year 2017.',
    ],
  },
  {
    title: 'Vindhyachal Academy',
    company_name: '12th , CBSE',
    icon: vindhyachal,
    iconBg: '#383E56',
    date: 'Sept 2018 - April 2019',
    points: [
      'Graduated Senior Secondary education with 70.62% overall',
      'Accquired AIR 2365 SC rank in JEE Advanced and 88.12 percentile in JEE Mains',
      'Appointed as school captain and led reforestation movement organised in our locality by Municipal corporation',
      'Won gold medal in interbranch school basketball tournament (2019)' ,
      'Won silver medal in interschool basketball tournament (2019) ',
    ],
  },
]

const schoolProjects = [
  {
    name: 'Snake Rattle',
    description:
      `I have developed a classic snake game using HTML , CSS & JavaScript where a user can parse through the space and control the direction of the motion of snake to the point where the food is placed . By each consecutive taken food snake's length and speed increases which makes it more fun ! `,
    tags: [
      {
        name: 'HTML',
        color: 'red-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'red-text-gradient',
      },
    ],
    image: "https://im.indiatimes.in/media/content/2018/Aug/snake_game_1533210447.jpg",
    source_code_link:
      'https://aryanshmalviya.github.io/Snake-Rattle/',
    project_code_link: 'https://github.com/aryanshmalviya/Snake-Rattle',
  },
  {
    name: 'Weather Forecast ',
    description:
      'I have developed weather website using HTML , JavaScript , CSS and openweatherMap api . In this site a user can search distinct locations throughout the globe to fetch temperature , atmospheric phenomenon , humidity , windspeed and images related to that particular location .',
    tags: [
      {
        name: 'HTML',
        color: 'orange-text-gradient',
      },
      {
        name: 'CSS',
        color: 'white-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'red-text-gradient',
      },
    ],
    image: weather,
    source_code_link:
      'https://aryanshmalviya.github.io/Weather-Page/',
    project_code_link: 'https://github.com/aryanshmalviya/Weather-Page',
  },
  {
    name: 'Payment Gateway Integration',
    description:
      'I have developed a website for payment gateway integration using HMTL ,CSS , JavaScript and razorpay api for where user can route through different pages to know more about spark foundations and the project. The motive behind website is to raise funds for orphan kids for their education.',
    tags: [
      {
        name: 'HTML',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'orangex-text-gradient',
      },
      {
        name: 'CSS',
        color: 'red-text-gradient',
      },
      {
        name: 'Razor-Pay',
        color: 'white-text-gradient'
      }
    ],
    image:
      spark,
    source_code_link:
      'https://aryanshmalviya.github.io/aryansh/',
    project_code_link: 'https://github.com/aryanshmalviya/aryansh  ',
  },
]

const workProjects = [
  {
    name: 'Zydex Industries',
    description:
      `A paint application developer using React Native and Typescript , where a user can seamlessly discover various colors and texture , assosiated catalouges , shades , share the liked catalogues and application supports a salient feature of try on wall to have a simulated wall paints live at user's residence and making it possible for the user to edit them too !. `,
    tags: [
      {
        name: 'React Native',
        color: 'green-text-gradient',
      },
      {
        name: 'Typescript ',
        color: 'white-text-gradient',
      },
      {
        name: 'React',
        color: 'red-text-gradient',
      },
    ],
    image: `	https://zydexbuildingsolutions.com/wp-content/uploads/2022/09/DSC_2591-edited-1536x1024.png`,
    source_code_link:
      '',
    project_code_link:
      '',
  },
  {
    name: 'Mizanek legal consultation',
    description:
      'Mizanek presents a legal consultancy application providing the user to handle the case over to lawyer and have various lawyers to choose from . Same a professional (Lawyer) can have also put up their profiles assosiating with several classifications of laws and practices.  .',
    tags: [
      {
        name: 'React Native',
        color: 'green-text-gradient',
      },
      {
        name: 'React',
        color: 'white-text-gradient',
      },
      {
        name: 'Typescript',
        color: 'red-text-gradient',
      },
    ],
    image: 'https://mizanek.com/wp-content/themes/lawyer-zone/assets/img/lawyer-zone-inner-banner-1920-600.jpg',
    source_code_link:
      'https://mizanek.com/',
    project_code_link:
      'https://mizanek.com/',
  }
]

const personalProjects = [

  {
    name: 'Video Conferencing App',
    description:
      'I have created an mobile android application using React-Native , 100mslive SDK , where user can use this platform that enables an online virtual meetings via audio , video , chat and screen sharing option upto 100 people with no time limits  .',
    tags: [
      {
        name: 'React-Native',
        color: 'green-text-gradient',
      },
      {
        name: 'React',
        color: 'white-text-gradient',
      },
      {
        name: '100mslive',
        color: 'red-text-gradient',
      }
    ],
    image: video,
    source_code_link:
      'https://drive.google.com/file/d/1gyX8kv_nLocYmvQerb_C0r7o3225_ddv/view?usp=sharing',
    project_code_link: 'https://github.com/aryanshmalviya/Video-Conferencing-App',
  },
  {
    name: '3D Portfolio',
    description:
      'My 3D portfolio project is a realization with Reactjs and Threejs. It presents my skills in web development by offering an immersive and interactive user experience. The project allows visitors to navigate in a 3D environment and discover my professional and personal projects in the form of 3D models and seamless experience.',
    tags: [
      {
        name: 'reactjs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'white-text-gradient',
      },
      {
        name: 'threejs',
        color: 'red-text-gradient',
      },
    ],
    image:
      'https://images.takeshape.io/4d46e476-8704-42c4-8d0d-06ebdd0e3c93/dev/dc827c73-0d21-4602-baaf-7f2ee4ec60f0/ThreeJS%20%2B%20React2.png?auto=compress%2Cformat',
    source_code_link:
      'https://github.com/aryanshmalviya/Portfolio',
    project_code_link: 'https://github.com/aryanshmalviya/Portfolio',
  },
  {
    name: 'Musix',
    description:
      'Musix is digital music service that give access to the songs you like and discover new song released by the artists around the globe .',
    tags: [
      {
        name: 'Next.js',
        color: 'green-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'white-text-gradient',
      },
      {
        name: 'React',
        color: 'red-text-gradient',
      },
      {
        name:'Tailwind CSS',
        color:'orange-text-gradient'
      }
    ],
    image: 'https://images.template.net/wp-content/uploads/2017/05/Android-Music-App-788x557.jpg',
    source_code_link: 'https://github.com/aryanshmalviya/Musix',
    project_code_link: 'https://github.com/aryanshmalviya/Musix',
  },
]

const news = [
  {
    name: 'Laravel Eloquent ORM',
    description:
      'The Eloquent ORM included with Laravel provides a beautiful, simple ActiveRecord implementation for working with your database. Each database table has a corresponding "Model" which is used to interact with that table.',
    image:
      'https://grafikart.fr/uploads/attachments/2023/laravel-eloquent-6426f92444ea0127887452.jpg',
    source_link: 'https://stitcher.io/blog/eloquent-mysql-views',
    published_at: 'Aug 27, 2018',
    read: 'Read more...',
  },
  {
    name: 'How to use GitHub',
    description:
      'GitHub is a web-based hosting service for version control using Git. It is mostly used for computer code. It offers all of the distributed version control and source code management.',
    image:
      'https://www.lebigdata.fr/wp-content/uploads/2021/03/DataLab_-_Chapitre_0_-_Fabriquer_sa_station_de_mesure_connect_e_github-logo-640x320-1.png',
    source_link: 'https://www.lebigdata.fr/github-tout-savoir',
    published_at: 'Mar 9, 2022',
    read: 'Read more...',
  },
  {
    name: 'Rsync documentation',
    description:
      'Rsync (for remote synchronization) is a file synchronization software. It is frequently used to set up remote backup systems or system restore points',
    image: 'https://unihost.com/help/wp-content/uploads/using-rsync-linux.jpg',
    source_link: 'https://doc.ubuntu-fr.org/rsync',
    published_at: 'Fev 20, 2023',
    read: 'Read more...',
  },
  {
    name: 'Preferences Visual Studio Code',
    description:
      'In this tutorial, Grafikart proposes to discover its configuration on Visual Studio Code. It edits in particular the settings.json file to customize the interface and the features of the editor.',
    image: 'https://biolibre.fr/images/articles/visual_studio_code.jpeg',
    source_link: 'https://grafikart.fr/tutoriels/vscode-settings-2096',
    published_at: 'Nov, 2022',
    read: 'Read more...',
  },
  {
    name: 'PHP Object Oriented Programming',
    description:
      'In this article, we will learn how to program in PHP in an object-oriented way. We will see the concepts of classes, objects, inheritance, interfaces, abstract classes, etc.',
    image:
      'https://blog.nicolashachet.com/wp-content/uploads/2013/02/Php-POO.jpg',
    source_link: 'https://www.bgmp.fr/la-programmation-orientee-objet-en-php/',
    published_at: 'Jul 8, 2020',
    read: 'Read more...',
  },
  {
    name: 'Setting up a CRUD',
    description:
      'In this article, we will learn how to setting up a CRUD. CRUD is a computer acronym related to the operation of stored data. It encompasses four basic operations : Create, Read, Update and Delete.',
    image:
      'https://i0.wp.com/datascientest.com/wp-content/uploads/2022/10/CRUD.png?fit=800%2C439&ssl=1',
    source_link:
      'https://appmaster.io/fr/blog/operations-de-crud-quest-ce-que-le-crud',
    published_at: 'Mar 21, 2023',
    read: 'Read more...',
  },
  {
    name: 'SSL certificate',
    description:
      'An SSL certificate is a data file that links a cryptographic key to an organisation\'s information. The certificate activates the padlock and the "https" protocol to ensure a secure connection between the web server and the browser.',
    image: 'https://www.znetlive.com/blog/wp-content/uploads/2019/01/SSL.png',
    source_link:
      'https://www.verisign.com/en_US/website-presence/online/ssl-certificates/index.xhtml',
    published_at: 'Feb 17, 2021',
    read: 'Read more...',
  },
  {
    name: 'What is a Firewall',
    description:
      'A firewall is a network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules.',
    image:
      'https://static.vecteezy.com/ti/vettori-gratis/p3/600578-icona-del-firewall-di-rete-illustrazione-su-sfondo-bianco-vettoriale.jpg',
    source_link:
      'https://www.axis-solutions.fr/quest-ce-quun-pare-feu-et-quel-est-son-role/',
    published_at: 'Aug 19, 2022',
    read: 'Read more...',
  },
  {
    name: 'DNS (Domain Name System)',
    description:
      'A DNS (Domain Name System) is a service that translates domain names into IP addresses. It is a hierarchical, distributed database that stores information associated with domain names in a network.',
    image:
      'https://img-0.journaldunet.com/JWF_xPKNOuVujcIak_mazUDk8Ns=/540x/smart/f5abd03528314fea91c760664a8783e6/ccmcms-jdn/39476110.jpg',
    source_link: 'https://www.cloudflare.com/fr-fr/learning/dns/what-is-dns/',
    published_at: 'Feb 01, 2023',
    read: 'Read more...',
  },
  {
    name: 'Vite.js Tutorial',
    description:
      'Vite.js is a fast development tool for modern web projects. It focuses on speed and performance by improving the development experience.',
    image:
      'https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/getting-started-with-vite.png',
    source_link: 'https://www.freecodecamp.org/news/get-started-with-vite/',
    published_at: 'Avr 6, 2022',
    read: 'Read more...',
  },
  {
    name: 'React.js Routing',
    description:
      'The article I checked out on React.js Routing is a handy resource for understanding the basics of setting up routes in a web application with React.js. It discusses the different routing methods and their respective benefits.',
    image:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--_cPqsQW---/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kzhqskruy0lrpso8vaoj.png',
    source_link:
      'https://reactrouter.com/en/main/routers/create-browser-router',
    published_at: 'Sep 8, 2022',
    read: 'Read more...',
  },
  {
    name: 'Install React in Laravel 9 with Vite',
    description:
      'In this article, we will learn how to install React js 3 in laravel 9.19 with vite. This article shows how to install React in laravel 9. You will be able to create a React and Laravel 9.19 application powered by vite.',
    image:
      'https://dm86im8vci8bx.cloudfront.net/blog/banner/30261657708842.jpg',
    source_link:
      'https://techvblogs.com/blog/how-to-install-react-in-laravel-9-with-vite',
    published_at: 'Sep, 2022',
    read: 'Read more...',
  },
]

export {
  programming,
  framework,
  back,
  devops,
  softwares,
  experiences,
  mentions,
  schools,
  schoolProjects,
  workProjects,
  personalProjects,
  news,
}
