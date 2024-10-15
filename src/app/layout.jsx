import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";

export const metadata = {
  title: "GlobalWatch",
  description:
    "Get updated on the latest news about Global Crisis and help those that are in need.",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main>
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>

    </html>
  );
};

export default Layout;
