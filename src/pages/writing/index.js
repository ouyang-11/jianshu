import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';



class Writing extends PureComponent {
	render() {
		const { loginStatus } = this.props;
		if(loginStatus) {
			return (
				<div>写文章</div>
				)
		}else{
			return <Redirect to='/login' />
		}
		
	}
 
}

const mapState = (state) => ({
  loginStatus : state.getIn(['login','login'])
})



export default connect(mapState,null)(Writing);