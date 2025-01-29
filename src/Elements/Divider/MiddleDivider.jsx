
// eslint-disable-next-line react/prop-types
function MiddleDivider({title}) {
  return (
    <div>
    <span className="flex items-center pb-8">
      <span className="h-px flex-1 bg-transparent bg-gradient-to-r from-transparent via-main-gold to-transparent opacity-75"></span>
      <span className="shrink-0 px-6 font-montsBold tracking-widest text-2xl text-main-green md:text-4xl uppercase"><h2>{title}</h2></span>
      <span className="h-px flex-1 bg-transparent bg-gradient-to-r from-transparent via-main-gold to-transparent opacity-75"></span>
    </span>
    </div>
  )
}

export default MiddleDivider