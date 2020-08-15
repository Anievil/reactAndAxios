import React,{Component} from 'react';
import UserList from './components/userList/userList'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){}
  componentWillUpdate(){}
  render (){
    return(
      <UserList />
    )
  };
}

export default App;
