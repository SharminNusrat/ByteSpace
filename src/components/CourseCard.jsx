import AvatarStack from './AvatarStack'
import { StarIcon, LevelIcon } from './Icons'

function MetaChip({ children }) {
  return (
    <span className="flex h-[26px] items-center rounded-full bg-neutral-50/60 px-3 text-[12px] font-medium leading-5 text-neutral-700">
      {children}
    </span>
  )
}

export default function CourseCard({ course, accentStar = false }) {
  const { title, author, thumbnail, lessons, duration, comments, level, rating, students, extraStudents, price, period } = course

  return (
    <article className="rounded-3xl bg-white p-4 ring-1 ring-inset ring-neutral-200">
      <div className="relative overflow-hidden rounded-xl">
        <img src={thumbnail} alt="" className="h-[195px] w-full object-cover" />
        <div className="absolute bottom-[19px] left-[13px] flex gap-3">
          <MetaChip>{lessons}</MetaChip>
          <MetaChip>{duration}</MetaChip>
          <MetaChip>{comments}</MetaChip>
        </div>
      </div>

      <div className="mt-[21px] flex items-start justify-between gap-3">
        <div className="w-[237px] shrink-0">
          {/* One line, clipped with an ellipsis at 280px. */}
          <h3 className="w-[280px] truncate font-heading text-[20px] font-semibold leading-[28px] text-neutral-950">
            {title}
          </h3>
          <p className="text-[12px] leading-5 text-neutral-400">
            by <span className="text-primary-800">{author}</span>
          </p>

          <div className="mt-4 flex items-center gap-3">
            <span className="inline-flex h-8 items-center gap-1 rounded-full bg-neutral-50 px-3 text-[12px] font-medium leading-5 text-neutral-700">
              <LevelIcon className="h-5 w-5 text-neutral-700" />
              {level}
            </span>
            <AvatarStack avatars={students} extra={extraStudents} />
          </div>

          <p className="mt-4 flex h-6 items-baseline">
            <span className="font-heading text-[20px] font-semibold leading-[28px] text-primary-800">{price}</span>
            <span className="text-[12px] leading-5 text-neutral-400">{period}</span>
          </p>
        </div>

        <span className="flex shrink-0 items-center gap-1 text-[18px] font-medium leading-[28px] text-neutral-700">
          {rating}
          {accentStar ? (
            <StarIcon className="h-5 w-5 text-secondary-400" />
          ) : (
            <StarIcon className="h-4 w-4 text-neutral-200" />
          )}
        </span>
      </div>
    </article>
  )
}
