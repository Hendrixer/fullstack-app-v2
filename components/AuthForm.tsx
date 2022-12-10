import styles from '@/styles/authform.module.css'
import clsx from 'clsx'

export default function AuthForm({ mode }) {
  return (
    <div className={styles.authform}>
      <div className={styles.header}>
        <span>{mode}</span>
      </div>
      <div className={clsx(styles.body)}>
        <form>
          <div className={styles['input-box']}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input className={styles.input} type="email" id="email" />
          </div>
          <div className={styles['input-box']}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input className={styles.input} type="password" id="password" />
          </div>
          <div style={{ textAlign: 'right' }}>
            <button type="submit" className={styles.button}>
              signin in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
