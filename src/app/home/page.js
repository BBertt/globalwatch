import { getPosts } from "@/_actions/postAction";
import Layout from "../layout";

export default function Home() {
  // const [data, setData] = useState([]);
  // const [errMsg, setErrMsg] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data, errMsg } = await getPosts();
  //     if (errMsg) {
  //       setErrMsg(errMsg);
  //     } else {
  //       setData(data);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // if (errMsg) {
  //   return (
  //     <RootLayout>
  //       <h1>{errMsg}</h1>
  //     </RootLayout>
  //   );
  // }

  return (
    <Layout>
      <h1>Welcome to My Next.js App</h1>
      <p>This is the homepage of your Next.js application.</p>
    </Layout>
  );
}
