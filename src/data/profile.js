import greenvoltImage from "../assets/greenviolt.png";
import hayaatImage from "../assets/hayaat.jpg";
import keystoneImage from "../assets/keystone.jpg";
import ministryImage from "../assets/minstry.jpg";
import profileImage from "../assets/profilw3.jpeg";
import sundusImage from "../assets/sundus.jpg";

export const profile = {
  displayName: "Eng Maajid",
  fullName: "Abdimajid Haji Adan Nor",
  title: "Software & Hardware Engineer | ICT Professional",
  shortTitle: "Full-Stack Developer & ICT Professional",
  email: "maajid23456@gmail.com",
  phone: "+252 61 9829928",
  whatsapp: "https://wa.me/252619829928",
  location: "Farjano, Kismaayo, Somalia",
  nationality: "Somali",
  photo: profileImage,
  bio:
    "Computer Science graduate and IT professional with hands-on experience in software development, hardware engineering, ICT infrastructure, digital transformation, database administration, website deployment, CCTV surveillance, biometric attendance systems, media production, digital communications, and end-user technical support.",
  highlights: [
    "Delivered more than twelve professional websites for government institutions, private companies, and local NGOs.",
    "Built interactive dashboards, digital systems, and full-stack platforms for planning, reporting, and operations.",
    "Supported computers, laptops, printers, projectors, presentation screens, cameras, CCTV systems, and office ICT equipment.",
  ],
  socialLinks: [
    {
      label: "TikTok",
      icon: "fa-brands fa-tiktok",
      url: "https://www.tiktok.com/@hilaacconsultant",
    },
    {
      label: "LinkedIn",
      icon: "fa-brands fa-linkedin-in",
      url: "https://www.linkedin.com/in/abdi-maajid-hajji/",
    },
    {
      label: "GitHub",
      icon: "fa-brands fa-github",
      url: "https://github.com/maajid34",
    },
  ],
};

export const competencies = [
  "IT operations and technical support",
  "Full-stack web development",
  "Hardware diagnostics and maintenance",
  "CCTV installation and configuration",
  "Biometric attendance systems",
  "Database and API management",
  "Domain, hosting, and deployment",
  "Interactive dashboards and data visualization",
  "Network and office ICT support",
  "System analysis and documentation",
];

export const technicalSkills = [
  "Development: HTML, CSS, JavaScript, React.js, Node.js, Express.js",
  "Databases: MongoDB, Microsoft Access",
  "Infrastructure: Windows configuration, desktops, laptops, printers, projectors, presentation screens, CCTV, fingerprint systems, and office ICT peripherals",
  "Digital Services: Web hosting, domain configuration, server deployment, dashboards, and website management",
  "Productivity: Microsoft Word, Excel, PowerPoint, and Access",
];

export const languages = ["Somali", "English", "Kiswahili"];

export const education = [
  {
    title: "Bachelor's Degree in Computer Science / Information Technology",
    institution: "Sommaville University, Mogadishu",
    period: "15 Feb 2022 - 15 Feb 2026",
  },
  {
    title: "MERN-Stack Development Certificate",
    institution: "Rise Academy",
    period: "12 Apr 2025 - 12 Aug 2025",
  },
  {
    title: "Computer Repair and Maintenance Certificate",
    institution: "Mogadishu Laptop Repair Academy, Mogadishu",
    period: "2 Nov 2024 - 2 Feb 2025",
  },
  {
    title: "CCTV Camera Certificate",
    institution: "Hajji Technology, Mogadishu",
    period: "May 2024 - Jun 2024",
  },
  {
    title: "Professional Graphic Design",
    institution: "Sodma Academy",
    period: "30 Dec 2023 - 10 Mar 2024",
  },
  {
    title: "Full-Stack Development Certificate",
    institution: "Kaafiya Technology Center",
    period: "May 2023 - Oct 2023",
  },
  {
    title: "Secondary School Certificate",
    institution: "Hoyga Midnimo Secondary School, Mandera",
    period: "2018 - 2022",
  },
];

export const experience = [
  {
    role: "IT Specialist",
    company: "Ministry of Energy & Water Resources, Jubaland State",
    period: "15 Apr 2026 - 5 Aug 2026",
    points: [
      "Managed the Ministry's ICT environment across software development, hardware support, website administration, hosting, and digital-system implementation.",
      "Designed, developed, and maintained the official website with frontend, backend, database integration, domain configuration, hosting deployment, and ongoing technical administration.",
      "Developed the Energy Mapping Assessment dashboard and Water Resources Assessment dashboard for visual maps, charts, indicators, and decision-support reporting.",
      "Installed and configured CCTV surveillance with eight security cameras and two monitoring screens, including testing and operational setup.",
      "Installed and configured the biometric fingerprint attendance system, enrolled staff users, and supported digital attendance tracking.",
      "Provided hardware and software ICT support for desktops, laptops, printers, projectors, presentation screens, CCTV equipment, peripherals, operating systems, and office applications.",
    ],
    links: [
      { label: "Website", url: "https://moewr-jubalandstate.so/" },
      { label: "Energy Dashboard", url: "https://moewr-jss.shinyapps.io/Moewr_jss/" },
      { label: "Water Dashboard", url: "https://fy4z9s-mayow-cabdiqadir.shinyapps.io/jls_ws/" },
    ],
  },
  {
    role: "Head of Communications",
    company: "Office of the First Deputy President - Jubaland State of Somalia",
    period: "5 Feb 2026 - 10 Apr 2026",
    points: [
      "Led and supported communications and media activities for official meetings, events, field activities, and public engagements.",
      "Provided photography, video coverage, meeting footage, short videos, and visual materials for official communication and broadcast use.",
      "Produced digital designs, graphics, presentation materials, and communication assets for institutional visibility and media dissemination.",
      "Supported recording, editing, camera setup, projectors, presentation screens, and audio-visual equipment for official sessions.",
      "Provided ICT support for computers, printers, cameras, CCTV equipment, projectors, presentation screens, software installation, and day-to-day user support.",
    ],
  },
  {
    role: "ICT Assistant",
    company: "Horn of Africa Aid and Rehabilitation Action Network (HAARAN)",
    period: "Sep 2025 - Dec 2025",
    points: [
      "Provided organization-wide hardware and software ICT assistance, including setup, maintenance, and troubleshooting.",
      "Supported printing, connectivity, device configuration, user setup, peripheral integration, and ICT equipment preparation for meetings and daily programme operations.",
      "Conducted routine configuration, testing, and preventive maintenance to improve reliability, availability, and staff productivity.",
      "Developed and supported the organization's website to strengthen programme communication and access to information.",
    ],
    links: [{ label: "Website", url: "https://www.haarankensom.org/" }],
  },
];

