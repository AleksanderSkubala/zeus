<template>
  <Layout>
    <h3 class="text-center space-bottom heading">
      Harcerski Turniej Gier Planszowych
    </h3>
    <div class="text-justify space-around">
      <p>Harcerski Turniej Gier Planszowych to  miejsce gdzie możesz pograć w planszówki (i nie tylko 😊), nawiązać nowe znajomości i przede wszystkim <strong>dobrze się bawić</strong>. Jeżeli chcesz miło spędzić weekend, zrelaksować się i może nawet wrócić z jakąś nagrodą - zapisz się czym prędzej, bo ilość miejsc jest ograniczona. 😉</p>
    </div>

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
        cover_image (width: 770, height: 380, blur: 10)
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
.heading {
  margin-top: calc(var(--header-height) + 1.5em);
}
</style>

