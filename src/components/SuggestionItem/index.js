import './index.css'

const SuggestionItem = props => {
  const {suggestion, onSuggestion} = props

  const onClickSuggestion = () => {
    onSuggestion(suggestion)
  }

  return (
    <li className="list-container">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow"
        alt="arrow"
        onClick={onClickSuggestion}
      />
    </li>
  )
}

export default SuggestionItem
