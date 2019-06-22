import React, { Component } from 'react';

class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text : ''
        }
    }
    

    inputText = (event) =>{
        this.setState({
            text: event.target.value
        });
        this.props.updateText(event.target.value);
    }

    render() {
        return (
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" aria-describedby="helpId" placeholder="Nhập tên..." onChange = {(event)=>this.inputText(event)}/>
                        <div className="btn btn-primary" onClick = {()=>this.props.submitText(this.state.text)}>Tìm</div>
                    </div>
                </div>
        );
    }
}

export default SearchBox;