import React, { Component } from 'react';

class UserItem extends Component {
    constructor(props){
        super(props);
    }


    render() {
        const {name, emai,cell,picture:{medium: imgSrc}} = this.props;

        return (
            <div className='userCard'>
                    <div>
                        <img className='userAvatar' src={imgSrc} />
                    </div>
                    <div>
                        <h2 className='userName'>{`${name.first} ${name.last}`}</h2>
                    </div>
            </div>
        );
    }
}

export default UserItem;
