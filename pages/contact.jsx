import Head from 'next/head'
import Layout from "./components/Layout"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faReddit, faTelegram} from '@fortawesome/free-brands-svg-icons'

function Contact() {
    const navigation = [
        { name: 'Asosiy', href: '/', current: false },
        { name: 'Jamoa', href: '/team', current: false },
        { name: 'Loyihalar', href: '/projects', current: false },
        { name: 'Bog\'lanish', href: '/contact', current: true },
      ]
    return (
        <Layout navigation={navigation}>
            <Head>
        <title>Pi Bro jamiyatining rasmiy web sahifasi | Bog'lanish</title>
        <link rel="icon" href="/RespPiBro.png" />
      </Head>
          <div className='bg-gradient-to-r from-rose-800 to-rose-400 text-left flex justify-center items-start p-10 flex-col'>
          
          <h1 className='text-4xl font-bold text-white tracking-wide'>
             Pi Bro jamoasi <br/>bilan bog'lanish!
          </h1>
        </div>
        <h3 className="text-2xl font-bold m-10">Biz bilan bog'lanish uchun <a href="mailto:raspberrypibro231021@gmail.com" className="underline text-blue-500">Email</a> imizga yozing {')'}</h3>
        <p className="text-xl m-10">yoki Ijtimoiy tarmoqlar orqali bizga yozing:</p>
        <div className="my-6">
                <a className="ml-10 mr-5" href="https://instagram.com/rasppibro"><FontAwesomeIcon icon={faInstagram} size="2x" className="hover:text-pink-400 transition-all ease-in duration-300 delay-150"/></a>
                <a className="mx-5" href="https://facebook.com/rasppibro"><FontAwesomeIcon icon={faFacebook} size="2x" className="hover:text-blue-500 transition-all ease-in duration-300 delay-150"/> </a>
                <a className="mx-5" href="https://telegram.me/rasppibro"><FontAwesomeIcon icon={faTelegram} size="2x" className="hover:text-blue-300 transition-all ease-in duration-300 delay-150"/> </a>
                <a className="mr-0 ml-5" href="https://reddit.com/u/rasppibro"><FontAwesomeIcon icon={faReddit} size="2x" className="hover:text-orange-400 transition-all ease-in duration-300 delay-150"/></a>
            </div>
            <p className="m-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea sint adipisci dicta, illum deleniti expedita reiciendis ducimus. Perspiciatis magni exercitationem est quis autem illo quam facilis excepturi distinctio placeat!</p>
        </Layout>
    )
}

export default Contact
