<template>
<section class="post-list">
      <PostPreview
      propsId="1"
      :propsIsAdmin="isAdmin"
      propsThumbnail="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/mlogo/MET-70025.jpg"
      propsTitle="Hello there!"
      propsPreviewText="This is my first post" />
      <PostPreview 
      propsId="2"
      :propsIsAdmin="isAdmin"
      propsThumbnail="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/mlogo/MET-70025.jpg"
      propsTitle="Hello there - second!"
      propsPreviewText="This is my second post" />
      <PostPreview 
      propsId="3"
      :propsIsAdmin="isAdmin"
      propsThumbnail="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/mlogo/MET-70025.jpg"
      propsTitle="Hello there - third!"
      propsPreviewText="This is my third post" />
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