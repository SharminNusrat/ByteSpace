import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import TextField from '../components/TextField'
import Button from '../components/Button'

function SocialButton({ label, icon }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-[72px] w-[72px] items-center justify-center rounded-3xl border border-neutral-200 transition-colors hover:bg-neutral-50"
    >
      <img src={icon} alt="" className="h-10 w-10" />
    </button>
  )
}

export default function Login() {
  return (
    <AuthLayout
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <p className="w-fit text-body-l text-primary-800">Sign In</p>
      <h2 className="text-h-m text-neutral-950">Welcome Back</h2>

      <form className="mt-10 space-y-6" onSubmit={(event) => event.preventDefault()}>
        <TextField id="email" label="Email" type="email" placeholder="designer@example.com" labelWidth={35} />
        <TextField id="password" label="Password" type="password" placeholder="********" labelWidth={61} />

        <div className="flex justify-end">
          <Button type="submit" size="sm">
            Sign In
          </Button>
        </div>
      </form>

      <div className="mt-[73px] flex w-[439px] items-center gap-[11px]">
        <span className="h-px w-[200px] shrink-0 bg-neutral-200" />
        <span className="text-body-l text-[#888888]">or</span>
        <span className="h-px w-[200px] shrink-0 bg-neutral-200" />
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <SocialButton label="Continue with Facebook" icon="/assets/icons/facebook.svg" />
        <SocialButton label="Continue with Google" icon="/assets/icons/google.svg" />
      </div>

      <p className="mt-[73px] text-center text-body-m text-neutral-400">
        New user?{' '}
        <Link to="/register" className="inline-block text-primary-800 hover:underline">
          Create an account
        </Link>
      </p>
    </AuthLayout>
  )
}
