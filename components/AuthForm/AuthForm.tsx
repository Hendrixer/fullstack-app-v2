'use client'

import { register, signin } from '@/lib/api'
import styles from './authform.module.css'
import clsx from 'clsx'
import { useCallback, useState } from 'react'
import Button from '@/ui/Button/Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Glass from '@/ui/Glass/Glass'

const registerContent = {
  linkUrl: '/signin',
  linkText: 'Already have an account?',
  header: 'Create a new Account',
  buttonText: 'Register',
}

const signinContent = {
  linkUrl: '/register',
  linkText: "Don't have an account?",
  header: 'Sign in',
  buttonText: 'Signin',
}

const initial = { email: '', password: '' }

export default function AuthForm({ mode }: { mode: 'register' | 'signin' }) {
  const [formState, setFormState] = useState({ ...initial })
  const [error, setError] = useState('')

  const router = useRouter()
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()

      try {
        if (mode === 'register') {
          await register(formState)
        } else {
          await signin(formState)
        }

        router.replace('/home')
      } catch (e) {
        setError(`Could not ${mode}`)
      } finally {
        setFormState({ ...initial })
      }
    },
    [formState.email, formState.password]
  )

  const content = mode === 'register' ? registerContent : signinContent

  return (
    <Glass>
      <div className={styles.authform}>
        <div className={styles.header}>
          <span>{content.header}</span>
        </div>
        <div className={clsx(styles.body)}>
          <form onSubmit={handleSubmit}>
            <div className={styles['input-box']}>
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <input
                className={styles.input}
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, email: e.target.value }))
                }
              />
            </div>
            <div className={styles['input-box']}>
              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <input
                className={styles.input}
                value={formState.password}
                type="password"
                id="password"
                onChange={(e) =>
                  setFormState((s) => ({ ...s, password: e.target.value }))
                }
              />
            </div>
            <div className={styles.controls}>
              <div>
                <span>
                  <Link href={content.linkUrl}>{content.linkText}</Link>
                </span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <Button disabled={!formState.email || !formState.password}>
                  {content.buttonText}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Glass>
  )
}
