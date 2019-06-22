import React, { Component } from 'react';
import User from './User';

class Table extends Component {
    renderButton = () =>{
      if(this.props.tinhtrang === false)
      return(
        <div className="btn btn-outline-info " onClick = {() => this.props.add()}>+ Thêm mới</div>
      );
    }

    render() {
        return (
            <div className="col mb-3">
            <table className="table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>STT</th>
                  <th>Tài khoản</th>
                  <th>SĐT</th>
                  <th>Quyền</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {this.props.dulieu.map((value, key) => {
                  return(
                    <User buttonState = {this.props.tinhtrangEdit} removeClickFunc={()=>this.props.removeFunc(value)} editClickFunc = {()=>this.props.editFunc(value)} key = {key} id={key+1} name = {value.name} phone = {value.phone} permission = {value.permission}/>
                  )
                })}
              </tbody>
            </table>

            <div>
              {this.renderButton()}
            </div>
            </div>
        );
    }
}

export default Table;