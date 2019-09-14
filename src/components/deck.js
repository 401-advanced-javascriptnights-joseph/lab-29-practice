import React from 'react';
import ReactDOM from 'react-dom';

class Deck extends React.Component {
  constructor(props) {
    super(props);
  };



  render() {
    return (
<section className="deck">
           <header><h2>{this.props.children}</h2></header>
    </section>
    );
  }
}

export default Deck;
