import React, { Component } from 'react';
import Header from './Component/Header';
import SearchBox from './Component/SearchBox';
import Table from './Component/Table';
import AddUser from './Component/AddUser';
import './App.css';

import DataBase from './DataBase/DataBase.json';
import Edit from './Component/Edit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai: false,
      trangthaiEdit: false,
      dulieu: [],
      text: '',
      user: {}
    }
  }
  
  switchState = () =>{
    this.setState({
      trangthai: !this.state.trangthai,
      trangthaiEdit: false
    });
  }

  getSearchText = (data) => {
    this.setState({
      text: data
    });
  }

  updateSearchText = (data) =>{
    this.setState({
      text: data
    });
  }

  insertButton = (dulieutrave) =>{
    this.switchState();
    this.state.dulieu.push(dulieutrave);
    localStorage.setItem('duLieuNguoiDung', JSON.stringify(this.state.dulieu));
  }

  removeUser = (x)=>{
    var newData = this.state.dulieu.filter(item => item !== x);
    this.setState({
      dulieu: newData
    });
    localStorage.setItem('duLieuNguoiDung', JSON.stringify(newData));
  }

  editUser = (x) =>{
    this.setState({
      trangthaiEdit: !this.state.trangthaiEdit,
      trangthai: false,
      user: x
    });
  }

  edit = (x)=>{
    this.editUser(x);
    this.state.dulieu.forEach((value, key)=>{
      if(value.name === x.name){
        value.phone = x.phone;
        value.permission = x.permission;
      }
    })
    localStorage.setItem('duLieuNguoiDung', JSON.stringify(this.state.dulieu));
  }

  switchEditState = ()=>{
    this.setState({
      trangthaiEdit: !this.state.trangthaiEdit
    });
  }

  componentWillMount() {
    if(localStorage.getItem('duLieuNguoiDung') === null){
      localStorage.setItem('duLieuNguoiDung', JSON.stringify(DataBase));
    }
    this.setState({
      dulieu: JSON.parse(localStorage.getItem('duLieuNguoiDung'))
    });
  }

  render() {
    var result = [];
    this.state.dulieu.forEach((item) => {
      if(item.name.indexOf(this.state.text) !== -1){
        result.push(item);
      }
    })
    
    return (
      <div className="App">
          <Header/>
          <div className="container">
            <div className="row">
              <SearchBox submitText = {(data)=>this.getSearchText(data)} 
                         updateText = {(data) => this.updateSearchText(data)}/>
              
              <div className="col-12"><hr/></div>
              
              <Table tinhtrangEdit = {this.state.trangthaiEdit} 
                     removeFunc={(x)=>this.removeUser(x)} 
                     editFunc = {(x) => this.editUser(x)} 
                     dulieu = {result} 
                     tinhtrang = {this.state.trangthai} 
                     add = {() => this.switchState()} />
              
              <Edit tinhtrang = {this.state.trangthaiEdit} 
                    editClick={(x)=>this.edit(x)} 
                    userData = {this.state.user} 
                    close={()=>this.switchEditState()}/>
              
              <AddUser tinhtrang = {this.state.trangthai} 
                       close = {() => this.switchState()} 
                       insert = {(dulieutrave) => this.insertButton(dulieutrave)}/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
