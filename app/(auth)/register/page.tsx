import AuthForm from '@/components/AuthForm/AuthForm'
import styles from './register.module.css'

export default function Register() {
  return (
    <div className={styles.register}>
      <AuthForm mode="register" />
    </div>
  )
}
