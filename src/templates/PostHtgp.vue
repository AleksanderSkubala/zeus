<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">
        {{ $page.postHtgp.title }}
      </h1>

      <PostMeta :post="$page.postHtgp" />

    </div>

    <div class="post content-box">
      <div class="post__header">
        <g-image alt="Cover image" v-if="$page.postHtgp.cover_image" :src="$page.postHtgp.cover_image" />
      </div>

      <div class="post__content" v-html="$page.postHtgp.content" />

      <div class="post__footer">
        <PostTags :post="$page.postHtgp" />
      </div>
    </div>

  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  metaInfo () {
    return {
      title: this.$page.postHtgp.title,
      meta: [
        {
          name: 'description',
          content: this.$page.postHtgp.description
        }
      ]
    }
  }
}
</script>

<page-query>
query PostHtgp ($id: ID!) {
  postHtgp: postHtgp (id: $id) {
    title
    path
    date (format: "D/MM/YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
  }
}
</page-query>

<style lang="scss">
.post-title {
  margin-top: calc(var(--header-height) + 1.5em);
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.post {

  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>
