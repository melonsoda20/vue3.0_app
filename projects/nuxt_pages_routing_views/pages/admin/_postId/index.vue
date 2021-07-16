<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm
             :post="loadedPost" />
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm';

export default{
    layout: 'admin',
    components: {
        AdminPostForm
    },
    data(){
        return {
            loadedPost: {
                author: 'Teddy',
                title: 'My post',
                content: 'Super Amazing content',
                thumbnailLink: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/mlogo/MET-70025.jpg'
            }
        }
    }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>