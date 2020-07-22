import React, {PureComponent} from 'react'
import PropTypes from 'prop-types';
import styles from './Reply.module.scss'

class Reply extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: props.reply.likes
    };
    this.handleClickLike = this.handleClickLike.bind(this);
  }

  handleClickLike() {
    this.setState({count: this.state.count != null ? this.state.count + 1 : 1})
  }

  render() {
    const {reply} = this.props;
    const {count} = this.state;
    return (
      <div className={`${styles.reply} p-relative`}>
        <h6 className="tile-title text-bold">{reply.name}</h6>
        <p className="tile-subtitle" dangerouslySetInnerHTML={{ __html: reply.commentText }}/>
        <span className={`c-hand p-absolute ${styles.like}`} onClick={this.handleClickLike}><i className="icon icon-people"/> {count > 0 ? count + ' likes' : ''}</span>
        {
          reply.replies != null && <div>
            {
              reply.replies.length > 0 && <div>
                {
                  reply.replies.map(item => <Reply key={item.id} reply={item}/>)
                }
              </div>
            }
          </div>
        }
      </div>
    )
  }
}

Reply.propTypes = {
  reply: PropTypes.object
};

export default Reply
