import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow:hidden;
  width:960px;
  margin:0 auto;
`;

export const HomeLeft = styled.div`
  margin-left:15px;
  padding-top:30px;
  width:625px;
  float:left;

  .banner-img {
  	width:625px;
  	height:345px;

  }

`;

export const HomeRight = styled.div`
  width:280px;
  float:right;
`;

export const ListItem = styled.div`
  overflow:hidden;
  padding:20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic{
    display:block;
    width:125px;
    height:100px;
    float:right;
  }

`;

export const ListInfo = styled.div`
  width:500px;
  float:left;
  .title {
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
  }
  .desc {
    font-size:13px;
    line-height:24px;
    color:#999;
  }

`;

export const RecommendWrapper = styled.div`
  margin:30px 0;

`;

export const RecommendItem = styled.div`
  margin-top:8px;
  width:280px;
  height:50px;
  background:url(${(props) => props.imgUrl});
  background-size:contain;
`;

export const LoadMore = styled.div`
  width:100%;
  height:40px;
  line-height:40px;
  margin: 30px 0;
  background:#a5a5a5;
  text-align:center;
  border-radius:20px;
  color:#fff;
  cursor:pointer;
`;

export const BackTop = styled.div`
  position:fixed;
  right:100px;
  bottom:100px;
  width:60px;
  height:60px;
  line-height:60px;
  text-align:center;
  border:1px solid #ccc;
  font-size:14px;
  border-radius:5px;
  color:#969696;

`;

export const WriterWrapper = styled.div`
  width:280px;
  height:400px;
  background:#fff;
`;

export const Title = styled.div`
  font-size:14px;
  color:#969696;
  text-align:left;

`;

export const AuthorList = styled.div`
 
   overflow:hidden;
   top:30px;
   width:280px;   
   height:400px; 
 
   `;
export const AuthorItem = styled.div`   
    margin-top:10px;
    margin-bottom:10px;
    width:280px;
 `;

export const ItemLeft = styled.div`
    img{   
    float:left;
    width:48px;
    height:48px;
    border:1px solid #ddd;
    border-radius:50%;
    margin-bottom:10px;
    }
    h4{   
    float:left
    margin:8px 50px 0 5px;
    line-height:14px;
    font-size:14px;
    color:#333;
    }
    p{    
    float:left;
    margin:10px 40px 20px 5px;
    font-size:12px;
    color: #969696;
    }
    
   
   
`;
export const ItemRight = styled.div`
  float:right;
  .iconfont{       
    display:block;    
    margin:10px 0 12px;
    font-size:13px;
    color: #42c02e;
    height:41px;
   }
`