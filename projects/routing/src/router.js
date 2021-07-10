import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        { 
            name: 'teams',
            path: '/teams', 
            meta: { needsAuth: true },
            components: {
                main: TeamsList,
                footer: TeamsFooter
            }, 
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },
            ] 
        }, // our-domain.com
        { 
            path: '/users', 
            components: {
                main: UsersList,
                footer: UsersFooter
            },
            beforeEnter(to, from, next){
                console.log('users beforeEnter');
                console.log(to, from);
                next();
            }
        },
        { 
            path: '/:notFound(.*)', 
            components: {
                main: NotFound
            } 
        }
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition){
        // console.log(to, from, savedPosition);
        if(savedPosition){
            return savedPosition;
        }
        else{
            return {
                left: 0,
                top: 0
            };
        }
    }
});

router.beforeEach(function(to, from, next) {
    console.log('Global before each');
    console.log(to, from);
    if(to.meta.needsAuth){
        console.log('Needs auth!');
        next();
    }
    else{
        next();
    }
    // if(to.name === 'team-members'){
    //     next();
    // }
    // else{
    //     next({ 
    //         name: 'team-members',   
    //         params: { teamId: 't2' } 
    //     });
    // }
    next();
});

router.afterEach(function(to, from) {
    console.log('Global after each');
    console.log(to, from);
});

export default router;