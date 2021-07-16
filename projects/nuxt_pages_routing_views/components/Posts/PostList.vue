<template>
<section class="post-list">
      <PostPreview
      v-for="(post) in propsPosts" 
      :key="post.id"
      :propsId="post.id"
      :propsIsAdmin="isAdmin"
      :propsThumbnail="post.thumbnailLink"
      :propsTitle="post.title"
      :propsPreviewText="post.previewText" />
    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview';

export default{
  components: {
    PostPreview
  },
  props: {
      isAdmin: {
          type: Boolean,
          default: false
      },
      propsPosts: {
        type: Array,
        required: true
      }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>