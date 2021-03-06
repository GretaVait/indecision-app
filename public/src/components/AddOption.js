import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  }
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    // this.setState(() => {
    //   return {
    //     //error: error
    //     error
    //   };
    // });

    this.setState(() => ({ error }));
    
    if(!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div className="add-option">
        {this.state.error && <p className="add-option__error">{this.state.error}</p>}
        <form className="add-option__form" onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button className="btn btn--purple">Add Option</button>
        </form>
      </div>
    );
  }
}

