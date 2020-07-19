module.exports = {
  siteTitle: 'Hi! I\'m Ashish!',
  siteDescription: `About Ashish Thanki`,
  keyWords: ['ashish', 'thanki', 'curriculum'],
  authorName: 'Ashish Thanki',
  githubUsername: 'ashishthanki',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `A professionally registered mechanical engineering currently working as a <strong> Data Scientist</strong>. 
    Before becoming a Data Scientist, Ashish was a Mechancial Engineer for WSP in London. He was involved in numerous iconic engineering 
    designs across London and the UK. Ashish designed large commercial office buildings and was named as the 
    Head of Early Profressionals, where he served as the leader and played a key role in representing young engineers across the business.
    Outside of work, he fell in love with Machine Learning and why he drove to transition his career from Mechanical Engineering to 
    Data Science.<br />
    This website showcases Ashish's career, GitHub repos and ... a Blog. <br />`,
  skills: [
    {
      name: 'HTML',
      level: 70
    },
    {
      name: 'CSS',
      level: 50
    },
    {
      name: 'Javascript',
      level: 40
    },
    {
      name: 'NodeJs',
      level: 40
    },
    {
      name: 'Python',
      level: 90
    },
    {
      name: 'Git',
      level: 70
    },
    {
      name: 'Pandas',
      level: 70
    },
    {
      name: 'Numpy',
      level: 70
    },
    {
      name: 'Sci-kit Learn',
      level: 90
    },
    {
      name: 'TensorFlow2',
      level: 80
    }
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "WSP",
      begin: {
        month: 'sep',
        year: '2017'
      },
      duration: null,
      occupation: "Mechancial Engineer",
      description: "Responsible for the Building Services for multiple commercial office buildings."
  
    },  {
      company: "Head of Young MEP Engineers",
      begin: {
        month: 'Jan',
        year: '2018'
      },
      duration: null,
      occupation: "Mechancial Engineer",
      description: "Deployed on site and became the residential engineer for Goldman Sachs London HQ."
  
    }, {
      company: "WSP",
      begin: {
        month: 'Mar',
        year: '2019'
      },
      duration: '1 yr e 5 mos',
      occupation: "Mechanical Design Engineer",
      description: "Lead the Mechanical design for Santander's Digital hub and started the 300 people Auditorium design."
    }, {
      company: "Graduated with a Masters from a Globally Leading University ",
      begin: {
        month: 'Sept',
        year: '2013'
      },
      duration: '4 yrs e 3 mos',
      occupation: "Mechanical Engineering Masters Student",
      description: "Developed a solid foundation on problem solving."
  
    },
  ],
  portifolio: [
    {
      image: "/images/awesome-grid.png",
      description: "Responsive grid for ReactJS",
      url: "https://github.com/santosfrancisco/react-awesome-styled-grid"
    },
    /* more portifolio items here */
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/athanki",
    github: "https://github.com/ashishthanki",
    email: "ashish_thanki@hotmail.com"
  },
  siteUrl: 'https://github.com/ashishthanki/ashishthanki.github.io',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}