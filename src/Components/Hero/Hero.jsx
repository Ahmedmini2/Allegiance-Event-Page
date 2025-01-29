import ShinyButton from '../../Elements/ShinyButton/ShinyButton'
import './Hero.css'
function Hero() {
  return (
    <section
  className="relative bg-[url(/src/assets/images/bg2.jpg)] bg-cover bg-center bg-no-repeat md:h-full"
>
  <div
    className="absolute inset-0 bg-gray-900/15 sm:bg-transparent from-main-green-500 to-gray-900/15 bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-2 lg:mx-20 xl:mx-40 px-4 py-44 md:py-40 sm:px-6 lg:flex   lg:px-8 justify-center"
  >
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-left ltr:sm:text-left rtl:sm:text-right ">
      <div className='col-span-2'>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-montsBold text-white text tracking-wider xl:text-7xl  uppercase">
        Join our exclusive real estate event and unlock incredible benefits with your purchase!. 

          
        </h1>
        <strong className="text-2xl md:text-3xl lg:text-4xl mt-4 block font-montsMedium text-white"> Premium Property Selections </strong>

        {/* <p className="mt-4 font-montsMedium tracking-widest	 text-white sm:text-xl/relaxed">
        • Townhouses & Villas: Exclusive units such as corner and single-row options.<br></br>
        • Apartments: High-floor units with breathtaking views.<br></br>
        • Large Layouts: Perfectly designed spaces to suit your needs<br></br>
        </p> */}

        <strong className="text-2xl md:text-3xl lg:text-4xl mt-4 block font-montsMedium text-white"> Exceptional Offers
        </strong>

        {/* <p className="mt-4 font-montsMedium tracking-widest 	 text-white sm:text-xl/relaxed">
        • Flexible payment plans directly from the developer, including options as low as 1% monthly payments.<br></br>
        • Hassle-free fund transfers and payment assistance to simplify your purchase process..<br></br>
        • Secure incredible deals and maximize your investment.<br></br>
        • Save on essential property registration costs.<br></br>
        </p> */}

        <strong className="text-2xl md:text-3xl lg:text-4xl mt-4 block font-montsMedium text-white"> Exclusive Perks
        </strong>

        {/* <p className="mt-4 font-montsMedium  tracking-widest	 text-white sm:text-xl/relaxed">
        • Complimentary Dubai Trip: Upon booking, enjoy a free trip to Dubai with 5-star accommodation.<br></br>
        </p> */}

        <div className="py-20 grid grid-cols-1 lg:grid-cols-3 gap-4 text-left ltr:sm:text-left rtl:sm:text-right">
          <div className='border-l-2 border-white border-solid px-4 shadow-'>
            <h2 className='mt-4 font-bold tracking-wide text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl uppercase'>January 3-5</h2>
            <p className='mt-4 font-bold tracking-wide text-white sm:text-xl/relaxed uppercase'>Date</p>
          </div>

          <div className='border-l-2 border-white border-solid px-4'>
            <h2 className='mt-4 font-bold tracking-wide text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl uppercase'>From 10:00 to 20:00</h2>
            <p className='mt-4 font-bold tracking-wide text-white sm:text-xl/relaxed uppercase'>Time</p>
          </div>


          <div className=' border-l-2 border-white border-solid px-4 '>
            <h2 className='mt-4 font-bold tracking-wide text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl uppercase'>Bluewaters Island</h2>
            <p className='mt-4 font-bold tracking-wide text-white sm:text-xl/relaxed uppercase'>Location</p>
          </div>
          
        </div>
        
      </div>
      <div className='flex col-span-1'>
        <div className="mx-auto">
          <div className="mx-auto ">
            

            <form action="#" className="bg-white bg-opacity-90 mb-0  space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
              <p className="text-3xl md:text-4xl lg:text-5xl text-left xl:text-7xl font-medium text-black">Grab your free ticket while stock lasts</p>
              <p className='text-left text-xl md:text-xl xl:text-2xl font-thin text-black' >Last year we ran out of tickets in 3 days with over 600 visitors attending</p>

              <div>
                <label htmlFor="email" className="sr-only">Full Name</label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-lg shadow-sm"
                    placeholder="Full Name"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    
                  </span>
                </div>
              </div>


              <div>
                <label htmlFor="email" className="sr-only text-xl">Email Address</label>

                <div className="relative">
                  <input
                    type="email"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-lg shadow-sm"
                    placeholder="Enter email address"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="sr-only text-xl">Phone Number</label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-lg shadow-sm"
                    placeholder="Enter Phone number"
                  />

                  
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                <label htmlFor="Option1" className="flex cursor-pointer items-start gap-4 py-4">
                  <div className="flex items-center">
                    &#8203;
                    <input type="checkbox" required className="size-4 rounded border-gray-300" id="Option1" />
                  </div>

                  <div>
                    

                    <p className=" text-pretty text-sm text-gray-700">
                    By accepting and providing my personal information I am consenting to Allegiance Real Estate Privacy Policy, the applicable data protection laws and Terms of Use.
                    </p>
                  </div>
                </label>

                <label htmlFor="Option2" className="flex cursor-pointer items-start gap-4 py-4">
                  <div className="flex items-center">
                    &#8203;
                    <input type="checkbox" required className="size-4 rounded border-gray-300" id="Option2" />
                  </div>

                  <div>
    

                    <p className=" text-pretty text-sm text-gray-700">
                    I agree to receive information about offers, deals and services from this website (optional).
                    </p>
                  </div>
                </label>

                
              </div>

              

              <ShinyButton 
              title="Register Now"
              sizeNumber={96} ></ShinyButton>

              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero