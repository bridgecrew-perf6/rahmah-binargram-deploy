// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// const RegistrationPage = () => {
//   return (
//     <main>
//       <form>
//         <div className="min-h-screen bg-gray-100 flex items-center">
//           <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
//             <div className="py-12 p-10 bg-white rounded-xl">
//               <div className="mb-6">
//                 <label className="mr-4 text-gray-700 font-bold inline-block mb-2" htmlFor="username">
//                   <div>Username</div>
//                   <input type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" name="username" placeholder="Input your username..." />
//                 </label>
//               </div>
//               <div className="mb-6">
//                 <label className="mr-4 text-gray-700 font-bold inline-block mb-2" htmlFor="email">
//                   <div>Email</div>
//                   <input type="text" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" name="email" placeholder="Input your email..." />
//                 </label>
//               </div>
//               <div className="">
//                 <label className="mr-4 text-gray-700 font-bold inline-block mb-2" htmlFor="password">
//                   <div>Password</div>
//                   <input type="text" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" name="password" type="password" placeholder="Input your password..." />
//                 </label>
//               </div>
//               <button className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300" type="submit">Create your account</button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </main>
//   )
// };

// export default RegistrationPage;

import Head from "next/head";
import HomeContainer from "../containers/home";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>BinarGram</title>
      </Head>
      <HomeContainer />
    </>
  )
}

export default HomePage;