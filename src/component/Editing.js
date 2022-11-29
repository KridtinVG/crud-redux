import React, { Component } from 'react'
import { connect } from 'react-redux';

class Editing extends Component {

    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data = {
            newTitle,
            newMessage
        }
        this.props.dispatch({ type: 'UPDATE',id: this.props.post.id,data: data})
    }
    render() {
        return (
            <div>
                <div className="post">
                <h1 className="post_heading">Edit Post</h1>
                <form className="form" onSubmit={this.handleEdit}>
                    <input type="text" 
                    placeholder="Enter Post Title" 
                    ref={(input)=> this.getTitle=input} 
                    defaultValue = {this.props.post.title}
                    required />
                    <br></br>
                    <textarea cols="30" rows="5" placeholder="Enter Post"
                    ref={(input)=> this.getMessage=input}
                    defaultValue = {this.props.post.message}
                    required />
                    <br></br>
                    <button>Update</button>
                </form>
            </div>
            </div>
        )
    }
}
export default connect()(Editing)