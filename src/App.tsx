import "./App.css";
import Tabs from "./Tabs";

function App() {
  return (
    <div className='App'>
      <Tabs>
        <div title={"Tab 1"}> Content of Tab 1 </div>
        <div title={"Tab 2"}> Content of Tab 2 </div>
        <div title={"Tab 3"}>
          {" "}
          Content of Tab 3 Content of Tab 3 Content of Tab 3 3 Content of Tab 3
          3 Content of Tab 3 3 Content of Tab 3
        </div>
      </Tabs>
    </div>
  );
}

export default App;
