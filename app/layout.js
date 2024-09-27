import { Inter } from "next/font/google";
import "./globals.css";
import {Roboto, Poppins} from "next/font/google"



const roboto = Roboto({
  weight:["400", "700", "900"],
  subsets: ["latin"],
  display: 'swap'
})
const poppins = Poppins({
  weight:["400", "700", "800"],
  subsets: ["latin"],
  display: 'swap'
})

import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: "App Ready Courses",
  description: "Learn Fullstack Web development, HTML5, CSS3, Database, Figma, Web hosting and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="synthwave" >
      <body className={`${poppins.className}`}>
        <Navbar />
        <main >{children}</main>
      </body>
    </html>
  );
}
