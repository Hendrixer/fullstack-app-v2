'use client'
import { register, signin } from '@/lib/api'
import clsx from 'clsx'
import { useCallback, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Card from './Card'

const registerContent = {
  linkUrl: '/signin',
  linkText: 'Already have an account?',
  header: 'Create a new Account',
  subheader: 'Just a few things to get started',
  buttonText: 'Register',
}

const signinContent = {
  linkUrl: '/register',
  linkText: "Don't have an account?",
  header: 'Welcome Back',
  subheader: 'Enter your credentials to access your account',
  buttonText: 'Sign In',
}

const initial = { email: '', password: '', firstName: '', lastName: '' }

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
    [
      formState.email,
      formState.password,
      formState.firstName,
      formState.lastName,
    ]
  )

  const content = mode === 'register' ? registerContent : signinContent

  return (
    <Card>
      <div className="w-full">
        <div className="text-center">
          <h2 className="text-3xl mb-2">{content.header}</h2>
          <p className="tex-lg text-black/25">{content.subheader}</p>
        </div>
        <form onSubmit={handleSubmit} className="py-10 w-full">
          {mode === 'register' && (
            <div className="flex mb-8 justify-between">
              <div>
                <div className="text-lg mb-4 ml-2 text-black/50">
                  First Name
                </div>
                <input
                  placeholder="First Name"
                  value={formState.email}
                  className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
                />
              </div>
              <div>
                <div className="text-lg mb-4 ml-2 text-black/50">Last Name</div>
                <input
                  placeholder="Last Name"
                  value={formState.email}
                  className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
                />
              </div>
            </div>
          )}
          <div className="mb-8">
            <div className="text-lg mb-4 ml-2 text-black/50">Email</div>
            <input
              type="email"
              placeholder="Email"
              value={formState.email}
              className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
              onChange={(e) =>
                setFormState((s) => ({ ...s, email: e.target.value }))
              }
            />
          </div>
          <div className="mb-8">
            <div className="text-lg mb-4 ml-2 text-black/50">Password</div>
            <input
              value={formState.password}
              type="password"
              placeholder="Password"
              className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
              onChange={(e) =>
                setFormState((s) => ({ ...s, password: e.target.value }))
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span>
                <Link
                  href={content.linkUrl}
                  className="text-blue-600 font-bold"
                >
                  {content.linkText}
                </Link>
              </span>
            </div>
            <div>
              <button
                type="submit"
                className="px-6 py-2 bg-violet-500 text-lg rounded-3xl text-white font-bold hover:scale-110 active:scale-100 transition duration-200 ease-in-out"
              >
                {content.buttonText}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Card>
  )
}
