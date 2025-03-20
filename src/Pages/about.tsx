import TerminalBar from "@/MyComponents/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profile from "../profile.jpg";
import { cn } from "@/lib/utils";
import List from "@/MyComponents/List";
import { AnimatedList } from "@/components/magicui/animated-list";



let experince = [
  {
    name: "Elite Back Office Solutions | Nagpur",
    description: "Web Developer Intern",
    time: "July 2020 - May 2021",
    icon: "💬",
    color: "#FF3D71",
  },
  
  {
    name: "Elite Back Office Solutions | Nagpur",
    description: "Associate Web Developer",
    time: "June 2021 - Dec 2021",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Mindbower Inc. | Pune",
    description: "Software Engineer",
    time: "Jan 2022 - Present",
    icon: "💸",
    color: "#00C9A7",
  },
];
 
let education = [{
  
    name: "Shivaji Science College",
    description: "Bachelors in Computer Application",
    time: "2016 - 2019",
    icon: "🎓",
    color: "#FFB800",
  },
  {
  name: "Ramdeobaba college of engineering management",
  description: "Masters in Computer Application",
  time: "2019 - 2021",
  icon: "🎓",
  color: "#00C9A7",
},
]

const About = () => {
    return (
        <div className="min-h-screen w-full text-gray-900 flex flex-col items-center p-8 text-left">
      <TerminalBar page={"about"} />
      <div className="w-4xl mx-auto p-6 space-y-4">
      <div className="flex items-center justify-between space-x-4">
        <div className="flex flex-col space-y-2">
      <h2 className="text-xl font-bold">Ashish Arora</h2>
      <p className="text-sm text-gray-500">Software Engineer from <span className="text-gray-900">Nagpur, MH India</span></p>
      </div>
        <Avatar className="w-24 h-24">
          <AvatarImage src={profile} alt="Your Name" />
          <AvatarFallback>AA</AvatarFallback>
        </Avatar>
     
      </div>
      <div className="my-10"
>      <p>
        I’m a <strong>Full Stack Developer</strong> with over <strong>4 years</strong> of hands-on experience in <strong>ReactJS</strong>, <strong>NestJS</strong>, <strong>Node.js</strong>, and <strong>AWS</strong>.
      </p>
      <p>
        Passionate about crafting <strong>scalable web applications</strong> and fine-tuning <strong>performance</strong> to deliver seamless user experiences. I love collaborating with dynamic teams, exchanging ideas, and pushing the boundaries of what technology can achieve.
      </p>
      <p>
        Beyond coding, I’m deeply curious about <strong>emerging technologies</strong> and constantly seek ways to integrate <strong>AI-driven solutions</strong> into modern web apps. Recently, I’ve been exploring <strong>cloud-native architectures</strong> and <strong>serverless frameworks</strong> to build faster, more resilient systems.
      </p>
      <h2 className="text-xl font-semibold">Expertise</h2>
      <ul className="list-disc list-inside space-y-2">
      <li>JavaScript, TypeScript</li>
        <li>ReactJS, Next.js</li>
        <li>NestJS, Node.js</li>
        <li>AWS, Serverless Frameworks</li>
        <li>AI Integration in Web Apps</li>
        <li>Cloud-Native Architectures</li>
      </ul>
      <p>
        Whether it’s solving a complex problem, contributing to open-source projects, or brainstorming the next big thing, I’m always up for the challenge.
      </p>
      <p>
        Let’s connect and create something extraordinary together!
      </p>
    </div>
</div>
<div
      className={cn(
        "relative flex h-[330px] w-full flex-col overflow-hidden p-2 mb-4",
   
      )}
    >
      <div className="flex flex-col px-2">
        <p className="text-xl font-semibold mb-2 ml-2">Experience</p>
        {/* <p className="text-sm text-gray-500">
          Here are some of the places I've worked at and my journey so far.
        </p> */}
      </div>
      <AnimatedList>
        {experince.map((item, idx) => (
          <List {...item} key={idx} />
        ))}
      </AnimatedList>
 
      {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div> */}
    </div>
    <div
      className={cn(
        "relative flex h-[330px] w-full flex-col overflow-hidden p-2 mb-4",
   
      )}
    >
      <div className="flex flex-col px-2">
        <p className="text-xl font-semibold mb-2 ml-2">Education</p>
        {/* <p className="text-sm text-gray-500">
          Here are some of the places I've worked at and my journey so far.
        </p> */}
      </div>
      <AnimatedList>
        {education.map((item, idx) => (
          <List {...item} key={idx} />
        ))}
      </AnimatedList>
 
      {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div> */}
    </div>
      </div>
    )
}

export default About;