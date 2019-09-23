import React, {PureComponent} from 'react'
import PropTypes from 'prop-types';
import Replie from '../Replie'
import styles from './Comment.module.scss'
class Comment extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: props.comment.likes
    };
    this.handleClickLike = this.handleClickLike.bind(this);
  }

  handleClickLike() {
    this.setState({count: this.state.count != null ? this.state.count + 1 : 1})
  }

  render() {
    const {comment, replies} = this.props;
    const {count} = this.state;
    return (
      <div className={`tile ${styles.comment}`}>
        <div className="tile-content">
          <h6 className="tile-title text-bold">{comment.name}</h6>
          <p className="tile-subtitle" dangerouslySetInnerHTML={{ __html: comment.commentText }}/>
          {
            replies != null && <div>
              {
                replies.length && <div>
                  {
                    replies.map(item => <Replie key={item.id} replie={item}/>)
                  }
                </div>
              }
            </div>
          }
          <span className={`c-hand`} onClick={this.handleClickLike}><i className="icon icon-people"/> {count > 0 ? count + ' likes' : ''}</span>
        </div>
      </div>
    )
  }
}

Comment.propTypes = {
  comment: PropTypes.object,
  replies: PropTypes.array
};

export default Comment
