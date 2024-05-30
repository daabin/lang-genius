import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Mail } from "lucide-react"
import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { Button } from './ui/button'

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full">
      <div className="container flex items-center space-x-4 justify-between">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <SignedOut>
              <SignInButton>
                <Button><Mail className="mr-2 h-4 w-4" />登录</Button>
              </SignInButton >
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </nav>
        </div>
      </div>
    </header>
  )
}
