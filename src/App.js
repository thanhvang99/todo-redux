import React,{Component} from 'react';
import VisibleList from './containers/VisibleList';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import './App.sass';

export default class App extends Component{
    render(){
        return (
            <div className="main-container">
                <Header />
                <AddTodo />
                <VisibleList />
            </div>
        )
    }
}
