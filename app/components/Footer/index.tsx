import ArrowLink from '../ArrowLink'
import Icon, { IconProps } from '../Icon'
import Text from '../Text'

import styles from './index.module.css'

type Social = {
  name: IconProps['name']
  url: string
}

const socials: Social[] = [
  {
    name: 'github',
    url: 'https://github.com/smahsan053',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/',
  },
  { name: 'dribbble', url: '' },
  { name: 'twitch', url: '' },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/smahsanali/' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Text variant="section">Follow me</Text>
      <ArrowLink href="/about" isNextLink className={styles.aboutLink}>
        Learn more about me
      </ArrowLink>
      <ul className={styles.socials}>
        {socials.map(({ name, url }) => (
          <li key={`footer_social_${name}`}>
            <a href={url} target="_blank" rel="noopener noreferrer" className={styles.social}>
              <Icon name={name} className={styles.socialIcon} />
              <span className={styles.socialName}>{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
