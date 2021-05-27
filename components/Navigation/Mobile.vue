<template>
  <div class="fixed flex justify-center z-40 bg-white white bottom-0 w-full h-14 shadow-8dp">
    <button
      v-for="doc in docs"
      :key="doc.slug"
      class="h-full max-w-tap w-full px-4 focus:outline-none"
    >
      {{ doc.title }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      docs: [],
    };
  },
  async fetch() {
    this.docs = await this.$content({ deep: true })
      .only(["title", "slug", "link", "bottomNav", "icon"])
      .where({ bottomNav: { $gt: 0 } })
      .sortBy("bottomNav")
      .fetch();
  },
};
</script>
