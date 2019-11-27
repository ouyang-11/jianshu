import React, { PureComponent } from 'react';
import { WriterWrapper, Title, AuthorList, AuthorItem, ItemRight, ItemLeft } from '../style.js';
import { connect } from 'react-redux';

class Writer extends PureComponent {
	render() {
		return(
			<WriterWrapper>
			  <Title>
			    推荐作者
			  </Title>
			  <AuthorList>
			    {
					this.props.list.map((item) => {
						return (
							<AuthorItem key={item.get('id')}>
								<ItemRight>
							      <span className='iconfont'>&#xe61f;关注</span>	
							  </ItemRight>
								<ItemLeft>   
							   	<img src={item.get('imgUrl')}/> 	    			                    
							    <h4>{item.get('name')}</h4>
							    <p>{item.get('desc')}</p>
						    </ItemLeft>
							</AuthorItem>
							)
					})
				 } 
			    
			    
			  </AuthorList>
			</WriterWrapper>
			)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'authorList'])
})

export default connect(mapState, null)(Writer);