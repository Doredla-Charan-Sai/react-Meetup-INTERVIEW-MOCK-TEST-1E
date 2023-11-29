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
const Register = props => (
  <RegistrationContext.Consumer>
    {value => {
      const {
        inputName,
        registered,
        selectedTopic,
        onRegisterNow,
        changeName,
        changeTopic,
      } = value
      const registerNow = event => {
        event.preventDefault()
        onRegisterNow()
        if (inputName !== '') {
          const {history} = props

          history.replace('/')
        }
      }
      const onChangeName = event => {
        changeName(event.target.value)
      }
      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }
      return (
        <div className="register-cont">
          <Header />
          <div className="register-content-cont">
            <img
              className="register-img"
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <form className="form" onSubmit={registerNow}>
              <h1 className="form-head">Let us join</h1>
              <label htmlFor="name" className="label">
                NAME
              </label>
              <input
                id="name"
                className="input"
                type="text"
                onChange={onChangeName}
                placeholder="Your Name"
                value={inputName}
              />
              <label htmlFor="topic" className="label">
                TOPICS
              </label>
              <select
                value={selectedTopic}
                onChange={onChangeTopic}
                id="topic"
                className="input"
              >
                {topicsList.map(each => (
                  <option key={each.id} value={each.id}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="register-now-btn">
                Register Now
              </button>
              {inputName === '' && registered === true ? (
                <p className="error-txt">Please enter your name</p>
              ) : null}
            </form>
          </div>
        </div>
      )
    }}
  </RegistrationContext.Consumer>
)
export default Register
