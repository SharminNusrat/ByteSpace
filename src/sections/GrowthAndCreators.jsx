import CourseCard from '../components/CourseCard'
import AvatarStack from '../components/AvatarStack'
import Ornaments from '../components/Ornaments'
import { CheckIcon, StarIcon } from '../components/Icons'
import { growthStats, creatorBenefits, heroAvatars, courses } from '../data/home'
import { growthShapes } from '../data/shapes'
import { PHOTO_SHADOW } from '../lib/shadow'
import { GROWTH } from '../data/layers'

function Blobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <img
        src="/assets/bg/growth-blobs.webp"
        alt=""
        className="absolute max-w-none"
        style={{ left: -548, top: -506, width: 2536, height: 2471, zIndex: GROWTH.blobs }}
      />
      <img
        src="/assets/bg/growth-blob-lime.webp"
        alt=""
        className="absolute max-w-none"
        style={{ left: -327, top: 906, width: 752, height: 752, zIndex: GROWTH.blobLime }}
      />
    </div>
  )
}

function StatBlock() {
  return (
    <dl className="flex gap-[56px]">
      {growthStats.map(({ value, label }, index) => (
        <div
          key={label}
          style={{ width: [69, 65, 68][index] }}
        >
          <dt className="font-heading text-[36px] font-medium leading-[44px] text-primary-800">{value}</dt>
          <dd className="text-[18px] leading-[29px] text-neutral-700">{label}</dd>
        </div>
      ))}
    </dl>
  )
}

function BenefitList() {
  return (
    <ul className="space-y-4">
      {creatorBenefits.map((benefit) => (
        <li key={benefit} className="flex items-center gap-2 text-[18px] font-medium leading-[22px] text-neutral-950">
          <CheckIcon className="h-6 w-6 shrink-0 text-primary-800" />
          {benefit}
        </li>
      ))}
    </ul>
  )
}

const growthHeading = 'Your Path to Professional Growth Starts Here!'
const growthBody =
  'Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.'
const creatorHeading = 'Create & Manage Courses Easily.'

function CreatorBody() {
  return (
    <>
      <span className="font-bold text-neutral-950">ByteSpace</span> supports individuals or entities in the creation,
      publication, and administration of educational courses.
    </>
  )
}

function BlueCard({ z, className, title, period, amount, delta, bar }) {
  return (
    <div
      style={{ zIndex: z }}
      className={`absolute rounded-2xl bg-primary-800 p-4 text-neutral-50 ${className}`}
    >
      <p className="text-[16px] font-medium leading-[19px]">{title}</p>
      <p className="text-[10px] leading-[12px] text-neutral-50/80">{period}</p>
      <p className="mt-2 font-heading text-[24px] font-semibold leading-[32px]">{amount}</p>
      {delta && (
        <span className="mt-2 inline-flex h-6 w-[38px] items-center justify-center rounded-full bg-secondary-500 text-[10px] font-medium leading-5 text-neutral-950">
          {delta}
        </span>
      )}
      {bar && (
        <div className="mt-2 h-2 w-[200px] rounded-full bg-white">
          <div className="h-2 w-[112px] rounded-full bg-secondary-400" />
        </div>
      )}
    </div>
  )
}

export default function GrowthAndCreators() {
  return (
    <section id="creators" className="relative isolate overflow-hidden bg-[#fafafa] py-20 xl:py-0">
      <Blobs />
      <Ornaments shapes={growthShapes} frame="Frame 15" />

      {/* Below xl: simple stacked flow */}
      <div className="relative mx-auto w-full max-w-[1200px] space-y-20 px-6 xl:hidden">
        <div>
          <h2 className="text-h-s text-neutral-950 md:text-h-m">{growthHeading}</h2>
          <p className="mt-6 max-w-[477px] text-body-l text-neutral-700">{growthBody}</p>
          <div className="mt-10">
            <StatBlock />
          </div>
        </div>
        <div>
          <h2 className="text-h-s text-neutral-950 md:text-h-m">{creatorHeading}</h2>
          <p className="mt-6 max-w-[574px] text-body-l text-neutral-700">
            <CreatorBody />
          </p>
          <div className="mt-8">
            <BenefitList />
          </div>
        </div>
      </div>

      <div className="relative mx-auto hidden h-[1460px] w-[1440px] xl:block">
        <h2
          style={{ zIndex: GROWTH.heading }}
          className="absolute left-[121px] top-[194px] w-[577px] text-[44px] leading-[53px] text-neutral-950"
        >
          {growthHeading}
        </h2>
        <p
          style={{ zIndex: GROWTH.body }}
          className="absolute left-[121px] top-[340px] w-[477px] text-[18px] leading-[29px] text-neutral-700"
        >
          {growthBody}
        </p>
        <div style={{ zIndex: GROWTH.stats }} className="absolute left-[121px] top-[525px]">
          <StatBlock />
        </div>

        <div style={{ zIndex: GROWTH.courseCard }} className="absolute left-[758px] top-[120px] w-[373px]">
          <CourseCard course={courses[0]} />
        </div>
        <img
          src="/assets/images/home-hero-01.webp"
          alt=""
          style={{ filter: PHOTO_SHADOW, zIndex: GROWTH.manPhoto }}
          className="absolute left-[758px] top-[132px] h-[540px] w-[577px] max-w-none object-cover"
        />
        <div
          style={{ zIndex: GROWTH.progressCard }}
          className="absolute left-[1103px] top-[333px] h-[138px] w-[232px] rounded-2xl bg-white p-4"
        >
          <p className="text-[14px] font-medium leading-[24px] text-neutral-950">Learning Progress</p>
          <p className="mt-2 font-heading text-[48px] font-semibold leading-[58px] text-neutral-950">55%</p>
          <div className="mt-2 h-2 w-[200px] rounded-full bg-neutral-50">
            <div className="h-2 w-[112px] rounded-full bg-secondary-400" />
          </div>
        </div>

        <BlueCard
          z={GROWTH.revenueCard}
          className="left-[121px] top-[788px] h-[119px] w-[232px]"
          title="Total Revenue"
          period="July 1-28"
          amount="$120.29"
          bar
        />
        <BlueCard
          z={GROWTH.ytdCard}
          className="left-[121px] top-[938px] h-[135px] w-[134px]"
          title="Year to Date"
          period="2023"
          amount="$1,200.38"
          delta="+12$"
        />
        
        <div
          className="absolute left-[149px] top-[744px] h-[596px] w-[435px] overflow-hidden"
          style={{ filter: PHOTO_SHADOW, zIndex: GROWTH.womanPhoto }}
        >
          <img
            src="/assets/images/home-15-01.webp"
            alt=""
            className="absolute max-w-none"
            style={{ left: -124.1, top: 0, width: 683.1, height: 683.1 }}
          />
        </div>
        <div
          style={{ zIndex: GROWTH.studentsCard }}
          className="absolute left-[404px] top-[1157px] h-[123px] w-[258px] rounded-2xl bg-white p-4"
        >
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

        <h2
          style={{ zIndex: GROWTH.heading2 }}
          className="absolute left-[741px] top-[848px] w-[391px] text-[44px] leading-[53px] text-neutral-950"
        >
          {creatorHeading}
        </h2>
        <p
          style={{ zIndex: GROWTH.body2 }}
          className="absolute left-[741px] top-[994px] w-[574px] text-[18px] leading-[28px] text-neutral-700"
        >
          <CreatorBody />
        </p>
        <div style={{ zIndex: GROWTH.benefits }} className="absolute left-[741px] top-[1092px]">
          <BenefitList />
        </div>
      </div>
    </section>
  )
}
