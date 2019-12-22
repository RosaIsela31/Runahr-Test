import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import findSuggestions from '../../redux/actions/findSuggestions';
import findResults from '../../redux/actions/findResults';

import Page from './page';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
        text: '',
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeSelection = this.onChangeSelection.bind(this);

  }
   
  onChangeText(text){
    this.setState({ text })
    this.props.findSuggestions(text)
  }

  onChangeSelection(text ){ 
    this.setState({ text })
    this.props.findResults(text)
    this.props.history.push('/results');
  }

  render(){
      const { text } = this.state;
      const { suggestions } = this.props;

      return(
          <Page
              text={text}
              suggestions={suggestions }
              onChangeText={this.onChangeText}
              onChangeSelection ={this.onChangeSelection}  
              goTo={(path) => {
                this.props.history.push(path);
              }}
          />
      )
  }
}

const mapStateToProps = (state) => {
  return{
    suggestions: state.suggestions
  }
}

const mapDispathToProps = {
    findSuggestions,
    findResults
};

export default withRouter(
    connect(mapStateToProps, mapDispathToProps)(Navbar)
) 