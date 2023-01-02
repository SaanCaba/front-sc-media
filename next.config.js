/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains:["www.shutterstock.com","i.gr-assets.com","static.nike.com", "www.pngall.com", "static.vecteezy.com", "o.remove.bg", "www.pngplay.com", "d22fxaf9t8d39k.cloudfront.net", "res.cloudinary.com"]
  }  
}

module.exports = nextConfig
