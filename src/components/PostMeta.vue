<template>
   <div class="post-meta">
      Opublikowano: {{ post.date }}
      <template v-if="post.timeToRead">
        <strong>Czas czytania: {{ post.timeToRead }} min.</strong>
      </template>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
.post-meta {
  font-size: .8em;
  opacity: .8;
}
</style>