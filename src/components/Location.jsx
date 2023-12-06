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
    <section style={{ textAlign: "center", marginTop: "20px", marginBottom: "30px" }}>
      
      <form onSubmit={handleSubmit} style={{ margin: "0px 0"}}>
        <div style={{ position: "relative" }}>
          <img src="/portal.svg"
          alt=""
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%) rotate(10deg)",
            width: "1000px",
            height: "250px",
            zIndex: -1,
            animation: "rotatePortal 5s infinite linear",
          }}           
          />
          <img 
          src="./rickAnd.svg" 
          alt="" 
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", 
            width: "250px",
            height: "200px",
            zIndex: 1,

          }}
          />
          <input 
           name="newLocation" 
           type="number" 
           placeholder="type a location ID..."
           required
           style={{ border: "2px solid green", padding: "4px", width: "calc(100% - 20 px)", boxSizing: "border-box", marginTop: "210px"}}
          />
          <button type="submit" style={{width: "px"}}>Search</button>
        </div>
      </form>
      <article style={{ border: "2px solid green", padding: "5px"}}>
        <h2>Welcome to {locationInfo?.name}!</h2>
        <ul style={{ listStyle: "none", display: "flex", gap: "40px", justifyContent: "center", margin: 5, padding: 0}}>
          <li>Type: {locationInfo?.type}</li>
          <li>Dimension: {locationInfo?.dimension}</li>
          <li>Population: {locationInfo?.residents.length}</li>
        </ul>
      </article>
    </section>
  )
}
export default Location