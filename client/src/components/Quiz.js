import React from 'react';
import {Grid, Container, Header, Image, Button} from 'semantic-ui-react';
import {quizcontent} from '../quizcontent';

class Quiz extends React.Component {

  state = { answer: false}

  toggleAnswer = (e) => {
    this.setState({answer: !this.state.answer})
  }

  showGenAnswer(e) {
    if(this.state.answer)
    return (
      <h1>{quizcontent[Number(this.props.match.params.id )].genAnswer}</h1>
    )
    else
    return(
      <h1 style={{visibility: 'hidden'}}>{quizcontent[Number(this.props.match.params.id )].genAnswer}</h1>
    )
  }

  showIntAnswer(e) {
    if(this.state.answer)
    return (
      <h1>{quizcontent[Number(this.props.match.params.id )].intAnswer}</h1>
    )
    else
    return(
      <h1 style={{visibility: 'hidden'}}>{quizcontent[Number(this.props.match.params.id )].intAnswer}</h1>
    )
  }

  showAdvAnswer(e) {
    if(this.state.answer)
    return (
      <h1>{quizcontent[Number(this.props.match.params.id )].advAnswer}</h1>
    )
    else
    return(
      <h1 style={{visibility: 'hidden'}}>{quizcontent[Number(this.props.match.params.id )].advAnswer}</h1>
    )
  }

  render(){
    return (
      <Container>
        <div>
          <Header
            color='red'
            textAlign='center'
            style={{fontSize: 50, padding: 25}}
            >
            Question of the week
          </Header>
        </div>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Image src={quizcontent[Number(this.props.match.params.id )].imagesrc}/>
            </Grid.Column>
            <Grid.Column>
              <h3>Rate your anitomical knowledge</h3>
              <div>
                <h4>{quizcontent[Number(this.props.match.params.id )].genKnowledge}</h4>
                <h4>{this.showGenAnswer()}</h4>
              </div>
              <div>
                <h4>{quizcontent[Number(this.props.match.params.id )].intKnowledge}</h4>
                <h4>{this.showIntAnswer()}</h4>
              </div>
              <div>
                <h4>{quizcontent[Number(this.props.match.params.id )].advKnowledge}</h4>
                <h4>{this.showAdvAnswer()}</h4>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      <Button onClick={this.toggleAnswer}>SHOW ANSWERS</Button>
      </Container>
    )
  }
}

export default Quiz;
