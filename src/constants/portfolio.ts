// Portfolio constants - All portfolio data in one place

export interface Author {
  _id: string;
  name: "string";
  initials: string;
  avatar?: {
    asset?: {
      url?: string;
    };
  };
  description?: any[];
  summary?: any[];
  location?: string;
  skills?: string[];
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
    email?: string;
  };
}

export interface WorkExperience {
  _id: string;
  company: string;
  title: string;
  logo?: {
    asset?: {
      url?: string;
    };
  };
  location?: string;
  startDate: string;
  endDate?: string;
  description?: any[];
  url?: string;
}

export interface Education {
  _id: string;
  school: string;
  degree: string;
  logo?: {
    asset?: {
      url?: string;
    };
  };
  startDate: string;
  endDate: string;
  url?: string;
}

export interface Project {
  _id: string;
  title: string;
  description: any[];
  startDate?: string;
  endDate?: string;
  technologies?: string[];
  image?: {
    asset?: {
      url?: string;
    };
  };
  video?: string;
  links?: {
    title: string | null;
    url: string | null;
    type: string | null;
  }[];
}

// Portfolio data
export const AUTHOR: Author = {
  _id: "author-1",
  name: "Prashansa Shandilya",
  initials: "PS",
  avatar: {
    asset: {
      url: "/WhatsApp Image 2025-10-03 at 6.58.29 PM.jpeg",
    },
  },
  description: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "B.Tech AIML Student",
        },
      ],
    },
  ],
  summary: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "I am a Computer Science and Engineering student with a strong interest in software development and sensor technology. I enjoy building functional applications and exploring how hardware and code work together to solve problems."
        },
      ],
    },
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "Active volunteer in multiple community programs. I enjoy contributing to technical events and collaborating with others to build impactful projects."




        },
      ],
    },
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "What truly excites me is this mix of tech + creativity + community. I love exploring new ideas, experimenting on projects, and pushing myself to build things that make an actual difference.",
        },
      ],
    },
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "Still learning. Still improving. Still building. Always.",
        },
      ],
    },
  ],
  location: "Naini, Prayagraj",
  skills: [
    "Team Leadership",
    "Responsive Web Design",
    "AI/ML",
    "Community Management",
    "Web Technologies",
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/prashansa-shandilya-7a77b236a",
    email: "prashansashandilya428@gmail.com",
    github: "https://github.com/prashansaucer",
  }
};

export const WORK_EXPERIENCE:
  WorkExperience[] = [
    {
      _id: "work-1",
      company: "FOSS",
      title: "Volunteer",
      location: "Prayagraj, Uttar Pradesh",
      startDate: "Dec 2025",
      endDate: "Present",
      description: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Working as a volunteer.",
            },
          ],
        },
      ],
    },
    {
      _id: "work-2",
      company: "E-Cell, UCER Prayagraj",
      title: "PR and Outreach Head",
      location: "Prayagraj, Uttar Pradesh",
      startDate: "July 2025",
      endDate: "Present",
      description: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Build the cell's brand and secure resources.",
            },
          ],
        },
      ],
    },
  ];

export const EDUCATION: Education[] = [
  {
    _id: "edu-1",
    school: "United Group of Institutions",
    degree: "B.Tech, CSE (AIML)",
    startDate: "Sep 2024",
    endDate: "Present",
  },
  {
    _id: "edu-2",
    school: "Girls High school and College",
    degree: "Intermediate, PCM",
    startDate: "April 2022", // Approximate start based on end
    endDate: "April 2023",
  },
  {
    _id: "edu-3",
    school: "Girls High school and College",
    degree: "Highschool",
    startDate: "April 2019", // Approximate
    endDate: "April 2020",
  },
];

export const PROJECTS: Project[] = [];
