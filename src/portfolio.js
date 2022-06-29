/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Marc Katzef",
  title: "Hi, I'm Marc",
  subTitle: "I'm an engineering PhD student with a passion for learning new systems, who's actively looking for work that'll keep me on my toes",
  resumeLink:
    "https://drive.google.com/file/d/115nNca-89V6cTslu52entyYnUjTHvjCF/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/mkatzef",
  linkedin: "https://www.linkedin.com/in/marc-katzef/",
  gmail: "marckatzef@gmail.com",
  instagram: "https://www.instagram.com/mkatzef",
  scholar: "https://scholar.google.com/citations?user=hZqLb8UAAAAJ&hl=en",
  thingiverse: "https://www.thingiverse.com/mkatzef",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Gain hands-on experience with languages and tools to solve problems",
  skills: [
    "⚡ Data analysis",
    "⚡ Hardware design",
    "⚡ Software design",
    "⚡ Connecting the above!"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "Arduino",
      fontClassname: "devicon-arduino-plain"
    },
    {
      skillName: "Bash",
      fontClassname: "devicon-bash-plain"
    },
    {
      skillName: "C",
      fontClassname: "devicon-c-plain"
    },
    {
      skillName: "C++",
      fontClassname: "devicon-cplusplus-plain"
    },
    {
      skillName: "C#",
      fontClassname: "devicon-csharp-plain"
    },
    {
      skillName: "MATLAB",
      fontClassname: "devicon-matlab-plain"
    },
    {
      skillName: "nodejs",
      fontClassname: "devicon-nodejs-plain"
    },
    {
      skillName: "python",
      fontClassname: "devicon-python-plain"
    },
    {
      skillName: "aws",
      fontClassname: "devicon-amazonwebservices-original"
    },
    {
      skillName: "android",
      fontClassname: "devicon-android-plain"
    },
    {
      skillName: "docker",
      fontClassname: "devicon-docker-plain"
    },
    {
      skillName: "Git",
      fontClassname: "devicon-git-plain"
    },
    {
      skillName: "Jenkins",
      fontClassname: "devicon-jenkins-plain"
    },
    {
      skillName: "MySQL",
      fontClassname: "devicon-mysql-plain"
    },
    {
      skillName: "OpenCV",
      fontClassname: "devicon-opencv-plain"
    },
    {
      skillName: "Tensorflow",
      fontClassname: "devicon-tensorflow-original"
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
      logo: require("./assets/images/uomLogo.png"),
      subHeader: "PhD in Electrical and Electronic Engineering",
      duration: "July 2019 - March 2023 (anticipated)",
      desc: "Researching distributed machine learning for wireless network security",
      descBullets: [
        "Analying Software-Defined Radio readings",
        "Designing new anomaly detection schemes",
        "Weighing up risks/benefits using Game Theory"
      ]
    },
    {
      schoolName: "The University of Canterbury",
      logo: require("./assets/images/ucLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "January 2015 - December 2018",
      desc: "Completed with First Class Honours and a minor in Communications and Network Engineering",
      descBullets: [
          "Top student in the program",
          "Coursework included: algorithms and data structures, circuit design, operating systems"
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
      Stack: "Testing",
      progressPercentage: "60%"
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
      companylogo: require("./assets/images/mspLogo.png"),
      date: "April 2020 – April 2022",
      desc: "Member of the AI and Robotics Team",
      descBullets: [
        "Worked on an autonomous rover joint-project with Monash Nova Rover",
        "Led the development of modules for 2D mapping, localisation, and visualisation"
      ],
      color: [5, 21, 91]
    },
    {
      role: "Research Intern",
      company: "University of Auckland",
      companylogo: require("./assets/images/uoaLogo.png"),
      date: "Nov 2018 – Feb 2019",
      desc: "Member of the Precision Timed Research Group",
      descBullets: [
        "Wrote a tool to convert Keras neural networks (NNs) to C code",
        "Analyzed worst-case execution time for NNs on an FPGA"
      ],
      color: null
    },
    {
      role: "Intern Software Developer",
      company: "Verizon Connect",
      companylogo: require("./assets/images/vcLogo.png"),
      date: "Nov – Feb 2016 & 2017",
      desc: "Two 3-month internships with the Road Network Routing Team",
      descBullets: [
        "Implemented a tool to estimate the widths of roads from GPS data",
        "Implemented a visualisation tool for routing algorithms (C++, nodejs, mapbox)"
      ],
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
        "Winning project proposal for the SmallSat Idea-to-Space Launch Contest - launching a cube satellite early 2023!",
      image: require("./assets/images/otLogo.png"),
      footerLink: [
        {
          name: "Press Release",
          url: "https://www.prnewswire.com/news-releases/the-smallsat-idea-to-space-launch-contest-presented-by-entrepreneur-peter-wokwicz-and-orbital-transports-after-receiving-an-overwhelming-number-of-entries-has-selected-the-winner-301479809.html"
        }
      ]
    },
    {
      title: "UC Computer Engineering Spokesperson",
      subtitle:
        "Selected for a write-up advertising Computer Engineering to propspective students.",
      image: require("./assets/images/ucLogoBW.png"),
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

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Actively looking for new projects to dive into after my research",
  email_address: "marckatzef@gmail.com",
  open_for_ops: "Yes"
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
  achievementSection,
  contactInfo,
};
