import React, { Component } from 'react';
import {getData} from '../../api/index'
import styles from './userList.module.scss';
import UserItem from '../userItem/userItem'
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
        const info = await getData();
        this.setState({
            users: [...info.data.results],
            isFatching: false,
        })
    }

    componentDidMount(){
        this.fetchUsers();
        
    }

    mapUsers(){
        return this.state.users.map((user) =>{
            return <UserItem {...user} key={user.cell} />;
        });
    }

    render() {
        return (
            <div className={styles.container} onClick={this.fetchUsers}>
               {this.state.users.length > 0 && this.mapUsers()}
                Load
            </div>
        );
    }
}

export default UserList;
