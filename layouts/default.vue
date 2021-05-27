<template>
  <div>
    <div
      class="flex flex-col h-page bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur"
    >
      <Header />
      <Nuxt />
    </div>
    <NavigationMobile />
  </div>
</template>

<style>
h1 {
  @apply text-3xl my-6 dark:text-gray-400 font-trebuchet;
}

p,
ul,
ol {
  @apply dark:text-gray-200;
}

p {
  @apply mt-4;
}

ul,
ol {
  @apply list-inside list-disc pl-8;
}

.container {
  @apply max-w-5xl;
}

body {
  background: url("@/assets/images/owl.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center top;
  @apply font-lucida;
}

a.selected {
  @apply bg-hd-orange border-hd-orange border-2 border-solid rounded;
}

a.nav:not(.selected):hover {
  @apply border-b-2 border-gray-500 border-solid;
}
</style>
