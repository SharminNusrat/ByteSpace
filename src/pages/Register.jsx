import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import TextField from '../components/TextField'
import Button from '../components/Button'

export default function Register() {
  return (
    <AuthLayout
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <p className="w-fit text-body-l text-primary-800">Create an Account</p>
      <h2 className="text-h-m text-neutral-950">
        Welcome to
        <br />
        ByteSpace
      </h2>

      <form className="mt-10 space-y-6" onSubmit={(event) => event.preventDefault()}>
        <TextField id="name" label="Full Name" placeholder="Jamie Davis" labelWidth={64} />
        <TextField id="email" label="Email" type="email" placeholder="designer@example.com" labelWidth={35} />
        <TextField id="password" label="Password" type="password" placeholder="********" labelWidth={61} />

        <div className="flex justify-end">
          <Button type="submit" size="sm">
            Continue
          </Button>
        </div>
      </form>

      <p className="mt-[122px] text-center text-body-m text-neutral-400">
        Already have an account?{' '}
        <Link to="/login" className="inline-block text-primary-800 hover:underline">
          Login
        </Link>
      </p>
    </AuthLayout>
  )
}
