import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from './Container'
import Logo from './Logo'
import { CartIcon, MenuIcon } from './Icons'
import { navLinks } from '../data/home'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-[38] py-8 xl:h-[120px] xl:py-0">
      <Container className="flex items-center justify-between xl:static xl:max-w-none xl:px-0">
        <Logo className="h-9 xl:absolute xl:left-[122px] xl:top-[36px] xl:h-[35px] xl:w-[171px]" />

        <nav className="hidden items-center gap-6 lg:flex xl:absolute xl:left-[615px] xl:top-[47px]">
          {navLinks.map(({ label, href }) =>
            href.startsWith('#') ? (
              <a key={label} href={href} className="text-body-m text-white/90 transition-colors hover:text-white">
                {label}
              </a>
            ) : (
              <NavLink
                key={label}
                to={href}
                className={({ isActive }) =>
                  `text-label-m transition-colors hover:text-white ${isActive ? 'text-white' : 'text-white/90'}`
                }
              >
                {label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-6 lg:flex xl:absolute xl:left-[1146px] xl:top-[48px]">
          <Link to="/login" className="text-body-m text-white/90 transition-colors hover:text-white">
            Sign In
          </Link>
          <Link to="/register" className="text-body-m text-white/90 transition-colors hover:text-white">
            Join Us
          </Link>
          <button type="button" aria-label="Cart" className="text-white">
            <CartIcon className="h-6 w-6" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          className="text-white lg:hidden"
        >
          <MenuIcon />
        </button>
      </Container>

      {open && (
        <Container className="mt-6 lg:hidden">
          <div className="flex flex-col gap-4 rounded-2xl bg-white p-6">
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} className="text-label-m text-neutral-950">
                {label}
              </a>
            ))}
            <Link to="/login" className="text-label-m text-neutral-950">
              Sign In
            </Link>
            <Link to="/register" className="text-label-m text-neutral-950">
              Join Us
            </Link>
          </div>
        </Container>
      )}
    </header>
  )
}
