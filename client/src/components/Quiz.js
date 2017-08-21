import React from 'react';
import {Container, Grid, Image, Button, Card, Icon} from 'semantic-ui-react';
import {quizcontent} from '../quizcontent';
import moment from 'moment';
class Quiz extends React.Component {

  state = { genAnswer: false, intAnswer: false, advAnswer: false }

  componentWillMount = () => {

  }

  toggleAnswer = (type) => {
    this.setState({ [type]: !this.state[type]})
  }

  displayAnswer = (type) => {
    let quiz = quizcontent[this.props.match.params.id - 1]
    return (
        <h5 style={this.state[type]? {color: 'green'} : {visibility: 'hidden', color: 'green'}} >{quiz[type]}</h5>
    )
  }

  backHome = (e) => {
    this.props.history.push('/')
  }


  switchPost = (direction) => {
    let quizId = Number(this.props.match.params.id)
    let curWeek = Number(moment().format('ww'))
    let availQuiz = quizcontent.filter( quiz => quiz.enable === true && quiz.key >= curWeek);
    let curQuizId;
    availQuiz.map( (q, i) => { if (q.key === quizId) { curQuizId = i } });
    if ( direction === -1) {
      if ( curQuizId !== 0 ) {
        this.props.history.push(`/${availQuiz[curQuizId - 1].key }`)
      }
    } else {
      if ( curQuizId < availQuiz.length - 1 ) {
        this.props.history.push(`/${availQuiz[curQuizId + 1].key }`)
      }
    }
  }


  render(){
    let { genAnswer, intAnswer, advAnswer } = this.state;
    let quizId = Number(this.props.match.params.id) - 1
    return (
        <div className='question'>
          <h1>Question of the week</h1>
          <h2>{`Week: ${quizId+1}`}</h2>
          <div className='question-nav'>
            <Button animated className='btn' onClick={() => this.switchPost(-1)}>
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
            <Button animated className='btn' onClick={() => this.switchPost(1)}>
              <Button.Content visible>Next</Button.Content>
              <Button.Content hidden><Icon name='right arrow' /></Button.Content>
            </Button>
          </div>

          <Container className='question-body'>
            <Grid columns={2} divided='vertically' centered>
              <Grid.Row>
                <Grid.Column>
                  <Image
                    src={quizcontent[quizId].imagesrc}
                    style={{maxHeight: 700}}
                    fluid
                    />
                </Grid.Column>
                <Grid.Column>
                  <Card.Group itemsPerRow={1} style={{padding: 0}}>
                    <Card>
                      <h2>General Knowledge</h2>
                      <h3>{quizcontent[quizId].genKnowledge}</h3>
                      {this.displayAnswer('genAnswer')}
                      <Button className='btn' onClick={() => this.toggleAnswer('genAnswer')}>
                        {genAnswer?
                          <div>Hide Answer</div>
                          :
                          <div>Show Answer</div>
                        }
                      </Button>
                    </Card>
                    <Card>
                      <h2>Intermediate Knowledge</h2>
                      <h3>{quizcontent[quizId].intKnowledge}</h3>
                      {this.displayAnswer('intAnswer')}
                      <Button className='btn' onClick={() => this.toggleAnswer('intAnswer')}>
                        {intAnswer?
                          <div>Hide Answer</div>
                          :
                          <div>Show Answer</div>
                        }
                      </Button>
                    </Card>
                    <Card>
                      <h2>Advanced Knowledge</h2>
                      <h3>{quizcontent[quizId].advKnowledge}</h3>
                      {this.displayAnswer('advAnswer')}
                      <Button className='btn' onClick={() => this.toggleAnswer('advAnswer')}>
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
