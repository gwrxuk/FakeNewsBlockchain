export const ADD_NEWS = "ADD_NEWS"
export const LIST_NEWS = "LIST_NEWS"
export const SHOW_NEWS = "SHOW_NEWS"
expor const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
		SHOW_ALL: "SHOW_ALL",
		SHOW_COMPLETED: "SHOW_COMPLETED",
		SHOW_ACTIVE: "SHOW_ACTIVE",
		SHOW_CORRECT: "SHOW_CORRECT",
		SHOW_INCORRECT: "SHOW_INCORRECT"
}

export function addNews(text){
	return {type: ADD_NEWS, index}
}

export function listNews(page){
	return {type: LIST_NEWS, page}
}

export function SHOW_NEWS(index){
	return {type: SHOW_NEWS, index}
}

export function setVisibilityFilter(filer){
	return {type: SET_VISIBILITY_FILTER,filter}
}