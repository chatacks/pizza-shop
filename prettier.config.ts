import { type Config } from 'prettier';

const config: Config = {
  singleQuote: true,
  singleAttributePerLine: true,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
