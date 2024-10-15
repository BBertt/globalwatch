import { redirect } from "next/navigation";
import Layout from "./layout";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="mt-10">This will be the home page</h1>
      <h1>Welcome to My Next.js App</h1>
      <p>This is the homepage of your Next.js application.</p>
    </div>
  );
};

export default page;

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
