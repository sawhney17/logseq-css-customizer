import React, { useRef } from "react";
import { useAppVisible } from "./utils";
import "./App.css";
import "@logseq/libs";
function App() {
  //create a state tracker to store the value of body text size
  const [bodyTextSize, setBodyTextSize] = React.useState(10);
  //create a state tracker to store the value of line spacing
  const [lineSpacing, setLineSpacing] = React.useState(1);
  //create a state tracker to store the value of width
  const [width, setWidth] = React.useState(70);

  //check if it's the first time the component is rendered
  const isFirstRender = useRef(true);

  //handle line spacing change
  const handleChange = (event: any) => {
    console.log(event.target.value);
    setBodyTextSize(event.target.value);
    logseq.provideStyle({
      key: "body-text-size",
      style: `:root {
        --ls-page-text-size: ${bodyTextSize}px;
      }
      div#main-content-container {
        font-size: var(--ls-page-text-size);
      }
      .main-container {
        
      }`,
    });
  };
  const handleLineSpacingChange = (event: any) => {
    console.log(event.target.value);
    setLineSpacing(event.target.value);

    logseq.provideStyle({
      key: "body-spacing",
      style: `.ls-block{padding: ${lineSpacing}px 0;}`,
    });
  };
  const handleWidthChange = (event: any) => {
    console.log(event.target.value);
    setWidth(event.target.value);
    logseq.provideStyle({
      key: "body-width",
      style: `:root {--ls-main-content-max-width: ${width}em;}`,
    });
  };
  const visible = useAppVisible();
  if (visible) {
    return (
      <main className="">
        <div className="flex justify-center">
          <div className="smartblock-inserter grid grid-cols-1 gap-3">
            <h1 className="font-bold text-xl">Style Customizer</h1>
            <div className="grid-cols-2 grid gap-20 w-full">
              <div className=" text-base">Body Text Size</div>
              <input
                type="range"
                min={2}
                max={30}
                value={bodyTextSize}
                onChange={handleChange}
              ></input>
            </div>
            <div className="grid-cols-2 grid gap-20 w-full">
              <div className="text-base">Line Spacing</div>
              <input
                type="range"
                min={0}
                max={10}
                value={lineSpacing}
                onChange={handleLineSpacingChange}
              ></input>
            </div>
            <div className="grid-cols-2 grid gap-20 w-full">
              <div className="text-base">Width</div>
              <input
                type="range"
                min={0}
                max={100}
                value={width}
                onChange={handleWidthChange}
              ></input>
            </div>
          </div>
        </div>
      </main>
    );
  }
  return null;
}

export default App;
