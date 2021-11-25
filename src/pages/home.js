import React, {useEffect} from "react";
import { Container} from '@mui/material';
import { connect } from 'react-redux';
import { getPosts } from "../stateman/actions";
import FeedItem from "../components/feedItem";
import InfiniteScroll from 'react-infinite-scroll-component';
import CircularProgress from '@mui/material/CircularProgress';




const Home = props => {

    //Get the feeds on page load
    useEffect(() => {
        props.getPosts()
    }, [])

    return (
    <Container maxWidth="lg">
        {/* {
            props.postsData.posts.map(item => <FeedItem data={item}/>)
        } */}


        <InfiniteScroll
        style={{padding: 20}}
        dataLength={props.postsData.posts.length}
        next={() => props.getPosts(props.postsData.page, props.postsData.posts)}
        hasMore={true}
        loader={<div style={{width: '100%', position: 'relative', textAlign: 'center'}}><img width="64" src="/loader.gif" /></div>}
        endMessage={
            <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
            </p>
        }
        >
        {props.postsData.posts.map(item => <FeedItem key={item.id} data={item}/>)}
        </InfiniteScroll>
    </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        postsData: state.postsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: (page, data) => dispatch(getPosts(page, data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)