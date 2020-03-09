import React,{Component} from 'react';
import VisibleList from './containers/VisibleList';
import AddTodo from './components/AddTodo';
import Header from './components/Header';

export default class App extends Component{
    render(){
        return (
            <div>
                <Header />
                <AddTodo />
                <VisibleList />
            </div>
        )
    }
}
