<template>
  <Layout>
    <div v-html="$page.about.content"></div>
  </Layout>
</template>

<page-query>
query About{
  about: about(id: "21893d17fe66ade8bee9ccd1dc8cc553") {
    id
    title
		content
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>
