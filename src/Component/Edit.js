import React, { Component } from 'react';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      permission: ''
      // name: props.userData.name,
      // phone: props.userData.phone,
      // permission: props.userData.permission
    }
  }

  editDataFunc = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

    editForm = () =>{
    if(this.props.tinhtrang === true ){
      return(
        <div className="col">
        <div className="card card-border-primary text-left mt-3">
          <div className="btn btn-block btn-outline-danger" onClick = {() => this.props.close()}>Đóng</div>
          <div className="card-header">Sửa thông tin "{this.props.userData.name}":</div>
          <div className="card-body text-primary">
            <div className="form-group">
              <label >Số điện thoại:</label>
              <input type="text" defaultValue={this.props.userData.phone} onChange={(event)=>this.editDataFunc(event)} name="phone" className="form-control" aria-describedby="helpId" placeholder="Nhập số điện thoại..." />
            </div>
            <div className="form-group">
              <label >Phân quyền</label>
              <select className="custom-select" defaultValue={this.props.userData.permission} onChange={(event)=>this.editDataFunc(event)} name="permission">
              <option value='Default'>--Select--</option>
              <option value='Moderator'>Moderator</option>
              <option value='Admin'>Admin</option>
              <option value='User'>User</option>
              </select>
            </div>
            <div className="form-group">
              <div className="btn btn-warning btn-block" onClick={()=>this.props.editClick(this.state)}>Sửa</div>
            </div>
            
            </div>
          </div>
          </div>
      )
    }
    }
    
    componentWillReceiveProps(nextProps) {
      this.setState({
        name: nextProps.userData.name,
        phone: nextProps.userData.phone,
        permission: nextProps.userData.permission,
      });
    }

    render() {
        return (
            <div>
                {this.editForm()}
            </div>
        );
    }
}

export default Edit;