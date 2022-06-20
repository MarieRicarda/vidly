import React, { Component } from 'react';


class Counter extends Component { 
 state = {
  count: 0,
  tags: []
 };

 renderTags() {
  if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  return <ul>{this.state.tags.map( tag => <li key={tag}>{ tag }</li>)}</ul>
 }

 handleIncrement = product => {
  console.log(product);
  this.setState({ count: this.state.count + 1 });
 };

 doHandleIncrement = () => {
  this.handleIncrement({ id: 1 });
 };

 render() {
  let colors = "badge m-2 bg-";
  colors += (this.state.count === 0) ? "warning" : "primary";

  return (
   <div>
    <span className={colors}>{this.formatCount()}</span>
    <button 
     onClick={this.doHandleIncrement}
     className='btn btn-secondary btn-sm'
    >
     Increment
    </button>
    { this.renderTags() }
   </div> 
  );

 
  
 }

 formatCount() {
  const { count } = this.state;
  return count === 0 ? 'Zero' : count;
 }
}
 
export default Counter;