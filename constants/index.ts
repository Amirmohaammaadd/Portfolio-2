import type { StaticImageData } from "next/image";
import project1 from "@/assets/projects/1.png";
import project2 from "@/assets/projects/2.png";
import project6 from "@/assets/projects/6.png";
import foodro from "@/assets/projects/foodro.png";
import snappStore from "@/assets/projects/snapp-store.png";

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export interface ProjectItem {
  title: string;
  image: StaticImageData;
  description: string;
  technologies: string[];
}

export interface ContactInfo {
  address: string;
  phoneNo: string;
  email: string;
}

export const HERO_CONTENT: string =
  "As a passionate and innovative Front-end Developer, I craft seamless, fine performance user experiences using cutting-edge technologies like JS, React.js, Next.js, and Typescript. My ability to transform complex requirements into intuitive, visually stunning web applications sets me apart. I’m driven by a relentless pursuit of excellence and a commitment to delivering clean, maintainable code. With a deep understanding of both design and functionality, I ensure every project I touch is not only user-friendly but also a work of art.";

export const ABOUT_TEXT: string =
  "I am a dedicated and versatile Front-end developer with a passion for creating efficient and user-friendly web applications. With several years of professional experience, I have worked with a variety of technologies, including React, Next.js, typescript. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.";

export const EXPERIENCES: ExperienceItem[] = [
  {
    year: "May 2026 - Present",
    role: "Frontend Engineer",
    company: "SnappStore",
    description:
      "Developing and maintaining a multi-tenant SaaS platform that lets restaurants manage daily operations through subscription-based management panels, including a vendor-facing app where each restaurant is served through its own dedicated subdomain with isolated branding. Built configurable modules for order, customer, delivery, inventory, and staff management, plus two internal Admin Channel dashboards for operational teams to manage restaurants, subscriptions, and platform configurations. Optimized performance through lazy loading, code splitting, and memoization, and collaborated with backend engineers on RESTful APIs, authentication, and role-based access control.",
    technologies: ["Next.js", "React", "TypeScript", "Mantine UI", "Ant Design"],
  },
  {
    year: "April 2025 - May 2026",
    role: "Frontend Engineer",
    company: "SnappFood",
    description:
      "Developed and maintained payment and wallet flows for a large-scale food ordering platform, including Wallet and Cashback features and integrations with Snapp Pay, Bank Saman IPG, and YeCard Wallet. Architected an OCR-powered invoice parsing feature that automatically extracts invoice amounts from receipt images, integrated Balad Maps for location-based restaurant discovery, and built out Progressive Web App capabilities with a mobile-first approach. Optimized rendering of large vendor datasets with React Virtuoso and introduced Domain-Driven Design concepts to improve maintainability and long-term scalability.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Virtuoso"],
  },
  {
    year: "2025 July - 2025 February",
    role: "Front-end Developer",
    company: "Setigh Fara Ofoq",
    description:
      "A project-based company focused on delivering fleet management solutionsfor public transportation systems, leveraging real-time data processing technologies to enhance operational efficiency and monitoring capabilities",
    technologies: ["Javascript", "React.js", "Next.js"],
  },
  {
    year: "2025 February - 2023 November ",
    role: "Front-end Developer",
    company: "VOSOUQ GOSTAR",
    description:
      "The VOSOUQ GOSTAR is a reputable firm specializing in providing comprehensive tax consulting and advisory services. The company offers a range of services, including tax planning, compliance, audits, and dispute resolution. With a team of skilled tax professionals, it helps businesses navigate the complex tax regulations, ensuring they remain compliant with national tax laws while optimizing their financial strategies. I also developed an admin panel for managing complaints, tickets, appointments, and viewing various reports. This system streamlines workflows, enhances user experience, and allows efficient tracking and resolution of issues. It offers a comprehensive interface for monitoring and managing requests, improving overall administrative productivity.",
    technologies: ["Javascript", "React.js", "Next.js"],
  },
  {
    year: "2023 July - 2023 February",
    role: "Frontend Developer",
    company: "KEYKAVOOS",
    description:
      "As a Front-End Developer at Keykavoos , I contributed to the development and execution of various client projects. My responsibilities included coding, and implementing user interfaces, ensuring they were responsive, user-friendly, and aligned with client specifications",
    technologies: ["Javascript", "React.js", "Next.js"],
  },
  {
    year: "2021 - 2022",
    role: "Front-end Developer",
    company: "freelance",
    description:
      "Experienced front-end developer specializing in building dynamic, responsive web applications using React and Next.js. Proficient in UI libraries like Ant Design (AntD), Material-UI (MUI), and Tailwind CSS to craft visually appealing and user-friendly interfaces. Skilled in managing state and custom functionalities, including advanced table interactions, file uploads, and persistent cart systems. Adept at enhancing user experiences with animations, navigation logic, and tailored solutions such as synchronized UI components. Strong focus on delivering efficient, scalable, and accessible solutions to meet diverse client needs.",
    technologies: ["Javascript", "React.js", "Next.js"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "FoodRo",
    image: foodro,
    description:
      "Designed the sign-up and login screen for FoodRo, a food delivery platform, featuring an illustrated hero banner, a discount-driven account prompt, and a phone-number entry flow built for quick, low-friction onboarding on mobile.",
    technologies: ["React", "Next.js", "tailwind"],
  },
  {
    title: "Snapp Store",
    image: snappStore,
    description:
      "Built the authentication and onboarding experience for Snapp Store, a point-of-sale and inventory management platform for retail businesses. Implemented phone-based OTP login, a customer loyalty club showcase, and a clean two-column responsive layout with Ant Design components.",
    technologies: ["Antd", "tailwind", "React", "Next.js"],
  },
  {
    title: "myevtsp.com",
    image: project1,
    description:
      "Developed a user-friendly tax payer website using React and Next.js, enabling seamless form submissions and real-time tax calculations. Designed with Ant Design for a professional UI and implemented secure data handling for user privacy.",
    technologies: ["Antd", "tailwind", "React", "Next.js"],
  },
  {
    title: "mpevtsp.com",
    image: project2,
    description:
      "Created the main panel for a taxpayer website using React and Ant Design, featuring a dashboard for tracking tax filings, payment history, and notifications. Integrated interactive charts and filters for data visualization and streamlined user access to essential tools and resources.",
    technologies: ["Antd", "tailwind", "React", "Next.js"],
  },
  {
    title: "Sepahtan",
    image: project6,
    description:
      "A project-based company focused on delivering fleet management solutions for public transportation systems, leveraging real-time data processing technologies to enhanc operational efficiency and monitoring capabilities",
    technologies: ["Antd", "tailwind", "React", "Next.js"],
  },

];

export const CONTACT: ContactInfo = {
  address: "Iran, Tehran, Tehran",
  phoneNo: "+98 903 969 80 70",
  email: "amirmuhaammaadd@gmail.com",
};
