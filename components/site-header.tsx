import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Mail } from "lucide-react"
import { useTranslations } from 'next-intl';
import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { Button } from './ui/button'
import LocalToggle from '@/components/locale-toggle'

export function SiteHeader() {
  const t = useTranslations('Login');

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div className="container flex items-center space-x-4 justify-between">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <LocalToggle></LocalToggle>
          <SignedOut>
            <SignInButton>
              <Button><Mail className="mr-2 h-4 w-4" />{t('login')}</Button>
            </SignInButton >
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  )
}
