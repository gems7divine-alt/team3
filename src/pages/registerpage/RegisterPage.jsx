import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Lock, Mail, UserRound } from 'lucide-react'
import Button from '../../components/Button'
import AccountField from '../../components/account/AccountField'
import AccountShell from '../../components/account/AccountShell'

/**
 * Register page - username, email and password, in that order.
 *
 * The form is inline here, mirroring login/. Fields are controlled and held in
 * `details`, so what was typed is available to this component instead of
 * living only in the DOM. There is still no backend: submit stops after the
 * browser's native validation and deliberately does not send or store what was
 * captured.
 *
 * There is no confirm-password field, so nothing here compares two entries -
 * that check is the form's only remaining gap before it could be considered
 * real.
 */
export default function RegisterPage() {
  const [details, setDetails] = useState({ username: '', email: '', password: '' })

  function update(field) {
    return (event) => {
      setDetails((current) => ({ ...current, [field]: event.target.value }))
    }
  }

  function onSubmit(event) {
    event.preventDefault()
  }

  return (
    <AccountShell
      title="Begin your reset."
      lead="Create an account to keep your orders, courses and session history in one place."
    >
      <form onSubmit={onSubmit} className="mt-7 flex flex-col gap-4">
        <AccountField
          id="register-username"
          label="Username"
          icon={UserRound}
          name="username"
          required
          autoComplete="username"
          placeholder="Choose a username"
          value={details.username}
          onChange={update('username')}
        />

        <AccountField
          id="register-email"
          label="Email address"
          icon={Mail}
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="your@email.com"
          value={details.email}
          onChange={update('email')}
        />

        <AccountField
          id="register-password"
          label="Password"
          icon={Lock}
          type="password"
          name="password"
          required
          minLength={8}
          revealable
          autoComplete="new-password"
          placeholder="Password"
          value={details.password}
          onChange={update('password')}
          hint="At least 8 characters."
          hintId="register-password-hint"
        />

        <Button type="submit" withArrow className="mt-1 w-full py-3.5 text-[0.8125rem]">
          Create account
        </Button>

        <p className="mt-2 text-center font-sans text-[0.8125rem] text-forest/60">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-medium text-forest underline-offset-4 transition-colors duration-300 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </form>

      <p className="mt-8 text-center font-sans text-[0.75rem] leading-[1.6] text-forest/45">
        Accounts are not connected yet, so registering will not create anything.
      </p>
    </AccountShell>
  )
}