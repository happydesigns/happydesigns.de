<template>
  <nav>
    <ul :class="ul" class="px-0 list-none">
      <li v-for="doc in docs" :key="doc.slug">
        <nuxt-link :to="doc.link" :class="[{'selected': $nuxt.$route.path == doc.link}, a]">{{ doc.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      docs: [],
    };
  },
  props: {
    ul: String,
    a: String
  },
  async fetch() {
    this.docs = await this.$content({ deep: true })
      .only(["title", "slug", "link", "nav"])
      .where({ nav: { $gt: 0 } })
      .sortBy("nav")
      .fetch();
  },
};
</script>
