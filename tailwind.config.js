// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Add this if you’re using the app directory
    './pages/**/*.{js,ts,jsx,tsx}', // Include this if you're using pages
    './components/**/*.{js,ts,jsx,tsx}', // Include this if you’re using components
  ],
  theme: {
    extend: {
      fontSize: {
        '8xl': '6rem',  // Or adjust this value as needed
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-black',
    'bg-opacity-50',
    'fixed',
    'inset-0',
    'flex',
    'justify-center',
    'items-center',
    'z-50',
    'w-[1400px]',
    'h-[1050px]',
    'text-white',
    'absolute',
    'top-4',
    'right-4',
    'text-3xl',
    'cursor-pointer',
    'object-contain',
    'transition-all',
    'duration-300',
    'transform',
    // Add other dynamic classes that might be purged
  ],
}
