<template>
  <Layout>
    <div class="text-justify space-around">
      <p>Nasza drużyna to 158 Poznańska Drużyna Starszoharcerska "Zeus". Działamy na osiedlu Przyjaźni. uwielbiamy dzielić się naszymi zainteresowaniami i stawiać sobie coraz to nowe wyzwania. Jesteśmy dowodem na to, że drużyna to miejsce do rozwijania się nie tylko w obszarach związanych z harcerstwem. Nie wierzysz? Przyjdź i sam się przekonaj!</p>
    </div>
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
