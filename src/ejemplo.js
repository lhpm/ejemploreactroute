import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
      triggerAnimation: '',
      tasks: []
    }
  }

//The function triggered by button which sends the task the user has entered to the tasks array state:

  addItem() {
    document.querySelector("#textfield1").value = ""
    this.setState({ 
      triggerAnimation: 'fadein', tasks: 
      this.state.inputText 
    }) 
  }



  render() {
    //Where User enters task:
    return (
      <div className="App">
        <main>
          <div className="enterTask">
            <input type="text" className="inputclass" id="textfield1" 
              placeholder='Enter a task.' 
              onChange={event => this.setState({ 
                inputText: event.target.value })} 
              onKeyPress={event => {
                if(event.key === 'Enter') {
                  this.addItem();
                }
               }} 
             />
            <br />
            <br />
            <button className="button" 
              onClick={() => this.addItem()} data-
                toggle='fadein' data-target='list'>+
            </button>
         </div>


    <!-- Where tasks will appear: -->

         <div className="log">
           <p className='list'>
             <span class={this.state.triggerAnimation}>  
               {this.state.tasks}
             </span>
           </p>
           <button className="button">-</button>
         </div>
       </main>
     </div>
    )
  }
}  

export default App;