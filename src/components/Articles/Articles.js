import React, { PureComponent } from 'react'
import { connect } from "react-redux";
import { format } from 'date-fns'
import Comments from "../Comments";
import { articlesRequest } from "../../modules/Articles";
import { commentsRequest } from "../../modules/Comments";
import styles from './Articles.module.scss'

class Articles extends PureComponent {
  componentDidMount() {
    this.props.articlesRequest();
    this.props.commentsRequest();
  }

  render() {
    const {isLoading, result} = this.props.articles;
    return (
      <>
        <h2 className={`text-center`}>Article and comments</h2>
        {
          isLoading
            ?
            <div className="loading loading-lg"/>
            :
            result != null && <div className="article">
              <div className={`${styles.head}`}>
                <h2>{result.title}</h2>
                <div className={`text-gray mb-2`}>{format(new Date(result.date * 1000), 'MM/dd/yyyy HH:mm:ss')}</div>
              </div>
              <div className="article__text" dangerouslySetInnerHTML={{ __html: result.text }}/>
            </div>
        }
        <Comments comments={this.props.comments.result} loading={this.props.comments.isLoading}/>
      </>
    )
  }
}

const mapStateToProps = state => ({
  articles: state.articles,
  comments: state.comments
});

export default connect(
  mapStateToProps,
  {articlesRequest, commentsRequest}
)(Articles)
