import ArrowLink from '../components/ArrowLink'
import Heading from '../components/Heading'
import Text from '../components/Text'

import Experience from './Experience'
import styles from './page.module.css'

const experiences = [
  {
    company: 'Aisha Steel Mills',
    link: '',
    startDate: 'Feb-2021',
    subJobs: [
      {
        description: [
          'Conferring with Production Planning and Control Department to implement highly productive operating procedures.',
          'Working with foreign delegations during commissioning of different projects at the plant especially during implementation of the new Rewinding line at ASML. ',
          'In the lead team of integrating SAP systems in ASML. Also, a power user since then.',
        ],
        stack: [],
        startDate: 'Feb-2021',
        title: 'Production Engineer',
      },
    ],
  },
  {
    company: 'Atlas Honda Limited',
    link: '',
    subJobs: [
      {
        description: [
          ' It was a one-month internship program, In which I successfully completed a project focused on designing a system for inventory management of spares in the die department.',
        ],
        title: 'Production Internee',
        stack: [''],
      },
    ],
    endDate: 'July-2019',
    startDate: 'June-2019',
  },
  {
    company: 'OIL WORLD PVT. LTD',
    endDate: 'Feb-2019',
    link: '',
    startDate: 'Feb-2019',
    subJobs: [
      {
        title: 'Internee',
        startDate: 'Feb-2019',
        endDate: 'Feb-2019',
        description: [
          'In this one-month internship, I was assigned a task to study different sections of the process department and to present the comprehensive summary report for improvement.',
        ],
        stack: [''],
      },
    ],
  },
]

export default function About() {
  return (
    <>
      <section>
        <Heading
          title={
            <>
              Hello, i’m Ahsan <span className={styles.emoji}>:)</span>
              <br />
              An Industrial Engineer with passion of learning AI.
            </>
          }
        >
          based in Pakistan and currently at{' '}
          <a href="Aisha Steel Mill" target="_blank" rel="noopener noreferrer">
            Aisha Steel Mill{' '}
          </a>
          working as production Engineer. Currently, I am expanding my expertise into artificial
          intelligence to fulfill my passion for innovation and to bring transformative ideas to
          life. I bring a deep passion for crafting engaging web interfaces and enhancing user
          experiences with ReactJS and Typescript.
        </Heading>
        {/* <div className={styles.meImage}>
          <Image fill placeholder="blur" src={meImage} alt="Ahsan" />
        </div> */}
      </section>
      <ArrowLink className={styles.resume} href="Ahsan-Ali-Resume.pdf" variant="sm">
        Check my resume
      </ArrowLink>
      <section className={styles.experiences}>
        {/* <div className={styles.logos}>
          <Icon name="javascript" />
          <Icon name="react" />
          <Icon name="typescript" />
          <Icon name="css" />
          <Icon name="figma" />
        </div> */}
        <Text variant="section">Experiences</Text>
        <div className={styles.jobs}>
          {experiences.map(experience => (
            <Experience {...experience} key={`experience_${experience.company}`} />
          ))}
        </div>
      </section>
    </>
  )
}
