/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        appDir: true
    },
    optimizeFonts: false,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.mp3$/,
            use: {
                loader: "url-loader"
            }
        });
        return config;
    },
    images: {
        domains: ["user-images.githubusercontent.com", "cdn.hashnode.com"]
    },
    fontLoaders: [{
        loader: "@next/font/google",
        options: {
            subsets: ["latin"],
            weight: [
                "400",
                "500",
                "600",
                "700",
                "800"
            ]
        }
    }, ]
};

module.exports = nextConfig;