/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ibrahim Salah's Portfolio",
  description:
    "Artificial Intelligence & Computer Engineering Student at ENSAM Casablanca, Hassan II University of Casablanca | Python Enthusiast.",
  og: {
    title: "Ibrahim Salah's Portfolio",
    type: "website",
    url: "https://salahibra.github.io",
  },
};

//Home Page
const greeting = {
  title: "Salah Ibrahim",
  logo_name: "IbrahimSalah",
  nickname: "",
  subTitle:
    "Artificial Intelligence & Computer Engineering Student at ENSAM Casablanca, Hassan II University of Casablanca.",
  resumeLink:
    "https://drive.google.com/file/d/1EQmU-lFUiXjUrF0OOKvjjzHvWR9tlxPC/view?usp=sharing",
  portfolio_repository: "https://github.com/salahibra/salahibra.github.io",
  githubProfile: "https://github.com/salahibra",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/salahibra",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "mailto:ibrahim.salah.officiel@gmail.com",
    fontAwesomeIcon: "fas fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/salahibra/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@IBRAHIMSALAH-n9b",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "X-Twitter",
    link: "https://x.com/salahibrhm",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://web.facebook.com/profile.php?id=100069437842759",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ibrahimxsalah",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Software Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Enterprise Software Development",
        "⚡ Web Development",
        "⚡ Mobile Development",
        "⚡ Artificial Intelligence development",
        "⚡ Machine Learning",
        "⚡ Deep Learning techniques",
        "⚡ Virtual Reality and Augmented Reality",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "spring boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            color: "#EE4C2C",
          },
        },

        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            color: "#5C3EE8",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            color: "#FF6F00",
          },
        },

        {
          skillName: "Android Development",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Unity",
          fontAwesomeClassname: "simple-icons:unity",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Business Intelligence",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#6DB33F",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },

        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Oracle",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#F80000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/Salahibra/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/#",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/salahibra",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/#",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ibrahimsalahzefri75/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/salahibra",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "ENSAM Casablanca",
      subtitle: "State Engineer",
      logo_path: "ensam.svg",
      alt_name: "ENSAM CASA",
      duration: "2023 - present",
      descriptions: ["⚡ Artificial Intelligence & Computer Engineering."],
      website_link: "http://www.ensam-casa.ma",
    },
    {
      title: "Classes Préparatoires Integrées - ENSAM Casablanca",
      subtitle: "integrated preparatory classes",
      logo_path: "ensam.svg",
      alt_name: "Ensam Casa",
      duration: "2021 - 2023",
      descriptions: ["⚡ integrated preparatory classes "],
      website_link: "http://www.ensam-casa.ma",
    },
    {
      title:
        "Ministry of National Education (Morocco) - Abdelkader Nakhcha High School",
      subtitle: "Baccalaureate Certificate",
      logo_path: "mne.svg",
      alt_name: "MNE",
      duration: "2020 - 2021",
      descriptions: ["⚡ physical sciences."],
      website_link: "https://www.men.gov.ma/en/Pages/Accueil.aspx",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Oracle Certified Professional: Java SE 17 Developer",
      subtitle: "Oracle",
      logo_path: "OCPJSE17.jpg",
      certificate_link:
        "https://drive.google.com/file/d/16f09FvLAO3qKDUV5gRtosDFCFwlQ6OYj/view?usp=sharing",
      alt_name: "Oracle",
      color_code: "#4285F499",
    },
    {
      title: "NDG LINUX ESSENTIALS",
      subtitle: "Cisco Networking Academy",
      logo_path: "Cisco_Networking_Academy.svg.png",
      certificate_link:
        "https://drive.google.com/file/d/1wGC8J01wazYJ4_rE-YqhK9KPEKJ8iW4n/view?usp=sharing",
      alt_name: "Cisco Networking Academy",
      color_code: "#4285F499",
    },
    {
      title: "CLA: Programming Essentials in C",
      subtitle: "Cisco Networking Academy",
      logo_path: "Cisco_Networking_Academy.svg.png",
      certificate_link:
        "https://drive.google.com/file/d/1AwbGSFdR_V74NySfYE9Jt5LIrx4kAb7N/view?usp=sharing",
      alt_name: "Cisco Networking Academy",
      color_code: "#4285F499",
    },
    {
      title: "Baccalaureate Certificate",
      subtitle: "Ministry of National Education (Morocco)",
      logo_path: "mne.svg",
      certificate_link: "",
      alt_name: "MNE",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteerships",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Membre",
          company: "GDG on Campus ENSAM Casablanca ",
          company_url:
            "https://www.linkedin.com/company/gdg-on-campus-ensam-casablanca/posts/?feedView=all",
          logo_path: "gdg.jpg",
          duration: "September 2024 - Present",
          location: "Casablanca, Morocco",
          description:
            "Active participation in Google Developer Groups (GDG) community initiatives: conferences, workshops.",
          color: "#0879bf",
        },
        {
          title: "Membre",
          company: "Art et Métiers Mechatronics",
          company_url:
            "https://www.linkedin.com/in/arts-et-m%C3%A9tiers-mechatronics-4825561ba/",
          logo_path: "mechatronics.jpg",
          duration: "September 2022 - juin 2023",
          location: "Casablanca, Morocco",
          description:
            "Involvement in student projects related to mechatronics (design, prototyping, robotics.)",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Intern , Data Analysis and Visualization,",
          company:
            " Presidency of Hassan II University , Department of Information Systems",
          company_url: "https://www.univh2c.ma/",
          logo_path: "UH2.png",
          duration: "Juillet 1, 2024 - Juillet 31, 2024",
          location: "Casablanca, Morocco",
          description:
            "Developed and deployed a Streamlit-based bibliometric analysis tool using Python, Pandas, and Seaborn for data processing and visualization.",
          color: "#000000",
        },
      ],
    },
    /* {
      title: "Volunteerships",
      experiences: [
        {
          title: "",
          company: "",
          company_url: "",
          logo_path: "",
          duration: "",
          location: "",
          description:
            "",
          color: "#4285F4",
        },
      ],
    }, */
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Web Projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "1",
      name: "Propagation du Covid-19 : Approche mathématique",
      createdAt: "2022-07-22",
      description:
        "Modéliser l’épidémie de COVID-19 en se basant sur le modèle SIR.\nCalcul et interprétation des paramètres de COVID-19.\nRéalisation d'un Portail de surveillance et de sensibilisation COVID-19 dans un centre CPGE. ",
      url:
        "https://drive.google.com/drive/folders/1VoUEgbHp_sHnLz5MPnlAmonNS1oU0dn9",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "salahibra.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "ENSAM Casablanca, 150 Bd du Nil, Casablanca 20670, Prefecture of Casablanca, Casablanca-Settat, Morocco.",
    locality: "Casablanca",
    country: "Morocco",
    region: "Africa",
    postalCode: "20670",
    streetAddress: "150 Bd du Nil",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/iDYpii4j3mai1zWk9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
