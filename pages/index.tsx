import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex justify-center dark:bg-black">
      <Head>
        <title>Next.js Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen justify-center items-center">
        <div className="container mx-auto">
          <div className="p-6 max-w-sm mx-auto bg-white dark:bg-black rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img className="h-12 w-12" src="https://www.flaticon.com/svg/vstatic/svg/331/331372.svg?token=exp=1614572618~hmac=135c3af94e038c3333fa4d2b1a51ce66" alt="ChitChat Logo" />
            </div>
            <div>
              <div className="text-xl font-medium dark:text-white">Next.js Boilerplate</div>
              <p className="text-gray-600 dark:text-gray-300">Author: Jerry Wang</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}