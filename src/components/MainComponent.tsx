import React from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '..'
import { deleteActionCreator, fetchActionCreator } from '../redux/actions/ActionCreators'
import { Actions, Post } from '../redux/reducers/FetchReducer'

interface props{
    Posts: Post[],
    dispatch: ThunkDispatch<RootState, {}, Actions>
}

const MainComponent: React.FC<props> = ({Posts, dispatch}) => {
    return (
        <div>
            <h1>This is the Main Component!</h1>
            <button onClick={() => dispatch(fetchActionCreator())}>Fetch</button>
            {Posts.map((post) => {
                return <div style={{cursor:"pointer"}} onClick={() => dispatch(deleteActionCreator(post.id))} key={post.id}>{post.title}</div>
            })}
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    return{
        Posts: state.fetchReducer.Posts
    }
}

export default connect(mapStateToProps)(MainComponent)