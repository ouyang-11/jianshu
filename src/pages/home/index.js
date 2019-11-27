import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style.js';
import { actionCreators } from './store';
import { connect } from 'react-redux';

import Writer from './components/Writer';
import List from './components/List';
import Recommend from './components/Recommend';

class Home extends PureComponent {


	handleScrollTop(){
		window.scrollTo(0,0);
	}
	render() {
		return(
			<HomeWrapper>
			  <HomeLeft>			   
			  
			    <List />
			  </HomeLeft>
			  <HomeRight>
			    <Recommend />
			    <Writer />
			  </HomeRight>
			  { this.props.showScroll ?  <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
			 
			</HomeWrapper>
		   
			)
	}

	componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
	}

	componetWillUnmount() {
		window.removeEventListener('scroll',this.props.changeScrollTopShow);
	}

	bindEvents() {
		window.addEventListener('scroll',this.props.changeScrollTopShow);
	}
}

const mapState = (state) => ({
	showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) =>({
	changeHomeData() {
	  const action = actionCreators.getHomeInfo();
	  dispatch(action);		  
	},
	changeScrollTopShow(e) {
      if(document.documentElement.scrollTop > 200) {
      	dispatch(actionCreators.toggleTopShow(true))
      }else {
      	dispatch(actionCreators.toggleTopShow(false))
      }
	}
})

export default connect(mapState,mapDispatch)(Home);