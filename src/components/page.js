import React from 'react';
import Deck from './deck';
import Card from './card';

const Page = (props) => {

  const content = props.content || [];

  return (
    <>
      {content.map( (deck,i) => (
      <Deck deckContent={deck} key={i}> </Deck>))}
       {content.map( (card,i) => (
      <Card cardContent={card} key={i}> </Card>))}
    </>
  );
};

export default Page;
