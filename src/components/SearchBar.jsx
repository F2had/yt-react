import { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment category search container ">
        <form method="post" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui icon input container ">
            <input
              className="prompt"
              type="text"
              value={this.state.term}
              placeholder="Search videos..."
              onChange={(e) => {
                this.setState({
                  term: e.target.value,
                });
              }}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
