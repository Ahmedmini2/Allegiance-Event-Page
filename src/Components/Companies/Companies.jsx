import MiddleDivider from "../../Elements/Divider/MiddleDivider"


function Companies() {
  return (
    <section>
      {/*Container */}
      <div className="lg:mx-40  px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        
          <span className="flex items-center pb-1">
          </span>

        <MiddleDivider title="As seen on"></MiddleDivider>
        
        <div className=" flex-col items-center gap-8 sm:grid grid grid-cols-4 sm:grid-cols-3 sm:gap-12 md:grid-cols-4 md:gap-12">
          <div className="flex justify-center">
            <img
              src="/src/assets/images/forbes.webp"
              alt=""
              className="inline-block"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/src/assets/images/business-insider.webp"
              alt=""
              className="inline-block"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/src/assets/images/gulf-news.webp"
              alt=""
              className="inline-block"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/src/assets/images/ceo.webp"
              alt=""
              className="inline-block"
            />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Companies