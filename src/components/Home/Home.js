import React, {useContext} from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import AuthContext from '../../store/auth-context';

const Home = () => {
  const authContext = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <button onClick={authContext.onLogout}></button>
    </Card>
  );
};

export default Home;
