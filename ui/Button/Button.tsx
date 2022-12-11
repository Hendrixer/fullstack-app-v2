import styles from './button.module.css'
import { FC } from 'react'

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'error'
}

const Button: FC<Button> = ({ children, variant, ...rest }) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  )
}

export default Button
