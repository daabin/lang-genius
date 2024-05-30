import { auth } from "@clerk/nextjs/server";
import { getUserInfo } from "@/app/actions";
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

  if (!userId) {
    return <NotLoggedIn />
  }

  if (!userinfo) {
    return <WithoutRole />
  }

  if(userinfo?.role) {
    return <h1>Home</h1>
  }

  return <WithoutRole />
}
