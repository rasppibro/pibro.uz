import Link from "next/link";

export default function Custom404() {
    return (
        <>
        <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-rose-600 to-rose-400">
  <div className="px-40 py-20 bg-white rounded-md shadow-xl">
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-rose-600 text-9xl">404</h1>

      <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
        <span className="text-red-500">Oops!</span> Sahifa topilmadi 
      </h6>

      <p className="mb-8 text-center text-gray-500 md:text-lg">
        Siz qidirayotgan sahifa topilmadi
      </p>

      <Link href='/'><a className="px-6 py-2 text-sm font-semibold text-rose-800 bg-rose-100 rounded-md">Bosh sahifaga qaytish</a></Link>
    </div>
  </div>
</div>
</>
    )
}