import { faInstagramSquare, faLinkedin, faSquareFacebook, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeOpen, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './Footer.css'
function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="lg:mx-40 px-6 pb-8 pt-8 sm:pt-24 lg:px-8 lg:pt-12">
           
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-4">
                <img className="h-16" src="/src/assets/images/logo.png" alt="Allegiance Real Estate"/>
                <p className="text-sm leading-6 text-gray-600">Allegiance Real Estate is an integrated real estate service provider offering a world-class real estate service to individuals and institutional clients.
                </p>

                {/* Social Media Icons */}
                <div className="flex space-x-6">
                <a href="https://www.facebook.com/allegiance.ae" target="_blank" className="text-gray-400 hover:text-blue-500 transition-all ease-in-out hover:-translate-y-1">
                    <span className="sr-only">Facebook</span>
                    <FontAwesomeIcon className="" icon={faSquareFacebook} size="2xl" />
                </a>

                <a href="https://x.com/Allegiance_ae" target="_blank" className="text-gray-400 hover:text-cyan-300 transition-all ease-in-out hover:-translate-y-1">
                    <span className="sr-only">Twitter</span>
                    <FontAwesomeIcon icon={faTwitterSquare} size="2xl"/>
                </a>

                <a href="https://www.instagram.com/allegiance.ae/" target="_blank" className="transition-all ease-in-out hover:-translate-y-1">
                    <span className="sr-only ">Instagram</span>
                    <FontAwesomeIcon size="2xl" className="text-gray-400 hover:bg-gradient-to-r hover:from-purple-500 hover:via-orange-500 hover:to-yellow-400 hover:inline-block hover:text-white rounded-md" icon={faInstagramSquare} />
                </a>

                <a href="https://ae.linkedin.com/company/allegiance-real-estate" target="_blank" className="text-gray-400 hover:text-blue-500 transition-all ease-in-out hover:-translate-y-1">
                    <span className="sr-only">Linkedin</span>
                    <FontAwesomeIcon icon={faLinkedin} size="2xl"/>
                </a>

                <a href="https://www.youtube.com/channel/UCluQT0ROUpAHg0IA0473kGw" target="_blank" className="text-gray-400 hover:text-red-500 transition-all ease-in-out hover:-translate-y-1">
                    <span className="sr-only">YouTube</span>
                    <FontAwesomeIcon icon={faYoutubeSquare} size="2xl"/>
                </a>
                </div>
            </div>


            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 justify-items-center">
                <div className="md:grid md:grid-cols-1 md:gap-8 p-2">
                <div>
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">About</h3>
                    <ul role="list" className="mt-6 space-y-4">
                    <li>
                        <FontAwesomeIcon icon={faLocationDot} color="black" />
                        <a href="https://maps.app.goo.gl/LdnuxnLVJRX4yhmh9" target="_blank" className="pl-2 text-sm leading-6 text-gray-600 hover:text-gray-900">Suite 2804, Floor 28th, Control Tower, Motor City, Dubai, United Arab Emirates</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faPhone} color="black" />
                        <a href="tel:+971800273392" target="_blank" className="pl-2 text-sm leading-6 text-gray-600 hover:text-gray-900">+971 800 (273392) </a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faEnvelopeOpen} color="black" />
                        <a href="mailto:info@allegiance.ae" target="_blank" className="pl-2 text-sm leading-6 text-gray-600 hover:text-gray-900">info@allegiance.ae</a>
                    </li>
                    </ul>
                </div>
                
                </div>
                <div className="md:grid md:grid-cols-1 md:gap-4">
                <div>
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">Fast Links</h3>
                    <ul role="list" className="mt-6 space-y-2">
                    <li>
                        <a href="https://aredxb.com" target="_blank" className=" footer-link">
                         Allegiance </a>
                    </li>
                    <li>
                        <a href="https://aredxb.com/contact.html" target="_blank" className="footer-link">Contact us</a>
                    </li>
                    <li>
                        <a href="https://aredxb.com/about-allegiance-real-estate.html" target="_blank" className="footer-link">Why Allegiance</a>
                    </li>
                    <li>
                        <a href="https://aredxb.com/meet-the-team.html" target="_blank" className="footer-link">Meet The Team</a>
                    </li>
                    <li>
                        <a href="https://aredxb.com/offplan/offplan-properties.html" target="_blank" className="footer-link">Off-Plan Projects</a>
                    </li>
                    </ul>
                </div>
                
                </div>
            </div>
            </div>
            <div className="mt-8 border-t border-gray-900/10 pt-8 sm:mt-12 lg:mt-14">
            <p className="text-xs leading-2 text-gray-500">&copy; 2024 Allegiance Real Estate L.L.C, All rights reserved.</p>
            </div>
        </div>
        </footer>
  )
}

export default Footer