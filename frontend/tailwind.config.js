export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      keyframes: {
        slideIn: {
          '20%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        hoverShadow: {
          '0%': { boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
          '100%': { boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)' },
        },
        unhoverShadow: {
          '0%': { boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)' },
          '100%': { boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        expand: {
          '0%': { maxHeight: '0' },
          '100%': { maxHeight: '100vh' }, // 根据需要调整为 maxHeight: '10vh'
        },
        collapse: {
          '0%': { maxHeight: '100vh' }, // 根据需要调整
          '100%': { maxHeight: '0' },
        },
        commentExpand: {
          '0%': { maxHeight: '20vh' },
          '100%': { maxHeight: '100vh' }, // 可以根据实际需要调整
        },
        commentCollapse: {
          '0%': { maxHeight: '100vh' },
          '100%': { maxHeight: '20vh' },
        },
      },
      animation: {
        slideIn1: 'slideIn 0.8s ease-out forwards',
        slideIn2: 'slideIn 0.8s ease-out forwards 0.3s',
        slideIn3: 'slideIn 0.8s ease-out forwards 0.6s',
        slideIn4: 'slideIn 0.8s ease-out forwards 0.9s',
        slideInImage: 'slideInRight 0.8s ease-out forwards 0.5s',
        hoverShadow: 'hoverShadow 0.3s ease-in-out forwards',
        unhoverShadow: 'unhoverShadow 0.3s ease-in-out forwards',
        fadeIn: 'fadeIn 0.4s ease-out forwards',
        slideDown: 'slideDown 0.3s ease-in-out forwards',
        slideUp: 'slideUp 0.3s ease-in-out forwards',
        expand: 'expand 0.5s ease-in forwards',
        collapse: 'collapse 0.5s ease-out forwards',
        commentExpand: 'commentExpand 1s ease-in forwards',
        commentCollapse: 'commentCollapse 1s ease-out forwards',
      },
      colors: {
        themeColor: "#6D8552",
      },
    },
  },
  plugins: [],
}
