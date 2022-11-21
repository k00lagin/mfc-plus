import { user, authorized, offices, mfcList, urmList } from "./stores.js";

let $user;
user.subscribe(value => {
	$user = value;
});

export const checkAuth = () => {
	fetch("https://моидокументы.рф/mfc/ws/auth/current", {
		credentials: "same-origin",
	})
		.then((response) => {
			response.json().then(function (data) {
				user.update(() => data);
				authorized.update(() => true);
			});
		})
		.catch((error) => {
			authorized.update(() => false);
			throw new Error(error);
		});
}

export const logout = () => {
	fetch("https://моидокументы.рф/mfc/ws/auth/logout", {
		credentials: "same-origin"
	})
		.then(response => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			response.json().then(function (data) {
				authorized.update(() => false)
				user.update(() => { })
			});
		})
		.catch(error => {
			throw new Error(error);
		});
}

export const fetchOffices = () => {
	for (const type of ['mfc', 'urm']) {
		fetch(
			encodeURI(
				`https://моидокументы.рф/mfc/ws/dictionary/unicombo/?collection=amm_sys_${type}_card_form&fields=["_id","common_data.address","common_data.full_name","common_data.status","common_data.profile","common_data.wnd_count","common_data.start_date","common_data.finish_date"]&additionalFilter={"common_data.rf_subject":${$user.rfSubjectRoleIds[0]},"common_data.status":"\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439","$or":[{"common_data.hidden":{"$exists":false}},{"common_data.hidden":{"$in":[0,false]}}]}&sort={"common_data.address":1}&page=1&start=0`
			),
			{
				credentials: "same-origin",
			}
		).then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			response.json().then(function (data) {
				let list = data.items.map(office => {
					return {
						id: office._id,
						type: type,
						...office.common_data
					}
				});
				if (type === 'mfc') {
					mfcList.update(() => list);
				} else if (type === 'urm') {
					urmList.update(() => list);
				}
			});
		});
	}
}

export const fetchData = async (url) => {
	return new Promise((resolve, reject) => {
		fetch(url, {
			credentials: "same-origin",
			headers: {
				"Content-type":
					"application/x-www-form-urlencoded; charset=UTF-8"
			}
		})
			.then(response => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				response.json().then(function(data) {
					resolve(data);
				});
			})
			.catch(error => {
				reject(error);
			});
	})
}
