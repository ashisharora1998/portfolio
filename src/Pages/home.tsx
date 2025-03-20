
import { ShinyButton } from '@/components/magicui/shiny-button';
import TerminalBar from '../MyComponents/Header';
import { Separator } from '@/components/ui/separator';
import {motion} from 'framer-motion';
import { DownloadCloudIcon, MailIcon } from 'lucide-react';
import { Dock } from '@/MyComponents/Dock';


const skills = ["HTML","CSS" ,'JavaScript', 'TypeScript','React', 'Node.js', 'Express', 'NestJS', 'Material UI','Redux','ShadCN','Vite','TailwindCSS', 'MongoDB',"Postgres","Sql",'Google Cloud','Docker','Jenkins','Git','Github','CI/CD','Linux','AWS','Azure','GCP','Firebase','Cloudflare',"Netlify"];


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <TerminalBar page={"ashisharora"} />
      <div className='my-3'>
      <div className='text-left text-gray-900 text-xl mt-5 inter-regular'>
      <span className='text-blue-500 text-5xl lilita-one-regular'>Hi there! 👋<br/> <br/></span>
      
       I’m a Full Stack Developer with over 4 years of hands-on experience in ReactJS, NestJS, Node.js, and AWS.
       <br/> <br/>I’m passionate about building scalable web applications, fine-tuning performance, and collaborating with dynamic teams to create high-quality software solutions.<br/> <br/>I love tackling complex problems, learning new technologies, and sharing ideas. Let’s connect and build something amazing together!
      </div>
      </div>

<div className='flex flex-row items-left justify-start my-5 space-x-8'>
<ShinyButton ><span className='flex flex-row items-center justify-center gap-2 text-gray-950'> Check out my CV <DownloadCloudIcon className='w-4 h-4'/></span></ShinyButton>
<ShinyButton ><span className='flex flex-row items-center justify-center gap-2 text-gray-950'>Contact Me<MailIcon className='w-4 h-4'/></span></ShinyButton>
</div>
<div className='flex flex-col items-left justify-start my-5 text-gray-900 w-full'>
  <div className="space-y-1 text-left">
    <h2 className="text-lg font-bold leading-none">Skills</h2>
  </div>

  <Separator className="my-4 text-gray-900" />
  
  <div className="flex flex-wrap gap-4 text-sm">
    {skills.map((skill, index) => (
      <div key={index} className="flex items-center space-x-2">
        <motion.div
     initial={{ background: "linear-gradient(90deg, #000, #000)", WebkitBackgroundClip: "text", color: "transparent" }}
      whileHover={{
        background: "linear-gradient(90deg, #ff00ff, #00ffff)",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}>{skill}</motion.div>
        {index !== skills.length - 1 && <Separator orientation="vertical" className='text-gray-900' />}
      </div>
    ))}
  </div>
</div>
<div>
  <Dock/>
</div>

      {/* <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Avatar className="w-24 h-24 mb-4">
        <AvatarImage src={profile} alt="@shadcn" />
        <AvatarFallback>Ashish Arora</AvatarFallback></Avatar>
        <h1 className="text-4xl font-bold">Ashish Arora</h1>
        <p className="text-gray-400">Software Engineer | React | Node.js | AI</p>
      </motion.div>

      <motion.div className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-800 rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="mt-2 text-gray-400">{project.description}</p>
                <Button className="mt-4" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <motion.div className="w-full max-w-4xl mt-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="bg-gray-800 px-4 py-2 rounded-full text-sm">{skill}</span>
          ))}
        </div>
      </motion.div>

      <motion.div className="w-full max-w-4xl mt-12">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-4">
          {experience.map((exp, index) => (
            <Card key={index} className="bg-gray-800 rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{exp.role} at {exp.company}</h3>
                <p className="text-gray-400 text-sm">{exp.duration}</p>
                <p className="mt-2 text-gray-400">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <motion.div className="w-full max-w-4xl mt-12">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <Card key={index} className="bg-gray-800 rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-400">{edu.institution}</p>
                <p className="text-gray-400 text-sm">{edu.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <motion.div className="mt-12 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-gray-400 mt-2">Email: ashish.arora@example.com</p>
        <p className="text-gray-400 mt-2">LinkedIn: linkedin.com/in/ashisharora</p>
      </motion.div> */}
    </div>
  );
};

export default Home;
