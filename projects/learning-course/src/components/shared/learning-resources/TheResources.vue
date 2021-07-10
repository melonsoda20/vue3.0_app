<template>
    <div>
        <base-card>
            <base-button 
            @click="setSelectedTab('stored-resources')"
            :propMode="storedResButtonMode">Stored Resources</base-button>
            <base-button 
            @click="setSelectedTab('add-resource')"
            :propMode="addResButtonMode">Add Resource</base-button>
        </base-card>
        <keep-alive>
            <component :is="selectedTab">

            </component>
        </keep-alive>
    </div>
</template>

<script>
    import StoredResources from './StoredResources.vue';
    import AddResource from './AddResource.vue';
    export default{
        components:{
            'stored-resources' : StoredResources,
            'add-resource' : AddResource
        },
        data() {
            return {
                selectedTab: 'stored-resources',
                storedResources: [
                    { 
                        id: 'official-guide',
                        title: 'Official Guide',
                        description: 'The official Vue.js documentation',
                        link: 'https://vuejs.org' 
                    },
                    { 
                        id: 'google',
                        title: 'Google',
                        description: 'Learn to google...',
                        link: 'https://google.com' 
                    }
                ]
            }
        },
        provide(){
            return {
                injectResources: this.storedResources,
                injectAddResource: this.addResource,
                injectDeleteResource: this.removeResource
            }
        },
        computed: {
            storedResButtonMode(){
                return this.selectedTab === 'stored-resources' ? null : 'flat'
            },
            addResButtonMode(){
                return this.selectedTab === 'add-resource' ? null : 'flat';
            }
        },
        methods: {
            setSelectedTab(tab){
                this.selectedTab = tab;
            },
            addResource(title, description, url){
                const newResource ={
                    id: new Date().toISOString(),
                    title: title,
                    description: description,
                    link: url
                };
                this.storedResources.push(newResource);
                this.selectedTab = 'stored-resources';
            },
            removeResource(resourceID){
                const resIndex = this.storedResources.findIndex(res => res.id === resourceID);
                this.storedResources.splice(resIndex, 1);
            }
        },
    }
</script>

