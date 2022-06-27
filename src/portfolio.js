/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Marc Katzef",
  title: "Hi, I'm Marc",
  subTitle: emoji(
    "This site is currently under development!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/115nNca-89V6cTslu52entyYnUjTHvjCF/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mkatzef",
  linkedin: "https://www.linkedin.com/in/marc-katzef/",
  gmail: "marckatzef@gmail.com",
  facebook: "https://www.facebook.com/z4qqq",
  instagram: "https://www.instagram.com/mkatzef",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "...Get hands-on experience with languages and tools to solve problems",
  skills: [
    "⚡ Data analysis",
    "⚡ Machine learning",
    "⚡ Circuit design",
    "⚡ 3D printing"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The University of Melbourne",
      logo: require("./assets/images/uomLogo.jpeg"),
      subHeader: "PhD in Electrical and Electronic Engineering",
      duration: "July 2019 - March 2023 (anticipated)",
      desc: "Conducted research into machine learning for wireless network security",
      descBullets: [
        "Software-Defined Radios",
        "Game Theory"
      ]
    },
    {
      schoolName: "The University of Canterbury",
      logo: require("./assets/images/ucLogo.jpeg"),
      subHeader: "Bachelor of Engineering (Hons) in Computer Engineering",
      duration: "January 2015 - December 2018",
      desc: "Top student in the program. Took courses about algorithms and data structures, circuit design, operating systems, and networks.",
      descBullets: [
        "Minor in network engineering"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "System integration",
      progressPercentage: "70%"
    },
    {
      Stack: "Sense of humour",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Volunteer Software Developer",
      company: "Melbourne Space Program",
      companylogo: require("./assets/images/mspLogo.jpeg"),
      date: "April 2020 – April 2022",
      desc: "Autonomous rover",
      descBullets: [
        "ROS"
      ],
      color: [5, 21, 91]
    },
    {
      role: "Research Intern",
      company: "University of Auckland",
      companylogo: require("./assets/images/uoaLogo.jpeg"),
      date: "Nov 2018 – Feb 2019",
      desc: "Member of the Precision Timing Research Group",
      descBullets: [
        "ANNs on FPGAs"
      ],
      color: null
    },
    {
      role: "Intern Software Developer",
      company: "Verizon Connect",
      companylogo: require("./assets/images/vcLogo.png"),
      date: "Nov 2017 – Feb 2018",
      desc: "They brought me back!",
      color: [179, 59, 51]
    },
    {
      role: "Intern Software Developer",
      company: "Verizon Connect",
      companylogo: require("./assets/images/vcLogo.png"),
      date: "Nov 2016 – Feb 2017",
      desc: "Road widths",
      color: [179, 59, 51]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "todo",
  projects: [
    {
      image: "", //require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "", //require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements and Awards 🏆 "),
  subtitle:
    "Me in the news!",

  achievementsCards: [
    {
      title: "Orbital Transports Contest Winner",
      subtitle:
        "Winning project proposal for the SmallSat Idea-to-Space Launch Contest",
      image: require("./assets/images/otLogo.png"),
      footerLink: [
        {
          name: "Press Release",
          url: "https://www.prnewswire.com/news-releases/the-smallsat-idea-to-space-launch-contest-presented-by-entrepreneur-peter-wokwicz-and-orbital-transports-after-receiving-an-overwhelming-number-of-entries-has-selected-the-winner-301479809.html"
        }
      ]
    },
    {
      title: "UC Computer Engineering Ambassador",
      subtitle:
        "Exemplar student representing Computer Engineering and the options it brings.",
      image: require("./assets/images/ucLogoBW.jpeg"),
      footerLink: [
        {
          name: "Profile",
          url: "https://www.canterbury.ac.nz/get-started/why-uc/student-profiles/all-profiles/marc-katzef.html"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@MarcKatzef/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/MarcKatzef-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "none",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "none"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Actively looking for new projects to dive into after my research",
  number: "+92-0000000000",
  email_address: "marckatzef@gmail.com",
  open_for_ops: "Yes"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
