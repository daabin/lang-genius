import { auth } from "@clerk/nextjs/server";
import { getUserInfo } from "@/app/actions";
import { SiteHeader } from "@/components/site-header"
import NotLoggedIn from "@/components/home/not-logged-in";
import WithoutRole from "@/components/home/without-role";

export default async function IndexPage() {
  const { userId } = auth();
  let userinfo = null;
  console.log('userId------->', userId)

  if (userId) {
    const { code, user } = await getUserInfo(userId);
    if (code === 0 && user?.length) {
      userinfo = user?.[0];
    }
  }

  return (
    <section>
      <SiteHeader />
      <div className="pt-20 absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="pt-20 absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
          Hello Genius
        </div>
      </div>
    </section>
  )
}