export const projects = [
  {
    title: "Ministry of Planning, Investment and International Cooperation - Jubaland State",
    role: "Independent Digital Systems Consultant / Lead Developer",
    description:
      "Leading the frontend website, JAIMS, and Organization Registration and Registry System with workflows for projects, registrations, documents, reporting, and public services.",
    status: "Under active development and local testing",
  },
  {
    title: "Ministry of Fishery & Blue Economy - Jubaland State",
    role: "Independent Web Development Consultant",
    description:
      "Designed and developed the ministry website to improve institutional visibility, public communication, and access to sector information.",
    url: "https://mofisheriesbe-frontend.vercel.app/",
  },
  {
    title: "GreenVolt Energy Solutions Co.",
    description:
      "Developed a renewable-energy corporate website presenting services, projects, and company information.",
    url: "https://greenvolt-energy.com/",
    image: greenvoltImage,
    alt: "GreenVolt Energy Solutions website",
  },
  {
    title: "Advance Consultant for IT Solutions",
    description:
      "Developed the ICT-services website and provided project-based hardware and software office solutions.",
    url: "https://advance-consultant.site/",
  },
  {
    title: "Keystone Consulting Firm",
    description:
      "Developed a consulting website to strengthen digital presence, service presentation, and client communication.",
    url: "https://keystone-consultant.com/",
    image: keystoneImage,
    alt: "Keystone Consulting Firm website",
  },
  {
    title: "Aqoonmaal Construction and Transportation Company",
    description:
      "Developed a corporate website presenting construction, transportation, and company-profile information.",
    url: "https://aqoonmaal-company.vercel.app/",
  },
  {
    title: "Sundus Limited Company",
    description:
      "Developed a corporate website to improve online visibility and provide structured access to company information.",
    url: "https://sundus.ltd/",
    image: sundusImage,
    alt: "Sundus Limited Company website",
  },
  {
    title: "Hayaat Logistics Company",
    description:
      "Developed a logistics-services website supporting service presentation, stakeholder communication, and business visibility.",
    url: "https://hayaat-logistic.vercel.app/",
    image: hayaatImage,
    alt: "Hayaat Logistics Company website",
  },
  {
    title: "Somali Women and Youth Peace Organization",
    description:
      "Developed an organizational website presenting peacebuilding, women and youth engagement activities, and programme information.",
    url: "https://somaliwomenyouthpeace.org/",
  },
  {
    title: "Hope Springs Network Somalia",
    description:
      "Developed a professional NGO website for humanitarian and community-development programmes.",
    url: "https://hopes-springs.org/",
  },
  {
    title: "Community Action for Climate Change (CACC)",
    description:
      "Designed and developed an organizational website for climate action, environmental programmes, and community engagement.",
    url: "https://caccsom.org/",
  },
  {
    title: "Aayareeb Governance & Research Consultants",
    description:
      "Developed a consulting website presenting governance, research, advisory, and capacity-development services.",
    url: "https://aayareeb.com/",
  },
  {
    title: "Ministry of Energy & Water Resources of Jubaland",
    description:
      "Designed, developed, and maintained the ministry website and digital reporting dashboards.",
    url: "https://moewr-jubalandstate.so/",
    image: ministryImage,
    alt: "Ministry of Energy and Water Resources website",
  },
];

export const systems = [
  {
    title: "Jubaland Project Portal System",
    description:
      "Developing a full-stack platform for project registration, monitoring, organization management, approvals, reporting, and role-based access.",
    status: "Nearing completion",
  },
  {
    title: "Kismayo Port Management System",
    description:
      "Developing an integrated system for vessel operations, cargo handling, gate passes, access control, staff and visitor management, and operational reporting.",
    status: "Nearing completion",
  },
];

export const references = [
  {
    name: "Ahmed Osman Siyah",
    role: "Director General",
    organization: "Ministry of Energy and Water Resources of Jubaland",
    email: "siyah114@gmail.com",
    phone: "+252 61 9950037",
  },
  {
    name: "Mohamed Ibrahim Ismail",
    role: "SUN - Project Coordinator",
    organization: "Office of the First Deputy President of Jubaland State - Somalia",
    email: "duqoow112@gmail.com",
    phone: "+252 61 6874099",
  },
  {
    name: "Abdinoor Mataan",
    role: "Executive Director",
    organization: "Horn of Africa Aid and Rehabilitation Action Network (HAARAN)",
    email: "abdinuurmataan@gmail.com",
    phone: "+252 61 4582639",
  },
];
