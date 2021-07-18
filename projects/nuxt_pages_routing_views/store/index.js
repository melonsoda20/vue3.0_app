import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts){
                state.loadedPosts = posts;
            },
            addPost(state, post){
                state.loadedPosts.push(post);
            },
            editPost(state, editedPost){
                const postIndex = state.loadedPosts.findIndex(
                    post => post.id === editedPost.id
                );
                state.loadedPosts[postIndex] = editedPost;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context){
                // return new Promise((resolve, reject) => {
                //     setTimeout(() => {
                //         vuexContext.commit('setPosts', [                            { 
                //             id: '1', 
                //             title: 'First Post', 
                //             previewText: 'This is our first post!', 
                //             thumbnailLink: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/mlogo/MET-70025.jpg' 
                //           },
                //           { 
                //             id: '2', 
                //             title: 'Second Post', 
                //             previewText: 'This is our second post!', 
                //             thumbnailLink: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/mlogo/MET-70025.jpg' 
                //           },
                //           { 
                //             id: '3', 
                //             title: 'Third Post', 
                //             previewText: 'This is our third post!', 
                //             thumbnailLink: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/mlogo/MET-70025.jpg' 
                //           }]);
                //         resolve();
                //         },1000);
                //     // reject(new Error());
                // });
                return axios.get('https://nuxt-blog-practice-2d941-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
                    .then(res => {
                        const postsArray = [];
                        for(const key in res.data){
                            postsArray.push({ ...res.data[key], id: key });
                        }
                        vuexContext.commit('setPosts', postsArray);
                    })
                    .catch(e => context.error(e));
            },
            setPosts(vuexContext, posts){
                vuexContext.commit('setPosts', posts);
            },
            addPost(vuexContext, post){
                const createdPost = {
                    ...post,
                    updatedDate: new Date()
                };
                return axios.post('https://nuxt-blog-practice-2d941-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', createdPost)
                    .then(result => {
                        vuexContext.commit('addPost', { ...createdPost, id: result.data.name });
                    })
                    .catch(e => console.log(e));
            },
            editPost(vuexContext, editedPost){
                return axios.put('https://nuxt-blog-practice-2d941-default-rtdb.asia-southeast1.firebasedatabase.app/posts/' + editedPost.id + '.json', editedPost)
                .then(res => {
                    vuexContext.commit('editPost', editedPost);
                })
                .catch(e => console.log(e));
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