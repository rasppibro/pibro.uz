import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout'

export default function Home() {
  const navigation = [
    { name: 'Asosiy', href: '/', current: true },
    { name: 'Jamoa', href: '/team', current: false },
    { name: 'Loyihalar', href: '/projects', current: false },
    { name: 'Bog\'lanish', href: '/contact', current: false },
  ]
  return (
    <>
      <Head>
        <title>Pi Bro jamiyatining rasmiy web sahifasi | Asosiy</title>
        <link rel="icon" href="/RespPiBro.png" />
      </Head>

      <main>
        <Layout navigation={navigation}>
          <div className='bg-gradient-to-r from-rose-800 to-rose-400 text-left flex justify-center items-start p-10 flex-col'>
          
            <h1 className='text-4xl font-bold text-white tracking-wide'>
               Pi Bro jamiyatining <br/>rasmiy blog sahifasi !
            </h1>
            <p className='text-xl text-white tracking-wide my-6'>Ushbu blog orqali siz Raspberry Pi haqida ma'lumot olishingiz mumkin </p>
          </div>
          <h1 className='text-4xl font-bold text-center my-4 tracking-wide'>
              Yangiliklardan:
            </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10'>
              <div className="animate-pulse rounded-2xl p-10 border-2 border-gray-800 hover:shadow-xl transition ease-in-out duration-300">
  <div className="animate-pulse flex space-x-4">
    <div className="rounded-full bg-gray-700 h-10 w-10"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-gray-700 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-gray-700 rounded col-span-2"></div>
          <div className="h-2 bg-gray-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-gray-700 rounded"></div>
      </div>
    </div>
  </div>

              </div>
              <div className="animate-pulse rounded-2xl p-10 border-2 border-gray-800 hover:shadow-xl transition ease-in-out duration-300">
              <div className="animate-pulse flex space-x-4">
    <div className="rounded-full bg-gray-700 h-10 w-10"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-gray-700 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-gray-700 rounded col-span-2"></div>
          <div className="h-2 bg-gray-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-gray-700 rounded"></div>
      </div>
    </div>
  </div>
              </div>
              <div className="animate-pulse rounded-2xl p-10 border-2 border-gray-800 hover:shadow-xl transition ease-in-out duration-300">
              <div className="animate-pulse flex space-x-4">
    <div className="rounded-full bg-gray-700 h-10 w-10"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-gray-700 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-gray-700 rounded col-span-2"></div>
          <div className="h-2 bg-gray-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-gray-700 rounded"></div>
      </div>
    </div>
  </div>
              </div>
              <div className="animate-pulse rounded-2xl p-10 border-2 border-gray-800 hover:shadow-xl transition ease-in-out duration-300">
              <div className="animate-pulse flex space-x-4">
    <div className="rounded-full bg-gray-700 h-10 w-10"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-gray-700 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-gray-700 rounded col-span-2"></div>
          <div className="h-2 bg-gray-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-gray-700 rounded"></div>
      </div>
    </div>
  </div>
              </div>
              
          </div>
        </Layout>
      </main>
    </>
  )
}
