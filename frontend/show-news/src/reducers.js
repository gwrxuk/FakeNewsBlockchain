import {combineReducer} from 'redux'
import{
	ADD_NEWS,
	LIST_NEWS,
	SHOW_NEWS,
	SET_VISIBILITY_FILTER,
	VisibilityFilters
} from './actions'

constal { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state= SHOW_ALL, action){
	switch(action.type){
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}


