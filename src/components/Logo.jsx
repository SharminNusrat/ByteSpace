import { Link } from 'react-router-dom'

const sources = {
  light: '/assets/icons/bytespace-logo.svg',
  dark: '/assets/icons/bytespace-logo-dark.svg',
}

export default function Logo({ variant = 'light', className = 'h-8' }) {
  return (
    <Link to="/" aria-label="ByteSpace home">
      <img src={sources[variant]} alt="ByteSpace" className={className} />
    </Link>
  )
}
