import React from 'react';
import {Container, Grid, Image, Button, Card, Icon} from 'semantic-ui-react';
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
    let { genAnswer, intAnswer, advAnswer } = this.state;
    return (
        <div className='question'>
          <h1>Question of the week</h1>
          <h2>{`Week: ${quizcontent[Number(this.props.match.params.id )].key}`}</h2>
          <div className='question-nav'>
            <Button animated className='btn'>
              <Button.Content visible>Prev</Button.Content>
              <Button.Content hidden><Icon name='left arrow' /></Button.Content>
            </Button>
            <Button
              onClick={this.backHome}
              className='backHome btn'
              animated
              >
              <Button.Content visible>Home</Button.Content>
              <Button.Content hidden><Icon name='home' size='large'/></Button.Content>
            </Button>
            <Button animated className='btn'>
              <Button.Content visible>Next</Button.Content>
              <Button.Content hidden><Icon name='right arrow' /></Button.Content>
            </Button>
          </div>

          <Container className='question-body'>
            <Grid columns={2} divided='vertically' centered>
              <Grid.Row>
                <Grid.Column>
                  <Image
                    src={quizcontent[Number(this.props.match.params.id )].imagesrc}
                    style={{maxHeight: 700}}
                    fluid
                    />
                </Grid.Column>
                <Grid.Column>
                  <Card.Group itemsPerRow={1} style={{padding: 0}}>
                    <Card>
                      <h2>General Knowledge</h2>
                      <h3>{quizcontent[Number(this.props.match.params.id )].genKnowledge}</h3>
                      {this.showGenAnswer()}
                      <Button className='btn' onClick={this.toggleGenAnswer}>
                        {genAnswer?
                          <div>Hide Answer</div>
                          :
                          <div>Show Answer</div>
                        }
                      </Button>
                    </Card>
                    <Card>
                      <h2>Intermediate Knowledge</h2>
                      <h3>{quizcontent[Number(this.props.match.params.id )].intKnowledge}</h3>
                      {this.showIntAnswer()}
                      <Button className='btn' onClick={this.toggleIntAnswer}>
                        {intAnswer?
                          <div>Hide Answer</div>
                          :
                          <div>Show Answer</div>
                        }
                      </Button>
                    </Card>
                    <Card>
                      <h2>Advanced Knowledge</h2>
                      <h3>{quizcontent[Number(this.props.match.params.id )].advKnowledge}</h3>
                      {this.showAdvAnswer()}
                      <Button className='btn' onClick={this.toggleAdvAnswer}>
                        {advAnswer?
                          <div>Hide Answer</div>
                          :
                          <div>Show Answer</div>
                        }
                      </Button>
                    </Card>
                  </Card.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    )
  }
}

export default Quiz;
