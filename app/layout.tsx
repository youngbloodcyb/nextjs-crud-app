import Link from "next/link"
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="retro">
      <head />
        <body>
          <main>
            <nav>
            <div className="navbar bg-base-100">
              <div className="flex-1">
                  <Link href="/" className="btn btn-ghost normal-case text-xl">Home</Link>
              </div>
              <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                  <li><Link href="/notes">Notes</Link></li>
                  <li tabIndex={0}>
                  </li>
                  <li><a>Coming soon...</a></li>
                </ul>
              </div>
            </div>
            </nav>
            
          {children}
          </main>
        </body>
    </html>
  )
}
