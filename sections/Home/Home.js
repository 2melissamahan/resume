import styles from './home.module.scss'
export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.leftContent}><img className={styles.selfPortrait} src="/images/self-portrait.png"></img></div>
      <div className={styles.rightContent}><h1>Hi, I'm Melissa.</h1>
      <p>I'm a frontend software engineer. I care deeply about user experience and product design, 
        and I'm seeking to bridge the gap between elegance and efficiency in enterprise and consumer web applications. </p>
        <p>Let's build teams that take a user-first approach to engineering.</p>
      </div>
    </div>
  )
}