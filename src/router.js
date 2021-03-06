import Vue from 'vue';
import Router from 'vue-router';
import AppHeader from './layout/AppHeader';
import AppFooter from './layout/AppFooter';
import Components from './views/Components.vue';
import Home from './views/Home.vue';
import Landing from './views/Landing.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Profile from './views/Profile.vue';
import Restaurants from './views/Restaurants.vue';
import RestaurantMenu from './views/RestaurantMenu.vue';
import ChooseMenu from './views/ChooseMenu.vue';

Vue.use(Router);

export default new Router({
	linkExactActiveClass: 'active',
	routes: [
		{
			path: '/',
			name: 'home',
			components: {
				header: AppHeader,
				default: Home,
				footer: AppFooter
			}
		},
		{
			path: '/restaurants',
			name: 'restaurants',
			components: {
				header: AppHeader,
				default: Restaurants,
				footer: AppFooter
			}
		},
		{
			path: '/restaurant/:id',
			name: 'restaurantmenu',
			components: {
				header: AppHeader,
				default: RestaurantMenu,
				footer: AppFooter
			}
		},
		{
			path: '/restaurant/:id/:menu',
			name: 'choosemenu',
			components: {
				header: AppHeader,
				default: ChooseMenu,
				footer: AppFooter
			}
		},
		{
			path: '/components',
			name: 'components',
			components: {
				header: AppHeader,
				default: Components,
				footer: AppFooter
			}
		},
		{
			path: '/landing',
			name: 'landing',
			components: {
				header: AppHeader,
				default: Landing,
				footer: AppFooter
			}
		},
		{
			path: '/login',
			name: 'login',
			components: {
				header: AppHeader,
				default: Login,
				footer: AppFooter
			}
		},
		{
			path: '/register',
			name: 'register',
			components: {
				header: AppHeader,
				default: Register,
				footer: AppFooter
			}
		},
		{
			path: '/profile',
			name: 'profile',
			components: {
				header: AppHeader,
				default: Profile,
				footer: AppFooter
			}
		}
	],
	scrollBehavior: to => {
		if (to.hash) {
			return { selector: to.hash };
		} else {
			return { x: 0, y: 0 };
		}
	}
});
