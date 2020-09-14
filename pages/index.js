import React, { Component } from "react";
import _ from "lodash";
import axios from "axios";
import styled from "styled-components";

const Title = styled.h1``;

const Container = styled.div`
  font-family: "Open Sans", sans-serif;
  max-width: 400px;
  margin: auto;
  padding: 20px;
`;

const Dropdown = styled.select``;

const Byline = styled.div``;

const TextInput = styled.textarea`
  width: 100%;
  padding: 10px;
  outline: 0;
  border: 1px solid #ebebeb;
`;
const LanguageContainer = styled.div`
  display: flex;
  padding-bottom: 15px;
  justify-content: space-between;
`;
const DictionaryLink = styled.a`
  color: #000;
  text-decoration: none;
  font-weight: bold;
  &::hover {
    color: red;
  }
  &::visited {
    color: #333;
  }
`;
const Footer = styled.div`
  font-size: 12px;
  color: #555;
`;
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
    console.log("tryibng to translate", value);
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
      .post(`https://api.mobtranslate.com/translate`, { text })
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
  // a
  render() {
    const { text, translatedText } = this.state;
    return (
      <Container>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <Title>MOB TRANSLATE</Title>
        <Byline>Google translate for Australian Aboriginal languages</Byline>
        <br />
        <LanguageContainer>
          <Dropdown>
            {" "}
            <option> Kuku Yalanji</option>
          </Dropdown>
          <DictionaryLink href="https://api.mobtranslate.com/">
            Dictionary
          </DictionaryLink>
        </LanguageContainer>
        <TextInput
          placeholder="Enter text e.g. I'm a woman who likes good food"
          onChange={this.onTextChange}
        >
          {text}
        </TextInput>
        <br />
        <br />
        <h3>Translation</h3>
        <TextInput
          onChange={this.onTextChange}
          disabled={true}
          value={translatedText}
        >
          {translatedText}
        </TextInput>
        <br />
        <br />
        <Footer>
          MOB TRANSLATE is a fully open source and{" "}
          <a href="https://github.com/australia/mobtranslate-server/">
            free project
          </a>
          .
          <br />
          <br />
          Currently in development and looking for help.
          <br />
          <br />
          In memory of Tuan Coolwell
        </Footer>
      </Container>
    );
  }
}

export default About;
