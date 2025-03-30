/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},  // ✅ Use the correct package
    autoprefixer: {},  // ✅ Keep autoprefixer
  },
};

export default config;

