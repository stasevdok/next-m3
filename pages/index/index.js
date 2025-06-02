import styles from './Home.module.scss'

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Street Art Media</h1>
      <p className={styles.description}>
        Добро пожаловать! Здесь будут собраны интересные объекты уличного искусства.
      </p>
    </main>
  )
}
