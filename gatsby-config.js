module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://brandonhs.com`,
    // Your Name
    name: 'Brandon Stevens',
    // Main Site Title
    title: `Brandon Stevens | Home`,
    // Description that goes under your name in main bio
    description: `brandonhs`,
    // Optional: Twitter account handle
    author: `@brandonhstevens`,
    // Optional: Github account URL
    github: `https://github.com/brandonhs`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/brandonhstevens/`,
    // Content of the About Me section
    about: `Hi, my name is Brandon and I am a high school engineering student. I have over 5 years of experience in programming, electronics, and mechanical design. I spend most of my free time writing code that I am passionate about. I mainly focus on low level programming and hardware level engineering but I have also done game development and computer graphics in the past.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'BrandOS',
        description:
          'Operating system kernel written in C',
        link: 'https://github.com/brandonhs/BrandOS',
      },
      {
        name: 'Astraios',
        description:
          'Opengl rendering engine written in java',
        link: 'https://github.com/brandonhs/Astraios-Engine',
      },
      {
        name: 'Chip8',
        description:
          'C based Chip8 interpreter written in 2 days',
        link: 'https://github.com/brandonhs/Chip8',
      },
      {
        name: 'MJPEG-Streamer ',
        description:
          'MJPEG-over-websocket streaming and receiving library',
        link: 'https://github.com/brandonhs/MJPEG-Streamer',
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'DeepWater Exploration',
        description: 'Programming Lead, Electrical Engineer, September 2021 - Present',
        link: 'https://exploredeepwater.com/',
      },
      {
        name: 'Advent Industries',
        description: 'Programming & Electrical Intern, March 2021 - June 2021',
        link: 'https://sites.google.com/student.lbschools.net/adventindustries/about-the-company',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Javascript, C/C++, rust, react, python, flask, ROS, assembly',
      },
      {
        name: 'Other',
        description:
          'API design, CAD',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
