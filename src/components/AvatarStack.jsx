export default function AvatarStack({
  avatars,
  extra,
  size = 32,
  overlap = 8,
  ring = 'ring-white',
  extraTextClass = 'text-label-xs',
}) {
  const style = { width: size, height: size, marginRight: -overlap }

  return (
    <div className="flex items-center" style={{ paddingRight: overlap }}>
      {avatars.map((src) => (
        <img key={src} src={src} alt="" style={style} className={`rounded-full object-cover ring-2 ${ring}`} />
      ))}
      {extra && (
        <span
          style={style}
          className={`inline-flex items-center justify-center rounded-full bg-secondary-400 font-bold text-neutral-950 ring-2 ${ring} ${extraTextClass}`}
        >
          {extra}
        </span>
      )}
    </div>
  )
}
