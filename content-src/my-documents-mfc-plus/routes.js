import { writable } from 'svelte/store';
import Home from "./components/Home.svelte"
import Templates from "./components/Templates.svelte"
import Settings from "./components/Settings.svelte"
import User from "./components/User.svelte"
import Unauthorized from "./components/Unauthorized.svelte"
import { checkAuth } from "./api.js"
import { authorized } from "./stores.js";

let $authorized;
authorized.subscribe(value => {
	$authorized = value;
});

export const navigate = () => {
	checkAuth();
	let hash = location.hash;
	let newPath;
	if (hash === '' || hash === '#') {
		newPath = '/'
	} else {
		if ($authorized) {
			newPath = `/${hash.substring('1')}`
		} else {
			newPath = '/unauthorized'
		}
	}
	path.update(() => newPath)
}

export const routes = {
	'/': {
		path: '/',
		title: 'МРС МФЦ+',
		component: Home
	},
	'/templates': {
		path: '/templates',
		title: 'Шаблоны',
		component: Templates
	},
	'/settings': {
		path: '/settings',
		title: 'Настройки',
		component: Settings
	},
	'/user': {
		path: '/user',
		title: 'Информация о пользователе',
		component: User
	},
	'/unauthorized': {
		path: '/unauthorized',
		title: 'Требуется войти в аккаунт',
		component: Unauthorized
	}
}

export const path = writable('/');
