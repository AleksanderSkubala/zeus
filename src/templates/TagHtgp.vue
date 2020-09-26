<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom">
      # {{ $page.tagHtgp.title }}
    </h1>

    <div class="posts">
      <PostCard v-for="edge in $page.tagHtgp.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
  </Layout>
</template>

<page-query>
query TagHtgp ($id: ID!) {
  tagHtgp (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on PostHtgp {
            title
            path
            date (format: "D/MM/YYYY")
            timeToRead
            description
            content
          }
        }
      }
    }
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
    title: 'Tags'
  }
}
</script>

<style lang="scss">

</style>

