'use client'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"

export default function Authentication({ uid }: { uid: string}) {
  const router = useRouter()
  const { toast } = useToast()
  const [role, setRole] = useState<string>('1')

  const handleSubmit = async () => {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ uid: uid, role: parseInt(role) }),
    })
    const data = await res.json()
    
    if (data.error) {
      toast({
        title: "提交失败，请稍后再试",
        description: data.error.message,
      })
    } else {
      if(role === '1') {
        router.push('/student') 
      } else {
        router.push('/teacher')
      }
    }
  }

  return (
    <section className="flex w-10/12 h-12">
      <div className="flex-1 h-full">
        <Select defaultValue="1" onValueChange={val => { setRole(val) }}>
          <SelectTrigger id="role">
            <SelectValue placeholder="请选择一个角色" />
          </SelectTrigger>
          <SelectContent position="popper" className="h-full">
            <SelectItem value="1">我是学生</SelectItem>
            <SelectItem value="10">我是老师</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button className="w-200 ml-6" onClick={handleSubmit}>立即进入</Button>
    </section>
  )
}