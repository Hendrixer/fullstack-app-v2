import clsx from 'clsx'

const GlassPane = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'glass rounded-2xl border-solid border-2 border-white',
        className
      )}
    >
      {children}
    </div>
  )
}

export default GlassPane
