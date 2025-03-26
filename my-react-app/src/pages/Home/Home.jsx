import React from 'react';
import Body from "../../containers/Body/Body"
import Banner from '../../containers/Banner/Banner';
import Features from '../../containers/Features/Features';

function Home() {
  return (
    <Body>
      <main>
        <Banner />
        <Features />
      </main>
    </Body>
  )
}

export default Home