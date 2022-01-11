import Head from "next/head";
import Layout from "../components/Layout"
import Custom404 from '../404'


const Blog = (props) =>{
    const navigation = [
        { name: 'Asosiy', href: '/', current: true },
        { name: 'Jamoa', href: '/team', current: false },
        { name: 'Loyihalar', href: '/projects', current: false },
        { name: 'Bog\'lanish', href: '/contact', current: false },
      ]
      if (props.data.detail) {
        return <Custom404  />;
      }else{
          return(
        <Layout navigation={navigation}>
             <Head>
        <title> {props.data.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <div className='bg-gradient-to-r from-rose-800 to-rose-400 text-left flex justify-center items-start p-10 flex-col'>
          
          <h1 className='text-4xl font-bold text-white tracking-wide'>
             {props.data.title}
          </h1>
          <p className='text-xl text-white tracking-wide my-6'>{props.data.summary}</p>
          
        </div>
        <div className="bg-gray-200 p-5 sm:p-10">
              <div className="bg-white shadow-xl p-10 whitespace-pre-line" dangerouslySetInnerHTML={{__html: props.data.body}}></div>
          </div>
        </Layout>
    )
}
}

export const getServerSideProps = async ({
    params,
    res,
  }) => {
    try {
      const { id } = params;
      const result = await fetch(
        `http://blogapibro.herokuapp.com/api/v1/${id}`
      ).then((response) => response.json());
  
      return {
        props: {
          data: result,
        },
      };
    } catch {
      res.statusCode = 404;
      return {
        props: {},
      };
    }
  };

export default Blog