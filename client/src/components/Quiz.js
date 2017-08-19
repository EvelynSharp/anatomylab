import React from 'react';
import {Container, Grid, Image, Button, Card} from 'semantic-ui-react';
import {quizcontent} from '../quizcontent';

class Quiz extends React.Component {

  state = { genAnswer: false, intAnswer: false, advAnswer: false }

  toggleGenAnswer = (e) => {
    this.setState({ genAnswer: !this.state.genAnswer})
  }

  toggleIntAnswer = (e) => {
    this.setState({ intAnswer: !this.state.intAnswer})
  }

  toggleAdvAnswer = (e) => {
    this.setState({ advAnswer: !this.state.advAnswer})
  }

  showGenAnswer(e) {
    if(this.state.genAnswer)
    return (
      <h3 style={{color: 'green'}}>{quizcontent[Number(this.props.match.params.id )].genAnswer}</h3>
    )
    else
    return(
      <h3 style={{visibility: 'hidden'}}>{quizcontent[Number(this.props.match.params.id )].genAnswer}</h3>
    )
  }

  showIntAnswer(e) {
    if(this.state.intAnswer)
    return (
      <h3 style={{color: 'green'}}>{quizcontent[Number(this.props.match.params.id )].intAnswer}</h3>
    )
    else
    return(
      <h3 style={{visibility: 'hidden'}}>{quizcontent[Number(this.props.match.params.id )].intAnswer}</h3>
    )
  }

  showAdvAnswer(e) {
    if(this.state.advAnswer)
    return (
      <h3 style={{color: 'green'}}>{quizcontent[Number(this.props.match.params.id )].advAnswer}</h3>
    )
    else
    return(
      <h3 style={{visibility: 'hidden'}}>{quizcontent[Number(this.props.match.params.id )].advAnswer}</h3>
    )
  }

  backHome = (e) => {
    this.props.history.push('/')
  }

  render(){
    return (
        <Container className='question'>
          <h1>Question of the week</h1>
          <div className='question-nav'>
            <h2>{quizcontent[Number(this.props.match.params.id )].key}</h2>
            <Button
              onClick={this.backHome}
              color='red'
              className='backHome'
              >
              HOME
            </Button>
          </div>
          <div className='question-body'>
            <Grid columns={2} divided='vertically' centered>
              <Grid.Row>
                <Grid.Column>
                  <Image bordered src={quizcontent[Number(this.props.match.params.id )].imagesrc}/>
                </Grid.Column>
                <Grid.Column>
                  <Card.Group itemsPerRow={1}>
                    <Card>
                      <h2>General Knowledge</h2>
                      <h3>{quizcontent[Number(this.props.match.params.id )].genKnowledge}</h3>
                      {this.showGenAnswer()}
                      <Button color={'grey'}onClick={this.toggleGenAnswer}>See Answer</Button>
                    </Card>
                    <Card>
                      <h2>Intermediate Knowledge</h2>
                      <h3>{quizcontent[Number(this.props.match.params.id )].intKnowledge}</h3>
                      {this.showIntAnswer()}
                      <Button color={'grey'}onClick={this.toggleIntAnswer}>See Answer</Button>
                    </Card>
                    <Card>
                      <h2>Advanced Knowledge</h2>
                      <h3>{quizcontent[Number(this.props.match.params.id )].advKnowledge}</h3>
                      {this.showAdvAnswer()}
                      <Button color={'grey'}onClick={this.toggleAdvAnswer}>See Answer</Button>
                    </Card>
                    <Card>
                  <div>
                    <Button>Previous</Button>
                    <Button>Next</Button>
                  </div>
                  </Card>
                  </Card.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Container>
    )
  }
}

export default Quiz;
