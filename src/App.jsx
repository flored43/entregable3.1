import axios from "axios";
import { useEffect, useState } from "react";
import { getRandomNumber } from "./helpers/random";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";

function App() {
  const [locationInfo, setLocationInfo] = useState(null);

  useEffect(() => {
    const randomDimension = getRandomNumber(126);
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomDimension}`)
      .then(({ data }) => setLocationInfo(data))
      .catch((err) => console.log(err));
  }, []);


  
  return (
    <main
      style={{
        backgroundImage: `url('./backgroundPage.svg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: "relative",
        minHeight: "100vh", 
        overflow: "hidden", 
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)", 
          padding: "20px", 
          borderRadius: "10px", 
          position: "relative",
          zIndex: 1, 
        }}
      >
        <Location
          locationInfo={locationInfo}
          setLocationInfo={setLocationInfo}
        />
        <ResidentList residents={locationInfo?.residents ?? []} />
      </div>

      </main> 
  )}




  // return (
  //   <main
  //   style={{
  //     backgroundImage: `url('./backgroundPage.svg')`,
  //     backgroundSize: "cover",
  //     backgroundRepeat: "no-repeat",
  //     backgroundPosition: "center center",
  //     position: "relative",
  //     minHeight: "100vh", // Ensure the background covers the entire viewport height
  //   }}
  // >
  //   <div
  //     style={{
  //       backgroundColor: "rgba(255, 255, 255, 0.8)", // Adjust the background color and opacity
  //       padding: "20px", // Adjust the padding as needed
  //       borderRadius: "10px", // Optional: Add border radius for a rounded look
  //       position: "relative",
  //       zIndex: 1, // Ensure the content is on top of the background image
  //     }}
  //   >
     
  //     <Location locationInfo={locationInfo} setLocationInfo={setLocationInfo} />
  //     <ResidentList residents={locationInfo?.residents ?? []} />
  //     </div>
  //   </main>
  // );


export default App;
