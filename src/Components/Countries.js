import './Countries.css'

const Countries = props => {
  const {data, removeCountryToList} = props
  const {name, imageUrl} = data

  const removeCountry = () => {
    removeCountryToList(data.id)
  }

  return (
    <li>
      <div className="card-container">
        <img src={imageUrl} alt="thumbnail" className="image" />
        <div className="card-item">
          <p className="par">{name}</p>
          <button type="button" className="remove" onClick={removeCountry}>
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default Countries
