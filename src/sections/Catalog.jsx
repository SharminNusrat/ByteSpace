import { useState } from 'react'
import CourseCard from '../components/CourseCard'
import { categoryRows, courses, learningPaths } from '../data/home'

const rowFrames = ['Tab_Categories', 'Frame 6', 'Frame 7']
const rowBox = [
  { left: 175, top: 294, width: 1086 },
  { left: 243, top: 358, width: 952 },
  { left: 408, top: 422, width: 622 },
]

const cardPos = [
  [0, 0],
  [413, 0],
  [826, 0],
  [0, 424],
  [413, 424],
  [826, 424],
]

const pathLabelWidths = [63, 120, 120, 78, 91, 117]

const discoverHeading = 'Discover Your Passion, Build Your Skills'
const discoverBody =
  'At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.'
const pathsHeading = 'Explore Diverse Learning Paths at Bytespace'
const pathsBody =
  "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."

function Pill({ id, label, width, active, onClick, pinned }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={pinned ? { width } : undefined}
      className={`flex h-[43px] shrink-0 items-center justify-center rounded-full px-4 text-[16px] font-medium leading-[19px] text-neutral-950 transition-colors ${
        active ? 'bg-secondary-400' : 'bg-neutral-50 hover:bg-neutral-100'
      }`}
    >
      {label}
    </button>
  )
}

function PathCard({ index, pinned }) {
  const { label, icon } = learningPaths[index]
  return (
    <div
      className={`flex h-[167px] w-[167px] flex-col items-center rounded-3xl border border-neutral-200 ${
        pinned ? 'absolute' : ''
      }`}
      style={pinned ? { left: index * 207, top: 0 } : undefined}
    >
      <img
        src={icon}
        alt=""
        className={pinned ? 'absolute left-1/2 top-[35px] h-[60px] w-[60px] -translate-x-1/2' : 'mt-9 h-[60px] w-[60px]'}
      />
      <span
        style={pinned ? { width: pathLabelWidths[index] } : undefined}
        className={'text-center text-[20px] font-medium leading-[24px] text-neutral-950 ' + (pinned ? 'absolute left-1/2 top-[107px] -translate-x-1/2' : 'mt-3')}
      >
        {label}
      </span>
    </div>
  )
}

export default function Catalog() {
  const [active, setActive] = useState('Featured')

  return (
    <section id="courses" className="relative overflow-hidden bg-white py-20 xl:py-0">
      {/* Below xl */}
      <div className="relative mx-auto w-full max-w-[1200px] px-6 xl:hidden">
        <h2 className="text-center text-h-s text-neutral-950 md:text-h-m">{discoverHeading}</h2>
        <p className="mx-auto mt-6 max-w-[917px] text-center text-body-l text-neutral-400">{discoverBody}</p>

        <div className="mt-12 space-y-4">
          {categoryRows.map((row, i) => (
            <div key={i} className="flex flex-wrap justify-center gap-4">
              {row.map((pill) => (
                <Pill key={pill.label} {...pill} active={pill.label === active} onClick={() => setActive(pill.label)} />
              ))}
              {i === 2 && (
                <button type="button" className="h-[43px] px-2 text-[16px] font-medium text-primary-700">
                  + More
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>

        <h2 className="mt-24 text-center text-h-xs text-neutral-950 md:text-h-s">{pathsHeading}</h2>
        <p className="mx-auto mt-6 max-w-[917px] text-center text-body-l text-neutral-400">{pathsBody}</p>
        <div className="mt-12 flex flex-wrap justify-center gap-10">
          {learningPaths.map((_, i) => (
            <PathCard key={i} index={i} pinned={false} />
          ))}
        </div>
      </div>

      <div className="relative mx-auto hidden h-[1894px] w-[1440px] xl:block">
        <div className="absolute left-[261px] top-[72px] h-[180px] w-[917px]">
          <h2
            className="absolute left-[165px] top-0 w-[588px] text-center text-[44px] leading-[53px] text-[#040819]"
          >
            {discoverHeading}
          </h2>
          <p
            className="absolute left-0 top-[122px] w-[917px] text-center text-[18px] leading-[29px] text-neutral-400"
          >
            {discoverBody}
          </p>
        </div>

        {categoryRows.map((row, i) => (
          <div
            key={rowFrames[i]}
            className="absolute flex h-[43px] gap-4"
            style={{ left: rowBox[i].left, top: rowBox[i].top, width: rowBox[i].width }}
          >
            {row.map((pill) => (
              <Pill key={pill.label} {...pill} active={pill.label === active} onClick={() => setActive(pill.label)} pinned />
            ))}
            {i === 2 && (
              <button
                type="button"
                className="flex h-[43px] items-center text-[16px] font-medium leading-[19px] text-primary-800"
              >
                <span className="leading-[19px]">+ More</span>
              </button>
            )}
          </div>
        ))}

        <div className="absolute left-[120px] top-[542px] h-[808px] w-[1199px]">
          {courses.map((course, i) => (
            <div
              key={course.title}
              className="absolute w-[373px]"
              style={{ left: cardPos[i][0], top: cardPos[i][1] }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        <div className="absolute left-[261px] top-[1422px] h-[117px] w-[917px]">
          <h2
            className="absolute left-[63px] top-0 w-[792px] text-center text-[36px] leading-[43px] text-[#040819]"
          >
            {pathsHeading}
          </h2>
          <p
            className="absolute left-0 top-[59px] w-[917px] text-center text-[18px] leading-[29px] text-neutral-400"
          >
            {pathsBody}
          </p>
        </div>

        <div className="absolute left-[119px] top-[1607px] h-[167px] w-[1202px]">
          {learningPaths.map((_, i) => (
            <PathCard key={i} index={i} pinned />
          ))}
        </div>
      </div>
    </section>
  )
}
