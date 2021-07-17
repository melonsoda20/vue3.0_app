import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts){
                state.loadedPosts = posts;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context){
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [                            { 
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
                          }]);
                        resolve();
                        },1000);
                    // reject(new Error());
                });
            },
            setPosts(vuexContext, posts){
                vuexContext.commit('setPosts', posts);
            }
        },
        getters: {
            loadedPosts(state){
                return state.loadedPosts;
            }
        }
    });
};

export default createStore;