export default defineNuxtConfig({
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'KGu2qWHXWypQyA9FYouyewtt',
        // apiOptions: {
        //   region: "us" // When creating your space in US region (EU default)
        // }
      },
    ],
  ],
  app: {
    head: {
      script: [{ src: 'https://cdn.tailwindcss.com' }],
    },
  },
});
