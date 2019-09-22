import React, {PureComponent} from 'react'
import PropTypes from 'prop-types';
import styles from './Replie.module.scss'

class Replie extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: props.replie.likes
    };
    this.handleClickLike = this.handleClickLike.bind(this);
  }

  handleClickLike() {
    this.setState({count: this.state.count != null ? this.state.count + 1 : 1})
  }

  render() {
    const {replie} = this.props;
    const {count} = this.state;
    return (
      <div className={`${styles.replie} p-relative`}>
        <h6 className="tile-title text-bold">{replie.name}</h6>
        <p className="tile-subtitle" dangerouslySetInnerHTML={{ __html: replie.commentText }}/>
        <span className={`c-hand p-absolute ${styles.like}`} onClick={this.handleClickLike}><i className="icon icon-people"/> {count > 0 ? count + ' likes' : ''}</span>
        {
          replie.replies != null && <div>
            {
              replie.replies.length > 0 && <div>
                {
                  replie.replies.map(item => <Replie key={item.id} replie={item}/>)
                }
              </div>
            }
          </div>
        }
      </div>
    )
  }
}

Replie.propTypes = {
  replie: PropTypes.object
};

export default Replie
