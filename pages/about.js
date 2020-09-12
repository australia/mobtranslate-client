import React, { Component } from "react";
import _ from "lodash";
import axios from "axios";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      translatedText: "",
    };
  }

  onTextChange = (ev) => {
    const { value } = ev.target;
    // this.debouncedTextChange.cancel();
    console.log("trying to translate", value);
    this.setState({ text: value }, () => {
      this.fetchWordData();
    });
    // this.debouncedTextChange = _.debounce(this.fetchWordData, 1000);
    // axios request
    // update state
  };

  fetchWordData = () => {
    const { text } = this.state;
    console.log("fetching translation data", text);
    // Make a request for a user with a given ID
    const that = this;
    axios
      .post(`http://localhost:4000/translate`, { text })
      .then(function (response) {
        // handle success

        // this.debouncedTextChange.cancel();

        console.log(response);
        that.setState({ translatedText: response.data.translatedText });
      })
      .catch(function (error) {
        // handle error
        console.log(" no idea", error);
      });
  };

  render() {
    const { text, translatedText } = this.state;
    return (
      <div>
        <h3>How you speak</h3>
        <textarea onChange={this.onTextChange}>{text}</textarea>
        <br />
        <br />
        <h3>Translated</h3>
        <br />
        <p>{translatedText}</p>
      </div>
    );
  }
}

export default About;
