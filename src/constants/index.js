import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  xindesign,
  blog,
  threejsShoe,
  threejsCar,
  threejsServerRoom,
  threejsPhone,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "关于我",
  },
  {
    id: "work",
    title: "工作经历",
  },
  {
    id: "contact",
    title: "联系我",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "前端开发工程师",
    company_name: "河北汉佳电子科技有限公司",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2023-05 - 至今",
    points: [
      "项目1",
      "项目2",
      "项目2",
      "项目4",
      "项目5",
      "项目6",
    ],
  },
  {
    title: "前端开发工程师",
    company_name: "北京学普思信息科技有限公司",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "2021-03 - 2023-05",
    points: [
      "项目1",
      "项目2",
      "项目2",
      "项目4",
      "项目5",
      "项目6",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "这小子真帅.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "这小子真拽.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "我要嫁给他!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Xin Design",
    description:
      "Vue3 TypeScript PostCSS构建的组件库. 参考了ElementPlus与AntdesignVue",
    tags: [
      {
        name: "Vue3",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "PostCSS",
        color: "pink-text-gradient",
      },
    ],
    image: xindesign,
    source_code_link: "https://github.com/zxxj/xin-design/",
  },
  {
    name: "个人博客",
    description:
      "利用闲暇时间写的个人博客站点,方便记录学习心得与一些项目的实现流程",
    tags: [
      {
        name: "vitepress",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/zxxj/blog/",

  },
  {
    name: "比亚迪",
    description:
      "使用Three.js实现的比亚迪秦,实现了切换车身颜色,轮廓颜色,车门打开与关闭与点击显示热点信息.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: threejsCar,
    source_code_link: "https://github.com/",
  },
  {
    name: "华为手机",
    description:
      "使用Three.js实现的比华为手机,实现了切换手机颜色与点击显示热点信息.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: threejsPhone,
    source_code_link: "https://github.com/",
  },
  {
    name: "鞋子",
    description:
      "使用Three.js实现的鞋子,实现了切换鞋子整体颜色 鞋带颜色 鞋底颜色等功能.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: threejsShoe,
    source_code_link: "https://github.com/",
  },
  {
    name: "可视化服务器机房",
    description:
      "使用Three.js实现的3D可视化机房,实现了热点标注等功能.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: threejsServerRoom,
    source_code_link: "https://github.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
