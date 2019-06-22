import React, { Component } from 'react';

class User extends Component {
    renderButton = () =>{
        if(this.props.buttonState === false)
        return(
            <div className="btn-group">
                <div className="btn btn-warning" onClick={()=>this.props.editClickFunc()}>Sửa</div>
                <div className="btn btn-danger" onClick={()=>this.props.removeClickFunc()}>Xóa</div>
            </div>
        )
    }

    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.permission}</td>
                <td>
                    {this.renderButton()}
                </td>
            </tr>
        );
    }
}

export default User;