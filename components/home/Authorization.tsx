import Image from "next/image"
import {
  SignInButton,
  SignedOut,
} from '@clerk/nextjs'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl';
import { Mail } from "lucide-react"

export default function Authorization() {
  const t = useTranslations('Home');

  return (
    <div>
      <SignedOut>
        <SignInButton>
          <Button className="px-6 py-8 text-2xl"><Mail className="mr-2 h-6 w-6" />{t('login')}</Button>
        </SignInButton >
      </SignedOut>
    </div >
  )
}