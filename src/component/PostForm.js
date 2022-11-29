import React, { Component } from 'react'
import { connect } from 'react-redux'
 
class PostForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id : new Date(),
            title,
            message,
            editing: false
        }
        this.props.dispatch({
            type : 'ADD_POST',
            data
        })
        this.getTitle.value = "";
        this.getMessage.value = "";
    }
    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">Create Post</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="text" 
                    placeholder="Enter Post Title" 
                    ref={(input)=> this.getTitle=input} 
                    required />
                    <br></br>
                    <textarea cols="30" rows="5" placeholder="Enter Post"
                    ref={(input)=> this.getMessage=input}
                    required />
                    <br></br>
                    <button>Post</button>
                </form>
            </div>
        )
    }
}

export default connect()(PostForm)
