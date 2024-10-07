import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
  return (
    redirect('/home')
  )
}

export default page

// import { getPosts } from "@/_actions/postAction";

// export default async function Home() {

//   const { data, errMsg } = await getPosts();

//   if(errMsg)
//     return <h1>{errMsg}</h1>

//   return (
//     <main>
//       {
//         data.map(item => (
//           <h1 key={item._id}>{item.msg}</h1>
//         ))
//       }
//     </main>
//   );
// }