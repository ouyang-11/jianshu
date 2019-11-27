import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	articleList : [],
	recommendList : [],
	authorList : [],
	articlePage : 1,
	showScroll:false
});

export default (state=defaultState,action) => {
	switch(action.type) {	
	  case constants.CHANGE_HOME_DATA	:
	    return state.merge({
	    	articleList: fromJS(action.articleList),
	    	recommendList: fromJS(action.recommendList),
	    	authorList: fromJS(action.authorList)
	    })
	  case constants.ADD_ARTICLE_LIST	:
	    return state.merge({
	    	'articleList': state.get('articleList').concat(action.list),
	    	'articlePage': action.nextPage
	    });
	  case constants.TOGGLE_SCROLL_TOP :
	    return state.set('showScroll',action.show);
	  
		default : 
		  return state;

	} 

} 