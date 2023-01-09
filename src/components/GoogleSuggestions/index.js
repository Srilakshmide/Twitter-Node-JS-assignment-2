import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onFullSuggestion = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filteredList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google"
        />
        <div className="suggestion-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="cross"
            />
            <input
              type="search"
              className="search-bar"
              value={searchInput}
              placeholder="Search Google"
              onChange={this.onChangeSearchInput}
            />
          </div>
          <ul className="list-container">
            {filteredList.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                suggestion={eachItem.suggestion}
                onFullSuggestion={this.onFullSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
