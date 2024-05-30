import Image from "next/image"

export default function NotLoggedIn() {
  return (
    <section className="container flex h-screen w-screen overflow-hidden">
      <div className="w-1/4">
        hello
      </div>
      <div className="flex-1 justify-end items-end">
        {/* <Image src={'/banner.png'} alt="banner" width={800} height={800} className="object-cover"></Image> */}
      </div>
    </section>
  )
}