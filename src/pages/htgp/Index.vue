<template>
  <Layout>
    <h3 class="text-center space-bottom">
      Harcerski Turniej Gier Planszowych
    </h3>
    <div class="text-justify space-around" v-html="$page.about.content"></div>

    <div class="posts">
      <h5 class="text-center space-bottom" v-if="!$page.postsHtgp.edges">Jak widać świeci pustkami... Staramy się to zmienić, wróć za jakiś czas. 😉</h5>
      <PostCard v-for="edge in $page.postsHtgp.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
  </Layout>
</template>

<page-query>
query {
  postsHtgp: allPostHtgp {
    edges {
      node {
        id
        title
        date (format: "D/MM/YYYY")
        timeToRead
        description
        ...on PostHtgp {
          id
          title
          path
        }
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
  about: about(id: "cd87383214cba0ae62c0f1224cd8348f") {
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
    title: 'HTGP',
  }
}
</script>

<style lang="scss">

</style>

