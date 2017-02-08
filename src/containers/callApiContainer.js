import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class callApiContainer extends Component {
  // 檢查參數
  static propTypes = {
    selectedReddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  // 當元件被寫入 DOM 之後觸發(透過Ajax去抓資料回來)
  componentDidMount() {
    console.log('======= componentDidMount =======');
    // console.log('componentDidMount');
    const { dispatch, selectedReddit } = this.props
    // selectedReddit 內容預設是 reactjs
    dispatch(fetchPostsIfNeeded(selectedReddit))
  }

  // 已掛載的元件收到新的 props 時被觸發
  componentWillReceiveProps(nextProps) {
    console.log('======= componentWillReceiveProps ========');

    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      const { dispatch, selectedReddit } = nextProps
      dispatch(fetchPostsIfNeeded(selectedReddit))
    }
  }

  // 改變的時候觸發
  handleChange = nextReddit => {
    console.log('handleChange');
    console.log(nextReddit);
    this.props.dispatch(selectReddit(nextReddit))
  }

  // Refresh 的時候觸發
  handleRefreshClick = e => {
    e.preventDefault()

    const { dispatch, selectedReddit } = this.props
    dispatch(invalidateReddit(selectedReddit))
    dispatch(fetchPostsIfNeeded(selectedReddit))
  }

  render() {

    // console.log('this.props');
    // console.log(this.props);
    const { selectedReddit, posts, isFetching, lastUpdated } = this.props
    const isEmpty = posts.length === 0
    return (
      <div>
        <Picker value={selectedReddit}
          onChange={this.handleChange}
          options={['reactjs', 'frontend']} />
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          {!isFetching &&
            <a href="#"
              onClick={this.handleRefreshClick}>
              Refresh
            </a>
          }
        </p>
        {isEmpty
          ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {

  console.log('==== mapStateToProps ====');
  console.log(state);
  // selectedReddit, postsByReddit 從reducers/index 
  // selectedReddit 內容為：reactjs(預設) 或 frontend
  const { selectedReddit, postsByReddit } = state
  console.log(postsByReddit);
  const { isFetching, lastUpdated, items: posts} =
    postsByReddit[selectedReddit] || { isFetching: true, items: [] }

  console.log('===== mapStateToProps posts =====');
  console.log(postsByReddit);
  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(callApiContainer)

