<template>
    <div>
        <ul>
            <learning-resource 
            v-for="resource in injectResources" 
            :key="resource.id"
            :propID="resource.id"
            :propTitle="resource.title"
            :propDescription="resource.description"
            :propLink="resource.link">
            </learning-resource>
        </ul>  
    </div>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default{
    components:{
        'learning-resource' : LearningResource
    },
    inject: ['injectResources']
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>