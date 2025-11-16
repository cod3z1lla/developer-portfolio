import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
              id: 1,
    name: 'ICT Trading AI',
    description: "Built full-stack ML system automating Smart Money Concepts (ICT) detection on BTC 15m/1h data. Engineered features (FVGs, Liquidity Sweeps, Order Blocks), applied K-Means clustering for market phases. Backtested 1,949 trades over 19 months with 67% combined accuracy (75-83% monthly). Mobile dashboard in React Native for real-time alerts.",
    tools: ['Python', 'scikit-learn', 'K-Means', 'Pandas', 'Binance API', 'Discord API', 'React Native'],
    role: 'Full Stack ML Engineer',
    code: '',
    demo: '',
    image: crefin,
  },
      {
        id: 2,
        name: 'Pathfinder',
        description: "I developed a web-based Dijkstra Algorithm Visualizer using JavaScript, HTML, and CSS. This tool allows users to interactively place obstacles on a grid and visualize the shortest path in real-time. The project simplifies complex algorithmic concepts, making them accessible and engaging for learners and enthusiasts.",
        tools: ['HTML', 'CSS', 'JavaScript', 'Dijkstra Algorithm'],
        role: 'Frontend Developer'2,
        code: 'https://github.com/m-shazaib/pathfinder',
        demo: 'https://m-shazaib.github.io/pathfinder/table.html',
        image: crefin,
    },
    {
        id: 3,
        name: 'Poll App',
        description: "This app uses the tech stack React Native and Supabase. It is a polling app and uses anonymous logins to vote towards a particular topic or issue. A user can create a poll via logging in only. Only one anonymous login is created and you can't be creating new anonymous accounts each time to vote.",
        tools: ["React Native", "Supabase", "Expo", "TypeScript", "JavaScript"],
        role: 'Frontend Developer',
        code: 'https://github.com/m-shazaib/polls   ',
        demo: 'https://expo.dev/accounts/m-shazaib/projects/polls/builds/ac9f6b88-34c7-4e1c-824f-11d91b80f158',
        image: travel,
    },
    {
        id: 4,
        name: 'Metro Ticketing System',
        description: 'Metro Ticketing System: I developed a comprehensive metro ticketing system using the MERN stack (MongoDB, Express.js, React, Node.js). This system facilitates the efficient management of metro tickets, including functionalities for ticket purchase, validation, and user management. The project showcases my full-stack development skills and my ability to build scalable, user-friendly web applications.',
        tools: ['React', 'Bootstrap', 'Express', 'JavaScript', 'MongoDB', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 5,
        name: 'Leetcoders',
        description: "I am developing a mobile app that allows users to follow each other's journey on Leetcode. Built using React Native and Expo, this app leverages Supabase for backend services and integrates the Leetcode API to track and display users' progress and achievements. The app aims to foster a community of learners and competitive programmers, providing a platform to share progress, motivate each other, and improve coding skills collaboratively.",
        tools: ["React Native", "Expo", "Supabase", "TypeScript", "JavaScript"],
        code: 'https://github.com/m-shazaib/Leetcoders',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


