import Navbar from '../components/Navbar'
import Button from '../components/Button'
import AvatarStack from '../components/AvatarStack'
import Ornaments from '../components/Ornaments'
import { SearchIcon, StarIcon } from '../components/Icons'
import { heroAvatars } from '../data/home'
import { heroShapes } from '../data/shapes'
import { HERO } from '../data/layers'

function FloatingCard({ className, z, children }) {
  return (
    <div style={{ zIndex: z }} className={`rounded-2xl bg-white p-4 ${className}`}>
      {children}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-primary-800">
      {/* Blueprint grid: 120px both axes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 2px, transparent 2px), linear-gradient(to bottom, #fff 2px, transparent 2px)',
            backgroundSize: '120px 120px',
          }}
        />

      <Ornaments shapes={heroShapes} frame="Hero_Frame" />

      <div className="relative mx-auto w-full max-w-[1440px] pb-16 xl:h-[1024px] xl:pb-0">
        
        <div
          aria-hidden="true"
          style={{ zIndex: HERO.ring }}
          className="pointer-events-none absolute left-1/2 top-[420px] h-[520px] w-[520px] -translate-x-1/2 rounded-full border-[150px] border-secondary-500 xl:left-[145px] xl:top-[582px] xl:h-[1149px] xl:w-[1149px] xl:translate-x-0 xl:border-[320px]"
        />


        <Navbar />

        <h1 style={{ zIndex: HERO.heading }} className="relative mx-auto mt-10 max-w-[935px] px-6 text-center text-h-s text-white sm:text-h-m xl:absolute xl:left-[253px] xl:top-[169px] xl:mt-0 xl:w-[935px] xl:px-0 xl:text-[72px] xl:leading-[86px]">
          Get Access to Hundreds Courses Available
        </h1>

        <p style={{ zIndex: HERO.subtitle }} className="relative mx-auto mt-8 max-w-[819px] px-6 text-center text-body-l text-neutral-100 xl:absolute xl:left-[311px] xl:top-[373px] xl:mt-0 xl:w-[819px] xl:px-0">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form
          style={{ zIndex: HERO.search }}
          className="relative mx-auto mt-10 flex w-full max-w-[581px] items-center gap-4 px-6 xl:absolute xl:left-[430px] xl:top-[462px] xl:mt-0 xl:w-[581px] xl:px-0"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="hero-search" className="sr-only">
            Search courses
          </label>
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute left-6 top-1/2 h-6 w-6 -translate-y-1/2 text-neutral-950" />
            <input
              id="hero-search"
              type="search"
              placeholder="Course, topic, creator"
              className="h-[52px] w-full rounded-3xl bg-white pl-14 pr-6 text-body-l text-neutral-950 outline-none placeholder:text-neutral-400"
            />
          </div>
          <Button type="submit" size="sm">
            Search
          </Button>
        </form>

        
        <img
          src="/assets/images/home-hero-01.webp"
          alt="Student learning with ByteSpace"
          style={{
            zIndex: HERO.photo,
            filter: [
              'drop-shadow(0.5px 0.7px 3px rgba(0,0,0,0.04))',
              'drop-shadow(2.2px 3.2px 5.7px rgba(0,0,0,0.06))',
              'drop-shadow(5.4px 7.7px 9.6px rgba(0,0,0,0.07))',
              'drop-shadow(10.2px 14.6px 16.1px rgba(0,0,0,0.08))',
              'drop-shadow(17px 24.2px 24px rgba(0,0,0,0.09))',
              'drop-shadow(25.8px 36.9px 36px rgba(0,0,0,0.10))',
              'drop-shadow(37.1px 53px 56px rgba(0,0,0,0.11))',
              'drop-shadow(51px 72.9px 72px rgba(0,0,0,0.13))',
            ].join(' '),
          }}
          className="relative mx-auto mt-10 block w-[440px] max-w-full object-cover xl:absolute xl:left-[431px] xl:top-[512px] xl:mt-0 xl:h-[541px] xl:w-[578px]"
        />

        <div aria-hidden="true" className="pointer-events-none hidden xl:block">
          <FloatingCard z={HERO.categoryCard} className="absolute left-[404px] top-[639px] h-[70px] w-[208px]">
            <p className="text-[16px] font-medium leading-[19px] text-neutral-950">UI/UX Design</p>
            <p className="flex gap-2 text-[12px] leading-[19px] text-neutral-400">
              <span>200 Courses</span>
              <span>&bull;</span>
              <span>1000+ Students</span>
            </p>
          </FloatingCard>

          <FloatingCard z={HERO.progressCard} className="absolute left-[842px] top-[651px] h-[131px] w-[232px]">
            <p className="text-[14px] font-medium leading-[17px] text-neutral-700">Learning Progress</p>
            <p className="mt-2 font-heading text-[48px] font-semibold leading-[58px] text-neutral-950">55%</p>
            <div className="mt-2 h-2 w-full rounded-full bg-neutral-50">
              <div className="h-2 w-[56%] rounded-full bg-secondary-400" />
            </div>
          </FloatingCard>

          <FloatingCard z={HERO.studentsCard} className="absolute left-[328px] top-[837px] h-[121px] w-[258px]">
            <p className="text-[16px] font-medium leading-[19px] text-neutral-950">Happy Students</p>
            <p className="flex items-center gap-1 text-[12px] leading-[19px] text-neutral-950">
              <span className="font-bold">4.5</span>
              <span className="text-neutral-400">(240)</span>
              <StarIcon className="h-4 w-4 text-secondary-500" />
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
          </FloatingCard>
        </div>
      </div>
    </section>
  )
}
