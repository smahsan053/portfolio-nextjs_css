import musicnextjs from '../public/projects/musicnextjs.jpg'
import MyOnlineMeal from '../public/projects/MyOnlineMeal.jpg'
import NoteNexus from '../public/projects/NoteNexus.jpg'
import travelagencylandingpage from '../public/projects/travelagency-landing-page.jpg'

import Heading from './components/Heading'
import Text from './components/Text'
import styles from './page.module.css'
import Project from './Project'

const projects = [
  {
    name: 'Travel Agency Landing Page',
    github: 'Travel-Agency-Landing-Page',
    image: travelagencylandingpage,
    description:
      'This is a landing page designed in Nextjs using tailwind CSS. This website contains pixel perfect cod of Figma designed web.',
    stars: '~600',
  },
  {
    name: 'Music Nextjs',
    github: 'musicnextjs',
    image: musicnextjs,
    description:
      'Musicnextjs is a modern music school website built using Next.js, styled with Tailwind CSS, and enhanced with Aceternity UI components. It features dynamic interactions with Framer Motion for a smooth user experience. The website is designed to showcase courses, contact information, and offer a visually appealing, responsive interface.',
    stars: '~20',
  },
  {
    name: 'NoteNexus',
    github: 'NoteNexus',
    image: NoteNexus,
    description:
      'NoteNexus is a full-stack application designed to manage and organize notes efficiently. This project showcases the use of React for the frontend and Node.js with Express and MongoDB for the backend. :)',
    withBorder: true,
    stars: '3',
  },
  {
    name: 'MyOnlineMeal',
    github: 'MyOnlineMeal',
    image: MyOnlineMeal,
    description: 'An online food restaurant website built using HTML & CSS',
    withBorder: true,
    stars: '3',
  },
]

export default function Home() {
  return (
    <>
      <section>
        <Heading title="A front-end developer in Pakistan who likes interfaces 💅">
          Results-driven Industrial & Manufacturing Engineer with 3 years of experience in
          production engineering. Successfully completed an inventory management project and led the
          installation of a new rewinding line. Eager to transition into a Frontend Developer.
          Skilled in HTML, CSS, JavaScript, TypeScript and React. Committed to continuous learning,
          staying abreast of industry trends, and evolving as a software engineer to meet the
          dynamic demands of the technology sector.
        </Heading>
      </section>
      <section className={styles.projectsSection}>
        <Text variant="section">Projects</Text>
        <div className={styles.projects}>
          {projects.map(project => (
            <Project {...project} key={`project_${project.github}`} />
          ))}
        </div>
      </section>
    </>
  )
}
