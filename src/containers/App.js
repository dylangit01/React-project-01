import React, {Component} from "react";
import {connect} from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'
import ErrorBoundry from "../components/ErrorBoundry";

import {setSearchField, requestRobots} from "../actions";

const mapStateToProps = (state) => {
    return {
        searchBox: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
};


class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // in real project, data list is empty at the beginning, through fetch to update the state
    //         robots: [],
    //         // searchField: ''
    //     }
    // }

    // since below hook has been added, and once the state has been updated, the render() runs again; In this case, the robots list goes
    // from an empty array to a robot's list. And the virtual DOM notices there's a difference, and repaints the web browser to include
    // the robots. So the execution order is
    // constructor >> render() >> componentDidMount() >> render()
    componentDidMount() {
       this.props.onRequestRobots()
    }

    // onSearchChange = (event) => {
    //     this.setState({searchField: event.target.value})
    // };

    render() {
        // const {robots} = this.state;
        const {searchBox, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot => {
            // return robot.name.toLowerCase().indexOf(searchBox.toLowerCase()) > -1
            return robot.name.toLowerCase().includes(searchBox.toLowerCase())
        });
        // Below if function is to show "Loading" when long time fetching from the web to get the data;

        return isPending ?
            <h1>Loading</h1> :
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>

                {/*In React, one thing is called "children", and below <CardList/> is the children of <Scroll></Scroll>*/}
                {/*"Scroll" can use "children" as a way to render its children*/}
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>

                </Scroll>
            </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
