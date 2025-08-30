const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Building Projects" },
  { value: 11, suffix: "+", label: "Technologies Mastered" },
  { value: 21, suffix: "+", label: "Completed Projects" },
  { value: 15, suffix: "+", label: "Certification Completed" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/aws.png",
  },
  {
    imgPath: "/images/logos/js.png",
  },
  {
    imgPath: "/images/logos/html.png",
  },
  {
    imgPath: "/images/logos/tailwind.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/rect.png",
  },
  {
    imgPath: "/images/logos/noded.png",
  },
  {
    imgPath: "/images/logos/exp.png",
  },
  {
    imgPath: "/images/logos/git.png",
  },
  {
    imgPath: "/images/logos/mongo.png",
  },
  {
    imgPath: "/images/logos/chatgpt.png",
  },
];

const abilities = [
  {
    imgPath: "/images/ctq.png",
    title: "Commitment to Quality",
    desc: "I ensure clean, maintainable code and polished designs for every project.",
  },
  {
    imgPath: "/images/ps.png",
    title: "Problem-Solving Mindset",
    desc: "Turning challenges into opportunities with structured solutions.",
  },
  {
    imgPath: "/images/cl.png",
    title: "Continuous Learning",
    desc: "I prioritize ongoing education and skill development to stay ahead in the industry.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
   {
    review: "My journey at SRM University has given me a solid base in computer science, sharpening my problem-solving and programming skills, while also exposing me to modern technologies like blockchain and cloud computing.",
    imgPath: "/images/uni.png",
    logoPath: "/images/uni.png",
    title: "B.Tech in Computer Science (Blockchain Specialization)",
    date: "2022 – 2026 (Ongoing)",
    responsibilities: [
      "Strong foundation in Core CS subjects (OS, DBMS, CN, OOPs).",
      "CGPA: 8.7+ till now.",
      "Participated in research & hackathons (2nd place for DePIN research project).",
    ],
  },
  {
    review: "The IBM Full-Stack JavaScript Developer certification gave me strong hands-on skills in both frontend and backend development. Working on real-world labs and assignments built my confidence in creating scalable applications from scratch.",
    imgPath: "/images/ibm.png",
    logoPath: "/images/ibm.png",
    title: "Full-Stack JavaScript Developer Trainee",
    date: "April 2025 – Aug 2025",
    responsibilities: [
      "Built and deployed frontend apps using React, HTML, CSS, JavaScript.",
      "Developed backend APIs with Node.js, Express, and MongoDB.",
      "Gained exposure to Docker, Kubernetes, and serverless architectures.",
      "Applied learning through hands-on labs and graded assignments."
    ],
  },
  {
    review: "Exploring AWS opened up the world of cloud computing for me. From serverless to networking, the certification helped me understand how real-world applications are scaled and secured in the cloud.",
    imgPath: "/images/aaws.png",
    logoPath: "/images/aaws.png",
    title: "AWS Cloud Practitioner Certification",
    date: "July 2025",
    responsibilities: [
      "Learned core AWS services: EC2, S3, Lambda, IAM.",
      "Understood cloud architecture, pricing, and security best practices.",
      "Strengthened foundation for cloud-native application deployment.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "Resume",
    imgPath: "/images/resume.png",
    url: "https://drive.google.com/drive/folders/15QkpCzMXcHecAxPXITSzIb7CCH-x7i8G?usp=sharing",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/ShashWATT23"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/shashwatt23"
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};