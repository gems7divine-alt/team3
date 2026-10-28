import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Lock, Mail } from 'lucide-react'
import Button from '../../components/Button'
import AccountField from '../../components/account/AccountField'
import AccountShell from '../../components/account/AccountShell'

/**
 * Sign-in page - the form is inline here rather than split into a sibling
 * file, so the login folder holds one file that can be read top to bottom.
 *
 * Fields are controlled and held in `credentials`, so what was typed is
 * available to this component instead of living only in the DOM. There is
 * still no backend: submit stops after the browser's native validation and
 * deliberately does not send or store what was captured.
 *
 * Registration lives at /register in its own page rather than behind a toggle
 * here, so each page has one job and each can be linked to directly.
 */
export default function LoginPage() {
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  function update(field) {
    return (event) => {
      setCredentials((current) => ({ ...current, [field]: event.target.value }))
    }
  }

  function onSubmit(event) {
    event.preventDefault()
  }

  return (
    <AccountShell title="Welcome back." lead="Sign in to pick up where you left off.">
      <form onSubmit={onSubmit} className="mt-7 flex flex-col gap-4">
        <AccountField
          id="login-email"
          label="Email address"
          icon={Mail}
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="your@email.com"
          value={credentials.email}
          onChange={update('email')}
        />

        <AccountField
          id="login-password"
          label="Password"
          icon={Lock}
          type="password"
          name="password"
          required
          minLength={8}
          revealable
          autoComplete="current-password"
          placeholder="Password"
          value={credentials.password}
          onChange={update('password')}
          hint="At least 8 characters."
          hintId="login-password-hint"
        />

        <Button type="submit" withArrow className="mt-1 w-full py-3.5 text-[0.8125rem]">
          Sign in
        </Button>

        <a
          href="#reset-password"
          className="self-center font-sans text-[0.8125rem] text-forest/65 underline-offset-4 transition-colors duration-300 hover:text-forest hover:underline"
        >
          Forgot your password?
        </a>

        <p className="mt-2 text-center font-sans text-[0.8125rem] text-forest/60">
          No account yet?{' '}
          <Link
            to="/register"
            className="font-medium text-forest underline-offset-4 transition-colors duration-300 hover:underline"
          >
            Create one
          </Link>
        </p>
      </form>

      <p className="mt-8 text-center font-sans text-[0.75rem] leading-[1.6] text-forest/45">
        Accounts are not connected yet, so signing in will not do anything.
      </p>
    </AccountShell>
  )
}