export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Transforming Ideas into Digital Masterpieces",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Thriving in Collaborative and Dynamic Environments",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Innovative and Passionate Developer",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Crafting Seamless Experiences with Modern Tech Stacks",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's Create Something Extraordinary Together",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Article Summarizer",
    des: "Developed an AI-powered app for generating summaries of articles.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/redux.png"],
    link: "https://article-summarizer-virid.vercel.app/",
  },
  {
    id: 2,
    title: "Anime Explorer",
    des: "Built with Next.js, this infinite scroll website leveraging Server Actions.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://next-js-server-action-sepia.vercel.app/",
  },
  {
    id: 3,
    title: "Nike Landing Page",
    des: "Designed a responsive, visually appealing landing page for Nike.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://nike-landing-page-cyan.vercel.app/",
  },
  {
    id: 4,
    title: "Traffic Density Analyser",
    des: "Designed a system to analyze real-time traffic density from live video feeds.",
    img: "/p4.jpg",
    iconLists: ["/opencv.png", "/python.png"],
    link: "https://github.com/Abadar169/Traffic-Density-Analyzer",
  },
  {
    id: 5,
    title: "Puzzle It",
    des: "Created an engaging puzzle game with intuitive UI and challenging levels.",
    img: "/puzzle.png",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg", "/redux.png"],
    link: "https://github.com/Abadar169/puzzleIT",
  },
  {
    id: 6,
    title: "DigitalOcean Spaces Plugin",
    des: "Created a plugin for osTicket that integrates with DigitalOcean Spaces.",
    img: "/p6.png",
    iconLists: ["/php.png", "/laravel.png"],
    link: "",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Associate Software Developer at Refyne",
    desc: "Built a serverless CRM with advanced integrations, including Firebase, ClickUp, and Gmail API. Automated workflows, implemented data migration scripts, and added advanced analytics dashboards.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "SDE Intern at Xeo Information Systems",
    desc: "Developed a complete mobile app using FlutterFlow and a backend using Laravel. Integrated DigitalOcean Spaces with osTicket through a custom plugin and implemented secure authentication systems.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Martian Intern at Persistent Systems",
    desc: "Participated in the Martian Program, where I gained hands-on experience with operating systems, data structures, and computer networks.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Frontend Intern at Insight Gro",
    desc: "Developed a blogging website using JavaScript, React, and MongoDB. Implemented secure authentication features to enhance user experience and data integrity.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Abadar169", // Replace with your GitHub profile URL
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  //   link: "https://twitter.com/AbhishekBadr", // Replace with your Twitter profile URL
  // },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/abhishekbadar/", // Replace with your LinkedIn profile URL
  },
];
