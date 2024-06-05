import Link from 'next/link'
import Image from 'next/image'
import {
  SignedIn,
  UserButton
} from '@clerk/nextjs'

interface LayoutProps {
  children: React.ReactNode
}
export default function StudentLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b text-white">
        <div className="container mx-auto flex items-center justify-between h-16">
          <div className="flex items-center space-x-6">
            <Link href="/">
              <span className="flex items-center space-x-2">
                <Image src={'/logo.png'} priority={true} alt="LG" width={196} height={52}></Image>
              </span>
            </Link>
          </div>
          <nav className="flex gap-6">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-blue-400 text-white">
        <div className="container mx-auto h-16 flex items-center justify-center">
          <p>© 2021 LG</p>
        </div>
      </footer>
    </div>
  )

}