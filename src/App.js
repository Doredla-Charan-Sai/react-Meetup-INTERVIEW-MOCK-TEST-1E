import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Register from './components/Register'
import RegistrationContext from './context/RegistrationContext'
import './App.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]
class App extends Component {
  state = {
    inputName: '',
    selectedTopic: topicsList[0].id,
    registered: false,
  }

  changeName = value => {
    this.setState({inputName: value})
  }

  changeTopic = value => {
    this.setState({selectedTopic: value})
  }

  onRegisterNow = () => {
    this.setState({registered: true})
  }

  render() {
    const {inputName, selectedTopic, registered} = this.state
    return (
      <RegistrationContext.Provider
        value={{
          inputName,
          selectedTopic,
          registered,
          onRegisterNow: this.onRegisterNow,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </RegistrationContext.Provider>
    )
  }
}
export default App
