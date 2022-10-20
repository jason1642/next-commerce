import * as React from 'react';
import homeStyles from './homepage.module.css'
import LargeSection from './largeSection';


interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div className={homeStyles.container}>
      This is the home page
      <LargeSection />
    </div>
  );
};

export default Home;
