/**
 * Decorative 3D ornaments for a section.
 */
export default function Ornaments({ shapes }) {
  const edge = shapes.filter((s) => s.anchor !== 'stage')
  const stage = shapes.filter((s) => s.anchor === 'stage')

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden xl:block">
      {edge.map((s) => (
        <img
          key={s.src + s.top}
          src={s.src}
          alt=""
          className="absolute max-w-none"
          style={{
            [s.anchor]: s.anchor === 'right' ? s.right : s.left,
            top: s.top,
            width: s.width,
            height: s.height,
            zIndex: s.z,
          }}
        />
      ))}

      <div className="relative mx-auto h-full w-[1440px]">
        {stage.map((s) => (
          <img
            key={s.src + s.top}
            src={s.src}
            alt=""
            className="absolute max-w-none"
            style={{ left: s.left, top: s.top, width: s.width, height: s.height, zIndex: s.z }}
          />
        ))}
      </div>
    </div>
  )
}
