import React from 'react';

import moment from 'moment';
import CalField from './CalField';
import { Grid } from 'semantic-ui-react';

const Home = () => {
  const months = moment.months();
  console.log(moment());
  return (
    <div>
      <Grid columns={12} centered style={{ margin: '10% 15%'}}>
        <Grid.Row style={{ border: '1px solid black'}}>
            { moment().format('YYYY') }
        </Grid.Row>
        <Grid.Row style={{ border: '1px solid black', padding: '0'}}>
          { months.map( m => {
              return (
                <Grid.Column
                  width={4}
                  key={m}
                  style={{ border: '1px solid blue'}}
                >
                  <CalField month={m} />
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
