<template>
  <ul class="flex w-full list-none px-0" :class="ul" :style="{ minHeight: 'calc(100vw / ' + aspectRatio + ')'}">
    <li v-for="src in srcs" :key="src">
      <nuxt-img class="flex-auto" v-bind="src" loading="lazy" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    srcs: Array,
    aspectRatio: Number,
    ul: String
  },
  mounted() {
    console.log(this.srcs);
  },
};
</script>
