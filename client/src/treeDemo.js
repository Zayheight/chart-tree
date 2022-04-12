import React, { Component } from 'react';
import 'react-sortable-tree/style.css';
import SortableTree from "react-sortable-tree";
import axios from 'axios';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
class treeDemo extends Component {
  constructor(props){
    super(props);
    this.state={
      treeData:[],
      image: null
    };
  }
  callAPI = () => {
    axios.get('http://localhost:9000/data')
    .then((response) => {
      this.setState({treeData: response.data})
      console.log(response);
    })
    .catch((error) =>{
    console.log(error);
    })
    .then(function () {
    });
  }

  ShowImage = () =>  {
    console.log(this.state.image)
    if(this.state.image != "no file"&&this.state.image != null){
      return(
        <div>
          <img src={"data:image/jpg;base64,"+this.state.image.toString()} style={{hight:500}}/>
        </div>
      )
    }
    else{
        return(
            <div></div>
        )
    }
    
  } 
  componentWillMount(){
    this.callAPI();
  }
  render(){
    return(
        <div>
            <Row>
            <Col span={18} push={6}>
            <div class="content">
                {this.ShowImage()}
            </div>
            </Col>
            <Col span={6} pull={18}>
                <div style={{ height: 1000,width: 500 }}>
    
                <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
          canDrag={false}
          generateNodeProps = {select_N => ({
            onDoubleClick: () => axios({
              method: 'get',
              url: 'http://localhost:9000/data/image',
              params:{
                path : select_N.node.subtitle.toString()
              }
              }).then((response) => 
                this.setState({image: response.data})
              )
            })}
        />
                </div>
            </Col>
            </Row>,
        </div>
    );
    
    }
}
export default treeDemo;
