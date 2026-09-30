import { testimonials } from '../data/home'

const cards = [
  { left: 118, height: 432, nameLh: 24, nameW: 86, roleW: 158 },
  { left: 533, height: 436, nameLh: 28, nameW: 85, roleW: 128 },
  { left: 948, height: 407, nameLh: 28, nameW: 64, roleW: 127 },
]

const heading = 'Discover What Our Community Is Saying'
const body =
  'At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.'

function Card({ person, meta, pinned }) {
  return (
    <article
      className={
        pinned
          ? 'absolute w-[374px] rounded-3xl bg-white p-6'
          : 'rounded-3xl bg-white p-6'
      }
      style={pinned ? { left: meta.left, top: 291, height: meta.height } : undefined}
    >
      <img src={person.avatar} alt="" className="h-20 w-20 rounded-full object-cover" />
      <p
        style={pinned ? { width: meta.nameW, lineHeight: `${meta.nameLh}px` } : undefined}
        className="mt-6 whitespace-nowrap font-heading text-[20px] font-semibold text-black"
      >
        {person.name}
      </p>
      <p
        style={pinned ? { width: meta.roleW } : undefined}
        className="whitespace-nowrap text-[18px] leading-[29px] text-primary-800"
      >
        {person.role}
      </p>
      <p
        className="mt-6 w-full text-[18px] leading-[29px] text-[#4f4f4f] xl:w-[326px]"
      >
        {person.quote}
      </p>
    </article>
  )
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-20 xl:py-0">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="/assets/bg/testi-blob-lime.webp"
          alt=""
          className="absolute max-w-none"
          style={{ right: -579, top: -281, width: 1217, height: 1217 }}
        />
        <div className="relative mx-auto h-full w-[1440px]">
          <img
            src="/assets/bg/testi-blob-lime-sm.webp"
            alt=""
            className="absolute max-w-none"
            style={{ left: 355, top: -178, width: 752, height: 752 }}
          />
        </div>
        <img
          src="/assets/bg/testi-blob-blue.webp"
          alt=""
          className="absolute max-w-none"
          style={{ left: -482, top: 109, width: 1217, height: 1217 }}
        />
      </div>

      {/* Below xl */}
      <div className="relative mx-auto w-full max-w-[1200px] px-6 xl:hidden">
        <h2 className="text-h-s text-neutral-950 md:text-h-m">{heading}</h2>
        <p className="mt-6 text-body-l text-neutral-700">{body}</p>
        <div className="mt-12 grid items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((person, i) => (
            <Card key={person.name} person={person} meta={cards[i]} pinned={false} />
          ))}
        </div>
      </div>

      <div className="relative mx-auto hidden h-[784px] w-[1440px] xl:block">
        <h2
          className="absolute left-[118px] top-[113px] w-[577px] text-[44px] leading-[53px] text-black"
        >
          {heading}
        </h2>
        <p
          className="absolute left-[738px] top-[74px] w-[580px] text-[18px] leading-[29px] text-[#4f4f4f]"
        >
          {body}
        </p>
        {testimonials.map((person, i) => (
          <Card key={person.name} person={person} meta={cards[i]} pinned />
        ))}
      </div>
    </section>
  )
}
