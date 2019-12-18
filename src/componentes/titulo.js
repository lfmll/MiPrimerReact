import React from 'react'

export default class Title extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.titles}</h1>
        <p>Lista antes de partir</p>
      </div>
    );
  }
}
// export function hola(){
//   return "Hello";
// }
