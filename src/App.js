import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import React ,  { Component } from 'react';
import {set_data} from './Store/action'

class App extends Component {
  render(){


   console.log("redux",this.props)
    return (

    <div className="App">

 
       
             
            
          <h4>{this.props.email}</h4>
          <h4>{this.props.appname}</h4>
        
           <button onClick={()=>this.props.set_data()}>set data</button>
 
    </div>
  );
}
}

const mapStateToProps = (state) => ({

 email: state.auth.email,
 appname:state.app.app



})

const mapDispatchToProps = (dispatch) => ({

  set_data: () =>  dispatch(set_data())

})

export default  connect(mapStateToProps,mapDispatchToProps)(App);