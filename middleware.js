import createMiddleware from 'next-intl/middleware';
export default createMiddleware({
  defaultLocale: 'en',
  locales: ['en', 'tr', 'ru'],
 
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(tr|en|ru)/:path*']
};