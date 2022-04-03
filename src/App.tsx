import React, { useRef } from "react";
import { useAppVisible } from "./utils";
import './App.css'
import '@logseq/libs'
function App() {

  //create a state tracker to store the value of body text size
  const [bodyTextSize, setBodyTextSize] = React.useState(10);
//create a state tracker to store the value of line spacing
  const [lineSpacing, setLineSpacing] = React.useState(1);

  //check if it's the first time the component is rendered
  const isFirstRender = useRef(true);

  //create a useEffect to handle change in body text size. The change should add css using logseq.provideStyle()
  React.useEffect(() => {
    
  }, [bodyTextSize])

  //handle line spacing change 
  const handleChange = (event:any) => {
    console.log(event.target.value)
    setBodyTextSize(event.target.value);

    logseq.provideStyle({key: "body-text-size", style: `:root {--ls-page-text-size: ${bodyTextSize}px;}`});
  }
  const handleLineSpacingChange = (event:any) => {
    console.log(event.target.value)
    setLineSpacing(event.target.value);

    logseq.provideStyle({key: "body-spacing", style: `.ls-block{padding: ${lineSpacing}px 0;}`});

  }
  const handleH2Change = (event:any) => {
    console.log(event.target.value)
    setBodyTextSize(event.target.value);
  }
  const visible = useAppVisible();
  if (visible) {
    return (
      <main className="">
        <div className="flex justify-center">
        <div className="smartblock-inserter">
          <h1>Style Customizer</h1>
          <div className="grid-cols-2 grid gap-20 w-full">
            <div className="">Body Text Size</div>
            <input type="range" min={2} max={30} value={bodyTextSize} onChange={handleChange}></input>
          </div>
          <div className="grid-cols-2 grid gap-20 w-full">
            <div className="">Line Spacing</div>
            <input type="range" min={0} max={10} value={lineSpacing} onChange={handleLineSpacingChange}></input>
            </div>
            
        </div>
        </div>
      </main>
    );
  }
  return null;
}

export default App;
