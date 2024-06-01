import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers'

export default getRequestConfig(async () => {
  const cookieStore = cookies()
  const localeCookie = cookieStore.get('__locale')
  const locale = localeCookie?.value || 'zh'

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});