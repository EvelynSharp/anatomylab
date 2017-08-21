import React from 'react';
import moment from 'moment';
import CalField from './CalField';
import { Grid } from 'semantic-ui-react';

const Home = ({history}) => {
  const months = moment.months();
  const year = moment().format('YYYY');
  return (
    <div className='home'>
      <h1>Anatomy Lab</h1>
      <div className='pagebody'>
        <h2>Questions of the Week</h2>
        <Grid columns={12} centered style={{ margin: '3% 12%'}}>
          <Grid.Row style={{ border: "2px solid black", borderBottom: 'none', padding: '0'}}>
              <h3> { year } </h3>
          </Grid.Row>
          <Grid.Row  style={{ border: '1px solid black', padding: '0'}}>
            { months.map( m => {
                return (
                  <Grid.Column
                    width={4}
                    key={m}
                    style={{ border: '1px solid black', minWidth: '160px'}}
                  >
                    <CalField history={history} month={m} year = {year}/>
                  </Grid.Column>
                )
              })
            }
          </Grid.Row>
        </Grid>
      </div>
    </div>
  )

}

export default Home;
