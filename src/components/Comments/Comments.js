import React, { PureComponent } from 'react'
import PropTypes from "prop-types";
import Comment from "../Comment";
class Comments extends PureComponent {
  render() {
    const { loading, comments } = this.props;
    if (comments == null) return <div/>;
    const commentsObject = comments.entities.comments;
    const repliesObject = comments.entities.replies;
    const commentsArray = comments.result;
    const replies = commentsArray.map(item => {
      if (commentsObject[item].hasOwnProperty('replies')) {
        if (commentsObject[item].replies.length) {
          return commentsObject[item].replies.map(item => {
            return repliesObject[item]
          })
        } else return []
      } else return null
    });
    return (
      <div>
        {
          loading
            ?
            <div className="loading loading-lg"/>
            :
            <div className="panel">
              <div className="panel-header">
                <div className="panel-title h5"><b>Comments</b></div>
              </div>
              <div className="panel-body">
                {
                  (commentsArray.length)
                    ?
                    commentsArray.map((item, index) => <Comment key={index} replies={replies[index]} comment={commentsObject[commentsArray[index]]}/>)
                    :
                    <h3 className={`text-gray`}>Nobody writes comment</h3>
                }
              </div>
              <div className="panel-footer">
                <div className="input-group">
                  <input className="form-input disabled" type="text" placeholder="Hello"/>
                    <button className="btn btn-primary input-group-btn disabled">Send</button>
                </div>
              </div>
            </div>
        }
      </div>
    )
  }
}

Comments.propTypes = {
  comments: PropTypes.object,
  loading: PropTypes.bool
};

export default Comments
