import "./globals.css";
import Link from 'next/link';
import { House, Folder, FileText} from "lucide-react";
export const metadata = {
  title: "Diviyya Shree",
  description: "Software Engineer — distributed systems, backend, fullstack",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <div id="grid-container">
         
            <header className="site-header">
          <nav className="navbar">


            <ul className="nav-links">
              <li><Link className="navLayout" href="/"><House className="navIcon" size={30}/></Link></li>
              <li><Link className="navLayout"  href="/projects"><Folder className="navIcon" size={30} /></Link></li>
              <li><Link className="navLayout"  href="/blog"><FileText className="navIcon" size={30}/> </Link></li>
            </ul>
          </nav>
        </header>
        <main className="main-content">{children}</main>

        </div>
       
      </body>
    </html>
  );
}
