import React, { PureComponent } from 'react'
import PropTypes from "prop-types";
import Comment from "../Comment";
class Comments extends PureComponent {
  render() {
    const { loading, comments } = this.props;
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
              {
                comments != null && <div className="panel-body">
                  {
                    (comments.length)
                      ?
                      comments.map(item => <Comment key={item.id} comment={item}/>)
                      :
                      <h3 className={`text-gray`}>Nobody writes comment</h3>
                  }
                </div>
              }
              <div className="panel-footer">
                <div className="input-group">
                  <input className="form-input" type="text" placeholder="Hello"/>
                    <button className="btn btn-primary input-group-btn">Send</button>
                </div>
              </div>
            </div>
        }
      </div>
    )
  }
}

Comments.propTypes = {
  comments: PropTypes.array,
  loading: PropTypes.bool
};

export default Comments
