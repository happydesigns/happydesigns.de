<template>
<!-- This is a duplicate of _slug.vue because nuxt/images seems to be unable to resolve assets from _slug -->
  <main>
    <section v-for="doc in docs" :key="doc.slug" :id="doc.slug">
      <nuxt-content :document="doc" />
    </section>
  </main>
</template>

<script>
export default {
  // asyncData is available in Nuxt's pages folder but not in Vue components.
  async asyncData({ $content, params }) {
    const folder = params.slug || "index";
    const docs = await $content({ deep: true })
      .where({ dir: "/" + folder })
      .only(["slug", "path", "orderPage", "body", "dir"])
      .sortBy("orderPage")
      .fetch();
    return { docs };
  }
};
</script>
