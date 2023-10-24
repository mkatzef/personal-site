/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 900 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Marc Katzef",
  title: "Hi, I'm Marc",
  subTitle: "I'm an electrical engineer with a passion for learning new tools and bringing all sorts of technologies together",
  resumeLink:
    "https://drive.google.com/file/d/115nNca-89V6cTslu52entyYnUjTHvjCF/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/mkatzef",
  linkedin: "https://www.linkedin.com/in/marc-katzef/",
  gmail: "marckatzef@gmail.com",
  //instagram: "https://www.instagram.com/mkatzef",
  scholar: "https://scholar.google.com/citations?user=hZqLb8UAAAAJ&hl=en",
  thingiverse: "https://www.thingiverse.com/mkatzef",
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "My studies and work experience have given me hands-on experience with modern tech including:",
  skills: [
    ["Data analysis", "machine learning, optimisation"],
    ["Hardware design", "circuits, CAD"],
    ["Software design", "apps, algorithms, testing"],
    ["My passion", "connecting the above!"]
  ],

  softwareSkills: [
    {
      skillName: "Arduino",
      fontClassname: "devicon-arduino-plain"
    },
    {
      skillName: "C++",
      fontClassname: "devicon-cplusplus-plain"
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
      skillName: "PHP",
      fontClassname: "devicon-php-plain"
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
      skillName: "docker",
      fontClassname: "devicon-docker-plain"
    },
    {
      skillName: "Git",
      fontClassname: "devicon-git-plain"
    },
    {
      skillName: "React",
      fontClassname: "devicon-react-plain"
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

// Research Section
const researchInfo = {
  display: true, // Set false to hide this section, defaults to true
  publications: [
    {
      title: "Robust Wireless Network Anomaly Detection with Collaborative Adversarial Autoencoders",
      authors: "M. Katzef, A. C. Cullen, T. Alpcan, C. Leckie",
      venue: "ICC 2023-IEEE International Conference on Communications, 1-6",
      doi: "",
      year: "2023"
    },
    {
      title: "Wireless Network Simulation to Create Machine Learning Benchmark Data",
      authors: "M. Katzef, A. C. Cullen, T. Alpcan, C. Leckie, J. Kopacz",
      venue: "GLOBECOM 2022-IEEE Global Communications Conference",
      doi: "https://doi.org/10.1109/GLOBECOM48099.2022.10000685",
      year: "2022"
    },
    {
      title: "Generative Adversarial Networks for Anomaly Detection on Decentralised Data",
      authors: "M. Katzef, A. C. Cullen, T. Alpcan, C. Leckie",
      venue: "Annual Reviews in Control",
      doi: "https://doi.org/10.1016/j.arcontrol.2021.10.002",
      year: "2021"
    },
    {
      title: "Privacy-Preserving Collaborative SDR Networks for Anomaly Detection",
      authors: "M. Katzef, A. C. Cullen, T. Alpcan, C. Leckie, J. Kopacz",
      venue: "ICC 2021-IEEE International Conference on Communications, 1-6",
      doi: "https://doi.org/10.1109/ICC42927.2021.9500807",
      year: "2021"
    },
    {
      title: "Distributed Generative Adversarial Networks for Anomaly Detection",
      authors: "M. Katzef, A. C. Cullen, T. Alpcan, C. Leckie, J. Kopacz",
      venue: "International Conference on Decision and Game Theory for Security, 3-22",
      doi: "https://doi.org/10.1007/978-3-030-64793-3_1",
      year: "2020"
    },
    {
      title: "Designing Neural Networks for Real-Time Systems",
      authors: "H. Pearce, X. Yang, P. S. Roop, M. Katzef, T. B. Strøm",
      venue: "IEEE Embedded Systems Letters 13 (3), 94-97",
      doi: "https://doi.org/10.1109/LES.2020.3009910",
      year: "2020"
    }
  ]
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The University of Melbourne",
      logo: require("./assets/images/uomLogo.png"),
      subHeader: "PhD in Electrical and Electronic Engineering",
      duration: "Jul 2019 - Apr 2023",
      desc: "Researching distributed machine learning for wireless network security",
      descBullets: [
        "Analysing Software-Defined Radio readings",
        "Designing new anomaly detection schemes",
        "Implementing new methods for distributed machine learning"
      ]
    },
    {
      schoolName: "The University of Canterbury",
      logo: require("./assets/images/ucLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "Jan 2015 - Dec 2018",
      desc: "Completed with First Class Honours and a minor in Communications and Network Engineering",
      descBullets: [
          "Top student in the program (GPA 8.66/9.0)",
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
      role: "Systems Developer",
      company: "University of New South Wales",
      companylogo: require("./assets/images/unswLogo.png"),
      date: "Sep 2023 – Present",
      desc: "Improving the HRI robotics research facility",
      descBullets: [
        "TODO",
        "TODO"
      ],
      color: [251,230,77]
    },
    {
      role: "Software and Electrical Engineer",
      company: "Industrial Sciences Group",
      companylogo: require("./assets/images/isgLogo.png"),
      date: "Mar 2023 – Sep 2023",
      desc: "Fixed-term projects on space analytics",
      descBullets: [
        "TODO",
        "TODO"
      ],
      color: [196,196,196]
    },
    {
      role: "Volunteer Software Developer",
      company: "Melbourne Space Program",
      companylogo: require("./assets/images/mspLogo.png"),
      date: "Apr 2020 – Feb 2022",
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
      date: "Nov 2017 – Feb 2018",
      desc: "A second internship with the Road Network Routing Team",
      descBullets: [
        "Implemented a visualisation tool for routing algorithms",
        "Written in C++, Node.js, and Mapbox GL JS"
      ],
      color: [179, 59, 51]
    },
    {
      role: "Intern Software Developer",
      company: "Verizon Connect",
      companylogo: require("./assets/images/vcLogo.png"),
      date: "Nov 2016 – Feb 2017",
      desc: "An internship with the Road Network Routing Team",
      descBullets: [
        "Implemented a tool to estimate the widths of roads from GPS data",
        "Written in python, C#, and CUDA C"
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
  title: "Achievements and Awards 🏆",
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
    "Feel free to reach out about anything tech :)",
  email_address: "marckatzef@gmail.com",
};


export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  researchInfo,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  contactInfo,
};
