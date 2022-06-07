import Progressbar from 'react-js-progressbar';
import React, { useState } from "react";
export default function App() {
  const [percentage, setPercentage] = useState(0);

  const change_progressbar_input = () => {
    setPercentage(50);
  };
  

  return (
    <>
      <div id='progressbarContainer'>
        <Progressbar
          input={percentage}
          pathWidth={10}
          pathColor={['#56ab2f', '#a8e063']} // use an array for gradient color.
          trailWidth={20}
          trailColor='#363636' // use a string for solid color.
          textStyle={{ fill: 'red' }} // middle text style
        >
         
        </Progressbar>
      </div>
    </>
  );
}