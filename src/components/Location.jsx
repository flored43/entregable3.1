import axios from "axios";

const Location = ({ locationInfo, setLocationInfo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocationId = e.target.newLocation.value;

    axios
      .get(`https://rickandmortyapi.com/api/location/${newLocationId}`)
      .then(({ data }) => setLocationInfo(data))
      .catch((err) => console.log(err))   
  }
  return (
    <section style={{ textAlign: "center", marginTop: "20px", border: "2px solid green", padding: "1px"}}>
      
      <form conSubmit={handleSubmit} >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, border: "2px solid green", padding: "1px"}}>
          <input 
           name="newLocation" 
           type="number" 
           placeholder="type a location ID..."
           required
          />
          <button type="submit" >Search</button>
        </div>
      </form>
      <article >
        <h2>Welcome to {locationInfo?.name}!</h2>
        <ul >
          <li>Type: {locationInfo?.type}</li>
          <li>Dimension: {locationInfo?.dimension}</li>
          <li>Population: {locationInfo?.residents.length}</li>
        </ul>
      </article>
    </section>
  )
}
export default Location