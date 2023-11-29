import {Link} from 'react-router-dom'
import RegistrationContext from '../../context/RegistrationContext'
import Header from '../Header'
import './index.css'

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
const Home = () => (
  <RegistrationContext.Consumer>
    {value => {
      const {inputName, selectedTopic, registered} = value
      return (
        <div className="home-cont">
          <Header />
          {registered === false ? (
            <div className="home-content-cont">
              <div className="home-content-cont">
                <h1 className="main-head">Welcome to Meetup</h1>
                <p className="main-para">Please register for the topic</p>
                <Link to="/register" className="link">
                  <button
                    type="button"
                    className="register-btn"
                    data-testid="register"
                  >
                    Register
                  </button>
                </Link>
              </div>
              <img
                className="home-img"
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </div>
          ) : (
            <div className="home-content-cont">
              <h1 className="main-head">Hello {inputName}</h1>
              <p className="main-para">
                Welcome to{' '}
                {
                  topicsList.filter(each => each.id === selectedTopic)[0]
                    .displayText
                }
              </p>
              <img
                className="home-img"
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </div>
          )}
        </div>
      )
    }}
  </RegistrationContext.Consumer>
)
export default Home
