import AuthForm from '@/components/AuthForm'
import styles from '@/styles/authlayout.module.css'
export default function AuthLayout({ children }) {
  return (
    <div className={styles.layout}>
      <AuthForm mode="signup" />
    </div>
  )
}
