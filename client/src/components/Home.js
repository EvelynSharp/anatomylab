import React from 'react';
import moment from 'moment';
import CalField from './CalField';
import { Grid } from 'semantic-ui-react';

const Home = ({history}) => {
  const months = moment.months();
  const year = moment().format('YYYY');
  return (
    <div>
      <Grid columns={12} centered style={{ margin: '10% 10%'}}>
        <Grid.Row style={{ border: '1px solid black'}}>
            { year }
        </Grid.Row>
        <Grid.Row style={{ border: '1px solid black', padding: '0'}}>
          { months.map( m => {
              return (
                <Grid.Column
                  width={4}
                  key={m}
                  style={{ border: '1px solid blue'}}
                >
                  <CalField history={history} month={m} year = {year}/>
                </Grid.Column>
              )
            })
          }
        </Grid.Row>

      </Grid>
    </div>
  )

}

export default Home;
