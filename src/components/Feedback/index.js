import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {hasFeedBack: false}

  selectedEmoji = () => {
    this.setState({
      hasFeedBack: true,
    })
  }

  render() {
    let message = ''
    const {hasFeedBack} = this.state
    const {resources} = this.props
    const {emojis} = resources
    if (hasFeedBack === false) {
      message = '"How satisfied are you with our customer support performance?'
    }

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">{message}</h1>
          <div className="feedback-container">
            {!hasFeedBack &&
              emojis.map(eachItem => (
                <ul className="emoji" key={eachItem.id}>
                  <li>
                    <img
                      src={eachItem.imageUrl}
                      alt={eachItem.name}
                      className="emoji-icon"
                      onClick={this.selectedEmoji}
                    />
                  </li>
                  <li>{eachItem.name}</li>
                </ul>
              ))}
            {hasFeedBack && (
              <ul className="emoji">
                <li>
                  <img
                    src={resources.loveEmojiUrl}
                    alt="love emoji"
                    className="emoji-icon"
                  />
                </li>
                <li>
                  <h4>Thank You!</h4>
                </li>
                <li>
                  We will use your feedback to improve our customer support
                  performance
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Feedback
