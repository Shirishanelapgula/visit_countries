import './CountryItem.css'

const CountryItem = props => {
  const {details, addCountryToList} = props
  const {name, isVisited} = details

  const addCountry = () => {
    addCountryToList(details.id)
  }

  return (
    <li>
      <div className="list-item">
        <p className="para">{name}</p>
        {isVisited ? (
          <p className="para" onClick={addCountry}>
            Visited
          </p>
        ) : (
          <button type="button" className="visit" onClick={addCountry}>
            Visit
          </button>
        )}
      </div>
    </li>
  )
}

export default CountryItem
