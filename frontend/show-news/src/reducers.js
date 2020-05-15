import {combineReducers} from 'redux'
import{
	ADD_NEWS,
	LIST_NEWS,
	SHOW_NEWS,
	SET_VISIBILITY_FILTER,
	VisibilityFilters
} from './actions'

const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state= SHOW_ALL, action){
	switch(action.type){
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}

function newsList(state = [], action){
	switch(action.type){
		case ADD_NEWS:
		return [
		...state,
		{
			text:action.text,
			completed:false
		}
		]
		case LIST_NEWS:
		return state.map((news,index)=>{
			if(index === action.index){
				return Object.assign({},news,{
					completed: !news.completed
				})
			}
			return news
		})
		case SHOW_NEWS:
			return state.map((news,index)=>{
			if(index === action.index){
				return Object.assign({},news,{
					completed: !news.completed
				})
			}
				return news
			})
		default:
			return state
	}
}

const newsApp = combineReducers({
	visibilityFilter,
	newsList
})

export default newsApp
