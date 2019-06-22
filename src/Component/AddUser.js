import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      permission: ''
    }
  }
  
  //tu tao id bang uuid

  showInfo = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  renderForm = () =>{
    
    if(this.props.tinhtrang === true )
    return(
      <div className="col">
      <div className="card card-border-primary text-left mt-3">
        <div className="btn btn-block btn-outline-danger" onClick = {() => this.props.close()}>Đóng</div>
        <div className="card-header">Thêm thành viên</div>
        <div className="card-body text-primary">
          <div className="form-group">
            <label >Tên:</label>
            <input type="text"  name="name" onChange = {(event)=>this.showInfo(event)} className="form-control" aria-describedby="helpId" placeholder="Nhập tên..."/>
          </div>
          <div className="form-group">
            <label >Số điện thoại:</label>
            <input type="text"  name="phone" onChange = {(event)=>this.showInfo(event)} className="form-control" aria-describedby="helpId" placeholder="Nhập số điện thoại..." />
          </div>
          <div className="form-group">
            <label >Phân quyền</label>
            <select defaultValue='Default' className="custom-select" name="permission" onChange = {(event)=>this.showInfo(event)} required>
            <option >--Select--</option>
            <option value='Moderator'>Moderator</option>
            <option value='Admin'>Admin</option>
            <option value='User'>User</option>
            </select>
          </div>
          <div className="form-group">
            <div className="btn btn-primary btn-block" onClick = {() => this.props.insert(this.state)}>Thêm mới</div>
          </div>

          {/* <div className="form-group">
            <input type="reset" className="btn btn-primary btn-block" onClick = {() => this.props.insert(this.state)} value="Thêm mới"/>
          </div> */}

        </div>
      </div>
      </div>
    )
  }

    render() {
        return (
          <div>
            {this.renderForm()}
          </div>
        );
    }
}

export default AddUser;