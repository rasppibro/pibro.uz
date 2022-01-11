import Head from 'next/head'
import Link from 'next/link'
import Layout from './components/Layout'

function Home(props) {
  const navigation = [
    { name: 'Asosiy', href: '/', current: true },
    { name: 'Jamoa', href: '/team', current: false },
    { name: 'Loyihalar', href: '/projects', current: false },
    { name: 'Bog\'lanish', href: '/contact', current: false },
  ]

  console.log(props.data);

  return (
    
    <>
      <Head>
        <title>Pi Bro jamiyatining rasmiy web sahifasi | Asosiy</title>
        <meta name="description" content="Pi Bro Jamiyatining Rasmiy Web Sayti."/>
        <link rel="icon" href="/favicon.ico" />
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
              {props.data.map(item=>(
                <Link href={`/blogs/${item.id}`} key={item.id}>
                <div className=" rounded-2xl  shadow-xl transition ease-in-out duration-300 h-max max-h-max min-h-max" >
                  <div className='rounded-t-2xl' style={{backgroundImage: `url(${item.photo})`, backgroundSize: "cover", backgroundPosition: "center",width: '100%', height: "300px"}}/>
                  <h3 className='font-bold text-lg m-4'>{item.title}</h3>
                  <p className='m-4'>{item.summary}</p>
                  <Link href={`/blogs/${item.id}`}>
                    <button className="bg-rose-800 mb-4 rounded-md mt-0 mx-4 py-2 px-4 shadow-xl text-white">Batafsil</button>
                  </Link>
                </div>
                </Link>
              ))}
              
              
          </div>
        </Layout>
      </main>
    </>
  )
}

export async function getServerSideProps(){
  const response = await fetch('http://blogapibro.herokuapp.com/api/v1/');
  const data = await response.json()

  return {
    props:{
      data
    }
  }
}

export default Home