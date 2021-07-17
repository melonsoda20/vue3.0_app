<template>
  <div class="posts-page">
      <PostList :propsPosts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList';

export default{
  components: {
    PostList
  },
  asyncData(context, callback){
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          { 
            id: '1', 
            title: 'First Post', 
            previewText: 'This is our first post!', 
            thumbnailLink: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/mlogo/MET-70025.jpg' 
          },
          { 
            id: '2', 
            title: 'Second Post', 
            previewText: 'This is our second post!', 
            thumbnailLink: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/mlogo/MET-70025.jpg' 
          },
          { 
            id: '3', 
            title: 'Third Post', 
            previewText: 'This is our third post!', 
            thumbnailLink: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/mlogo/MET-70025.jpg' 
          }
        ]
      })
    },1000)
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>

