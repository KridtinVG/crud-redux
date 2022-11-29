import React, { Component } from 'react'
import { connect } from 'react-redux'

import Post from './Post'
import Editing from './Editing'

class Allpost extends Component {
    render() {
        return (
            <div>
                <h1 className="post_heading">All Posts</h1>
                {this.props.posts.map((post) => (
                    <div>
                        {post.editing ? <Editing post={post} key={post.id} /> : <Post key={post.id} post={post} />}
                    </div>
                )
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(Allpost);