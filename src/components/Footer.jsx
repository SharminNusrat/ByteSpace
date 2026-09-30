import Logo from './Logo'
import { footerColumns, footerLegal } from '../data/home'

const columnX = [740, 947, 1154]
const legalX = [1025, 1121, 1232]

const blurb = 'Stay Up to date with our latest features and releases by joining our newsletter.'
const disclaimer = 'By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.'

function NewsletterForm({ pinned }) {
  return (
    <form className={pinned ? '' : 'mt-8 flex flex-wrap gap-4'} onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="Enter your email"
        className={
          'h-[52px] rounded-full border border-neutral-200 bg-white px-6 text-[16px] leading-[26px] text-neutral-950 outline-none placeholder:text-neutral-400 focus:border-primary-800 ' +
          (pinned ? 'absolute left-[120px] top-[191px] w-[376px]' : 'w-full max-w-[376px]')
        }
      />
      <button
        type="submit"
        className={
          'flex h-[46px] w-[104px] items-center justify-center rounded-full bg-secondary-400 text-[18px] font-medium leading-[22px] text-neutral-950 transition-colors hover:bg-secondary-300 ' +
          (pinned ? 'absolute left-[520px] top-[191px]' : '')
        }
      >
        Search
      </button>
    </form>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white py-16 xl:py-0">
      {/* Below xl */}
      <div className="relative mx-auto w-full max-w-[1200px] px-6 xl:hidden">
        <Logo variant="dark" className="h-9" />
        <p className="mt-8 max-w-[528px] text-[14px] leading-[22px] text-neutral-950">{blurb}</p>
        <NewsletterForm pinned={false} />
        <p className="mt-6 max-w-[504px] text-[12px] leading-[19px] text-neutral-400">{disclaimer}</p>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerColumns.map((column, c) => (
            <div key={c}>
              {c !== 1 && (
                <p className="mb-6 text-[16px] leading-[24px] text-neutral-400">{c === 0 ? 'Browse' : 'Platform'}</p>
              )}
              <ul className="space-y-4">
                {column.map((label) => (
                  <li key={label}>
                    <a href="#" className="text-[14px] leading-[22px] text-neutral-950 hover:text-primary-800">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-neutral-200 pt-8 sm:flex-row sm:justify-between">
          <p className="text-[12px] leading-[19px] text-neutral-950">@ 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {footerLegal.map((label) => (
              <li key={label}>
                <a href="#" className="text-[12px] leading-[19px] text-neutral-950 hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative mx-auto hidden h-[525px] w-[1440px] xl:block">
        <Logo variant="dark" className="absolute left-[120px] top-[71px] h-[35px] w-[171px]" />

        <p
          className="absolute left-[120px] top-[124px] w-[528px] text-[14px] leading-[22px] text-neutral-950"
        >
          {blurb}
        </p>

        <NewsletterForm pinned />

        <p
          className="absolute left-[120px] top-[267px] w-[504px] text-[12px] leading-[19px] text-neutral-950"
        >
          {disclaimer}
        </p>

        <p
          className="absolute left-[740px] top-[71px] text-[16px] leading-[24px] text-neutral-400"
        >
          Browse
        </p>
        <p
          className="absolute left-[1154px] top-[71px] text-[16px] leading-[24px] text-neutral-400"
        >
          Platform
        </p>

        {footerColumns.map((column, c) =>
          column.map((label, r) => (
            <a
              key={label}
              href="#"
              className="absolute text-[14px] leading-[22px] text-neutral-950 hover:text-primary-800"
              style={{ left: columnX[c], top: 119 + r * 38 }}
            >
              {label}
            </a>
          )),
        )}

        <div className="absolute left-[120px] top-[435px] h-px w-[1200px] bg-neutral-200" />

        <p
          className="absolute left-[120px] top-[458px] w-[460px] text-[12px] leading-[19px] text-neutral-950"
        >
          @ 2023 ByteSpace. All rights reserved.
        </p>

        {footerLegal.map((label, i) => (
          <a
            key={label}
            href="#"
            className="absolute top-[458px] text-[12px] leading-[19px] text-neutral-950 hover:underline"
            style={{ left: legalX[i] }}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
