"use client"

import { useRouter } from 'next/navigation'
import { Globe, Check, ChevronsUpDown } from "lucide-react"
import JsCookie from "js-cookie"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useEffect, useState } from 'react'

const languages = [
  { label: "English", value: "en" },
  { label: "中文简体", value: "zh" },
] as const


export default function SwitchLocale() {
  const [open, setOpen] = useState(false)
  const [originalLocale, setOriginalLocale] = useState('')
  const router = useRouter()

  useEffect(() => {
    setOriginalLocale(JsCookie.get("__locale") || "zh")
  }, [])

  const switchLocal = (locale: string) => {
    setOpen(false)
    setOriginalLocale(locale)
    JsCookie.set("__locale", locale)
    router.refresh()
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className={cn(
            "w-[150px] justify-between",
            !originalLocale && "text-muted-foreground",
            "mx-4"
          )}
        >
          <Globe />
          {languages.find(
            (language) => language.value === originalLocale
          )?.label}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-4">
        {languages.map((language) => (
          <div
            key={language.value}
            onClick={() => {
              switchLocal(language.value)
            }}
            className='flex justify-between py-2 px-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-md'
          >
            <p>{language.label}</p>
            <Check
              className={cn(
                "mr-2 h-4 w-4",
                language.value === originalLocale
                  ? "opacity-100"
                  : "opacity-0"
              )}
            />
          </div>
        ))}
      </PopoverContent>
    </Popover>
  )
}
