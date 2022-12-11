import AuthForm from '@/components/AuthForm/AuthForm'
import styles from './signin.module.css'

export default function Register() {
  return (
    <div className={styles.signin}>
      <AuthForm mode="signin" />
    </div>
  )
}
