<template>
    <nuxt-link :to="postLink" class="post-preview">
    <article >
        <div 
            class="post-thumbnail" 
            :style="{backgroundImage:'url(' + propsThumbnail + ')'}">

        </div>
        <div class="post-content">
        <h1>{{ propsTitle }}</h1>
        <p>{{ propsPreviewText }}</p>
        </div>
    </article>
    </nuxt-link>
</template>

<script>
export default{
    name: 'PostPreview',
    props: {
        propsId:{
            type: String,
            required: true
        },
        propsIsAdmin:{
          type: Boolean,
          required: true
        },
        propsTitle:{
            type: String,
            required: true
        },
        propsPreviewText: {
            type: String,
            required: true
        },
        propsThumbnail: {
            type: String,
            required: true
        }
    },
    computed: {
      postLink(){
        return this.propsIsAdmin ? '/admin/' + this.id : '/posts/' + this.id;
      }
    }
}
</script>

<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>