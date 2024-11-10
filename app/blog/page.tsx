import Heading from '../components/Heading'

import styles from './page.module.css'

export default function Blog() {
  return (
    <section>
      <Heading title="Last content" />
      <div className={styles.posts}>
        This website is still a work in progress. Stay tuned to see blog content coming here very
        soon!
      </div>
    </section>
  )
}
