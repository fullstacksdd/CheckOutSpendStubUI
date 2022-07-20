import axios from 'axios';
// const LOCALSTORAGE_KEY = "customer";


// const BASE_URL = 'http://localhost:5000';
const BASE_URL = 'http://localhost:8000';


export function getProducts() {
	return axios.get(`${BASE_URL}/api/products`)
		.then(response => response.data);
}

export function getCartProducts(cart) {
	return axios.post(`${BASE_URL}/api/products`, {cart})
		.then(response => response.data);
}

export function getCustomer() {

	return axios.get(`${BASE_URL}/api/customer`)
		.then(response => response.data);
}

export function login (data) {
	console.log(data);
	return axios.post(`${BASE_URL}/api/auth`, { name: data.name, password: data.password })
		.then(response => {
			localStorage.setItem('x-access-token', response.data.token);
			localStorage.setItem('x-access-token-expiration', Date.now() + 2 * 60 * 60 * 1000);
			return response.data
		})
		.catch(err => Promise.reject('Authentication Failed!'));
}

export function isAuthenticated(){
	return localStorage.getItem('x-access-token') && localStorage.getItem('x-access-token-expiration') > Date.now()
}

export function post(customer) {
		return axios.post(`${BASE_URL}/api/customer`, { 
			customer: customer
		})
		.then(response => {
			return response.data
		})
		.catch(err => Promise.reject('Post Customer Data Failed!'));
}
