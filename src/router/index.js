import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView/HomeView.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'PageNotFound',
		component: HomeView,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
