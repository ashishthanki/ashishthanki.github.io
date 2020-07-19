module.exports = {
  siteTitle: 'Hi! I\'m Ashish!',
  siteDescription: `About Ashish Thanki`,
  keyWords: ['ashish', 'thanki', 'curriculum'],
  authorName: 'Ashish Thanki',
  githubUsername: 'ashishthanki',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `A professionally registered mechanical engineering currently working as a 
     <strong> Data Scientist</strong>.<br /><br />
    
    Before becoming a Data Scientist, Ashish was a Mechancial Engineer for WSP in London,
    where he designed several large commercial office buildings. <br /><br />
    During his time as a Mechanical Engineer, he was named as the Head of Early Profressionals,
    where he served as the leader and played a key role in representing young engineers across 
    the business.<br /><br />

    Outside of work, he fell in love with Machine Learning and why he drove to transition his 
    career from Mechanical Engineering to Data Science.<br /><br />
    This website showcases Ashish's career, GitHub repos and ... a Blog. <br /><br />`,
  skills: [
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
    },
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
    }
    
    
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "WSP",
      begin: {
        month: 'Aug',
        year: '2020'
      },
      duration: null,
      occupation: "Data Scientist",
      description: "Responsible for the HCC Future Mobility Transportation Plan."
  
    },  {
      company: "WSP",
      begin: {
        month: 'sep',
        year: '2017'
      },
      duration: null,
      occupation: "Mechancial Engineer",
      description: "Responsible for the Building Services for multiple commercial office buildings."
  
    },  {
      occupation: "Head of Young MEP Engineers",
      begin: {
        month: 'Jan',
        year: '2018'
      }
    },  {
      company: "Graduated with a Masters from a Globally Leading University ",
      begin: {
        month: 'sep',
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
      description: "End to End Data Science Project",
      url: "https://github.com/ashishthanki/MLProjects/blob/master/SupervisedLearning/Transport/_InterstateTraffic.ipynb"
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