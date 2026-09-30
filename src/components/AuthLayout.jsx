import { Link } from 'react-router-dom'
import CourseCard from './CourseCard'
import AvatarStack from './AvatarStack'
import Ornaments from './Ornaments'
import { StarIcon } from './Icons'
import { courses, heroAvatars } from '../data/home'
import { authShapes } from '../data/shapes'
import { AUTH } from '../data/layers'

/**
 * Shared shell for Login and Register.
 */
export default function AuthLayout({ title, description, children }) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-primary-800 px-6 py-10 lg:px-0 lg:py-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 2px, transparent 2px), linear-gradient(to bottom, #fff 2px, transparent 2px)',
          backgroundSize: '120px 120px',
        }}
      />

      <Ornaments shapes={authShapes} />

      <div className="relative mx-auto w-full max-w-[1440px] lg:h-[1024px]">
        <Link
          to="/"
          aria-label="ByteSpace home"
          className="inline-block lg:absolute lg:left-[122px] lg:top-[35px]"
        >
          <img src="/assets/icons/logo-mark.svg" alt="ByteSpace" className="h-9 w-auto" />
        </Link>

        <div className="mt-10 lg:absolute lg:left-[122px] lg:top-[120px] lg:mt-0 lg:w-[475px]">
          <h1 style={{ zIndex: AUTH.title }} className="w-fit text-h-xs text-neutral-50">{title}</h1>
          <p style={{ zIndex: AUTH.body }} className="mt-4 text-body-l text-neutral-50">{description}</p>
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
          <div style={{ zIndex: AUTH.backCard }} className="absolute left-[122px] top-[394px] w-[373px]">
            <CourseCard course={courses[1]} accentStar />
          </div>
          <div style={{ zIndex: AUTH.frontCard }} className="absolute left-[233px] top-[305px] w-[373px]">
            <CourseCard course={courses[2]} accentStar />
          </div>

          <div className="absolute left-[348px] top-[740px] h-[123px] w-[258px] rounded-2xl bg-secondary-400 p-4">
            <p className="text-[16px] font-medium leading-6 text-neutral-950">Happy Students</p>
            <p className="flex items-center gap-1 text-[10px] leading-[15px] text-neutral-950">
              <span className="font-bold">4.5</span>
              <span>(240)</span>
              <StarIcon className="h-4 w-4 text-primary-800" />
            </p>
            <div className="mt-2">
              <AvatarStack
                avatars={heroAvatars}
                extra="2K+"
                size={43}
                overlap={16}
                extraTextClass="text-[12px] leading-[18px]"
              />
            </div>
          </div>

        </div>


        <div style={{ zIndex: AUTH.card }} className="relative mt-10 w-full rounded-3xl bg-white px-6 pb-10 pt-10 sm:px-10 lg:absolute lg:left-[741px] lg:top-[120px] lg:mt-0 lg:h-[784px] lg:w-[579px] lg:px-[63px] lg:pb-0 lg:pt-[61px]">
          {children}
        </div>
      </div>
    </main>
  )
}
