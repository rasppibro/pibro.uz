import Image from "next/image"
import Navbar from "./Navbar"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faReddit, faTelegram} from '@fortawesome/free-brands-svg-icons'


const Layout=({children,navigation})=>{
    return(
        <>
        <Navbar navigation={navigation}/>
        <div>
            {children}
        </div>
        <footer className="p-10 text-white bg-gray-400 flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="mr-4">
            <Image src="/RespPiBro.png" width="48" height="48" />
            </div>
            <p className="mt-4 sm:mt-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quia excepturi aspernatur qui libero rem?</p>
            <div className="text-left sm:text-center mt-4 sm:mt-0">
                <a className="ml-0 mr-5 sm:mx-3" href="https://instagram.com/rasppibro"><FontAwesomeIcon icon={faInstagram} size="2x" className="hover:text-pink-400 transition-all ease-in duration-300 delay-150"/></a>
                <a className="mx-5 sm:mx-3" href="https://facebook.com/rasppibro"><FontAwesomeIcon icon={faFacebook} size="2x" className="hover:text-blue-500 transition-all ease-in duration-300 delay-150"/> </a>
                <a className="mx-5 sm:mx-3" href="https://telegram.me/rasppibro"><FontAwesomeIcon icon={faTelegram} size="2x" className="hover:text-blue-300 transition-all ease-in duration-300 delay-150"/> </a>
                <a className="mr-0 ml-5 sm:mx-3" href="https://reddit.com/u/rasppibro"><FontAwesomeIcon icon={faReddit} size="2x" className="hover:text-orange-400 transition-all ease-in duration-300 delay-150"/></a>
            </div>
        </footer>
        </>
    )
}

export default Layout