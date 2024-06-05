import { redirect } from 'next/navigation'
import { auth } from "@clerk/nextjs/server";
import { getUserInfo } from "@/app/actions";
import { SiteHeader } from "@/components/site-header"
import Authorization from "@/components/home/Authorization";
import Authentication from "@/components/home/Authentication";
import Banner from "@/components/home/Banner";
import { getTranslations } from 'next-intl/server';


export default async function IndexPage() {
  const t = await getTranslations('Home');

  const { userId } = auth();
  let userinfo = null;
  console.log('userId------->', userId)

  if (userId) {
    const { code, user } = await getUserInfo(userId);
    if (code === 0 && user?.length) {
      userinfo = user?.[0];
      if (userinfo?.role === 1) {
        redirect('/student')
      } else if (userinfo?.role === 10) {
        redirect('/teacher')
      }
    }
  }

  return (
    <section>
      <SiteHeader />
      <div className="pt-20 absolute inset-0 z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="pt-20 absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
          <div className="flex w-10/12 mx-auto pt-20">
            <div className="w-1/2">
              <h1 className="mt-4 text-6xl mb-6 font-bold text-black leading-normal" dangerouslySetInnerHTML={{ __html: t.raw('title') }}></h1>
              {!userId && <Authorization />}
              {userId && !userinfo?.role && <Authentication uid={userId}/>}
            </div>
            <div className="w-1/2">
              <Banner></Banner>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
