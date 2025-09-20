import type { NextConfig } from "next";
// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public', // مسیر ذخیره‌سازی فایل‌های Service Worker
  register: true, // ثبت خودکار Service Worker
  skipWaiting: true, // فعال‌سازی سریع نسخه جدید Service Worker
  // disable: process.env.NODE_ENV === 'development', // غیرفعال در حالت توسعه (اختیاری)
});

module.exports = withPWA({
  // تنظیمات دیگر Next.js شما اینجا می‌آید
  reactStrictMode: true,
  // ...
});
const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
