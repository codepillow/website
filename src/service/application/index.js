import config from "../../display/application/config";
import axios from "axios";

function joinUser(payload) {
	return axios({
		method: "post",
		url: config.apiHost + "/auth/join",
		data: { username: payload.username, email: payload.email, password: payload.password }
	})
	.then(response => {
		return response.data.data;
	})
	.catch(error => {
		throw new Error(error.response.data.error.message);
	})
}

function loginUser(payload) {
	return axios({
		method: "post",
		url: config.apiHost + "/auth/login",
		data: { email: payload.email, password: payload.password }
	})
	.then(response => {
		return response.data.data;
	})
	.catch(error => {
		throw new Error(error.response.data.error.message);
	})
}

function applicationInitialize() {
  return () => {
    const delayModifier = 2000;
    const delay = 10000 + Math.random() * delayModifier;
    return new Promise(resolve => setTimeout(resolve, delay));
  };
}

function getInfo() {
	return {
		genres: [{name: "Комедія", slug: "comedy"}, {name: "Романтика", slug: "romance"}, {name: "Драма", slug: "drama"}, {name: "Екшн", slug: "action"}, {name: "Школа", slug: "school"}], 
		categories: [{name: "TV серіал", slug: "tv"}, {name: "OVA", slug: "ova"}, {name: "Фільм", slug: "movie"}], 
		teams: [{name: "Fanvox", slug: "fanvox"}], 
		minYear: 2008, 
		states: [{name: "Онгоінг", slug: "ongoing"}, {name: "Анонс", slug: "planned"}, {name: "Випущений", slug: "released"}]
	};
}

export { applicationInitialize, joinUser, getInfo };
