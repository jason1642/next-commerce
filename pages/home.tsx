import * as React from 'react';
import homeStyles from '../styles/home.module.css'


interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div className={homeStyles.container}>
      This is the home page
    </div>
  );
};

export default Home;
