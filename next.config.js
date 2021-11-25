/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "_variables.scss";`
  }
}
