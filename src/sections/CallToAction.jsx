import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Ornaments from '../components/Ornaments'
import { ctaShapes } from '../data/shapes'
import { CTA } from '../data/layers'

const heading = 'Unlock Your Potential as a Creator with ByteSpace'
const body =
  'Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.'

export default function CallToAction() {
  return (
    <section className="relative isolate overflow-hidden bg-primary-800 py-20 xl:py-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 2px, transparent 2px), linear-gradient(to bottom, #fff 2px, transparent 2px)',
          backgroundSize: '120px 120px',
        }}
      />

      <Ornaments shapes={ctaShapes} frame="CTA_Frame" />

      <div className="relative mx-auto w-full max-w-[1200px] px-6 text-center xl:hidden">
        <h2 className="text-h-s text-white md:text-h-m">{heading}</h2>
        <p className="mt-8 text-body-l text-white/90">{body}</p>
        <Button as={Link} to="/register" size="sm" className="mt-10">
          Join as Creator
        </Button>
      </div>

      <div className="relative mx-auto hidden h-[488px] w-[1440px] xl:block">
        <h2
          style={{ zIndex: CTA.heading }}
          className="absolute left-[365px] top-[85px] w-[710px] text-center text-[44px] leading-[53px] text-neutral-50"
        >
          {heading}
        </h2>
        <p
          style={{ zIndex: CTA.body }}
          className="absolute left-[238px] top-[231px] w-[964px] text-center text-[18px] leading-[29px] text-neutral-50"
        >
          {body}
        </p>
        <Button
          as={Link}
          to="/register"
          size="sm"
          style={{ zIndex: CTA.button }}
          className="absolute left-[634px] top-[358px] w-[172px]"
        >
          Join as Creator
        </Button>
      </div>
    </section>
  )
}
