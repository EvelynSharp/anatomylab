import React from 'react';
import {Container, Grid, Header, Image} from 'semantic-ui-react';
import { quizcontent } from '../quizcontent';



class Quiz extends React.Component {


  render(){
    return (
      <Container>
       {this.props.match.params.id}
      </Container>
    )
  }
}

export default Quiz;
