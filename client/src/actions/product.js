import * as types from './types';

export function setSearch( data = { category: ""}) {
	let searchQuery = '';
	if (data.category.length > 0 && data.category !== "default") {
    searchQuery = 'category=' + data.category;
	}
	let newData = {
		query: searchQuery,
		category: data.category,
	}
	return {
		type: 'SET_SEARCH',
		data: newData
	}
}

function getSearchQuery(state) {
	if (state['search'])
		return state['search']['query'];
	return '';
}

export function load() {
	return function(dispatch, getState) {
    let searchQuery = getSearchQuery(getState());
		return fetch('http://localhost:3001/products?'+searchQuery)
		.then(async (response) => {
			let res = await response.json();
			if (response.status === 200) {
				dispatch(receivedData(res));
			}
			else {
				dispatch(receivedDataFailed());
			}
		}, (error) => {
			throw(error);
		});
	}
}

export function clearData() {
	return {
		type: types.CLEAR_DATA,
	}
}

export function receivedData(data) {
  return {type: types.LOAD_DATA_SUCCESS , data};
}

export function receivedDataFailed(data) {
	return {type: types.LOAD_DATA_FAILED, error: "error"}
}
