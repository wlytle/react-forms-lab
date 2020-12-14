import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: "",
    };
  }

  handleTweetInput = ({ target }) => {
    this.setState({
      tweet: target.value,
    });
  };

  remainingChars = () => {
    return (
      <small>
        {this.props.maxChars - this.state.tweet.length} charactes remaining
      </small>
    );
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={this.handleTweetInput}
          value={this.state.tweet}
        />
        <br></br>
        {this.remainingChars()}
      </div>
    );
  }
}

export default TwitterMessage;
