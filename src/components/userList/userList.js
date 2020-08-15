import React, { Component } from 'react';
import {getData} from '../../api'
import styles from './userList.module.scss';
import Spinner from './Spinner'

class UserList extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            isFatching: false,
        };
    }


    fetchUsers = async () => {
        this.setState({
            isFatching: true,
        })
        const newUsers = await getData();
        this.setState({
            users: [...this.state.users, ...newUsers],
            isFatching: false,
        })
        console.log(this.state)
    }

    componentDidMount(){
        this.fetchUsers()
    }
    render() {

        return (
            <div className={styles.container} onClick={this.fetchUsers}>
               {this.state.isFatching && <Spinner />} 
                Load
            </div>
            
        );
    }
}

export default UserList;
