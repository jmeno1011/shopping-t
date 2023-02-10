/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 일단 보관 svg 파일 관련 코드 
  // npm i @svgr/webpack -D 로 다운하기
  // webpack: config => {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: ["@svgr/webpack"]
  //   });
  //   return config;
  // }
}

module.exports = nextConfig
