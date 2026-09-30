/**
 * Labelled input used by both auth forms.
 */
export default function TextField({ id, label, type = 'text', placeholder, labelWidth }) {
  return (
    <div>
      <label htmlFor={id} style={labelWidth ? { width: labelWidth } : undefined} className="block w-fit text-label-s text-neutral-950">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="mt-2 h-[52px] w-full rounded-xl border border-neutral-200 px-6 text-body-l text-neutral-950 outline-none transition-colors placeholder:text-neutral-300 focus:border-primary-800"
      />
    </div>
  )
}
