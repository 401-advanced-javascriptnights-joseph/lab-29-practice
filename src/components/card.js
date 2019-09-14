import React from 'react';
import ReactDOM from 'react-dom';
import Deck from './deck';

class Card extends React.Component {
  constructor(props) {
    super(props);
  };

    render() {
    return (
      <section className="card">
          {this.props.cardContent.records.map( (card) =>

    <div className="card">
    <header><h3>{card.title}</h3></header>
    <div className="content">{card.copy}</div>
    <figure>
      <img src={card.media.href} alt={card.media.alt} />
      <figcaption>{card.media.title}</figcaption>
    </figure>
    <nav className="links">
      <ul>
        {card.links.map( (link,i) => (
          <li key={i}><a className={link.type} href={link.href} title={link.title}>{link.title}</a></li>
        ))}
      </ul>
    </nav>
    </div>

    )}
    </section>
    )
  }
}

export default Card;
