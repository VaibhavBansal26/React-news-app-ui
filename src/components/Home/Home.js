import React, { Component } from 'react'
import {connect} from 'react-redux';
import {latestNews, otherNews} from '../../store/actions/actions';
import LatestNews from './latestNews';
import OtherNews from './otherNews';


class Home extends Component {
    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(otherNews())
    }
    render() {
        console.log(this.props);
        const props = this.props
        return (
            <>
                <LatestNews latest={props.articles.latest}/>
                <OtherNews otherNews={props.articles.otherNews}/>
            </>
        )
    }
}

function mapStateToProps(state){
    return{
        articles:state.articles
    }
}

export default connect(mapStateToProps)(Home);