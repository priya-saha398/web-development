import { Fragment } from "react";
import "./App.css";
import UseEffect from "./UseEffect/UseEffect";
// import StateLifing from "./StateLifing/StateLifting";
// import UseState from "./UseState";
// import Event_handler from "./Event_handler";
// import Card from "./components/Card";
// import Data from "../src/data.json";
// import UniqueId from "./components/UniqueId";
// import NestedMapping from "./components/NestedMapping";
// import PracticeMapping from "./components/PracticeMapping";
// import PracticeTwoMapp from "./components/PracticeTwoMapp";
// import SetState from "./components/SetState";
// import State from "./components/State";
// import Form from "./Form/Form";
// import StateLifting from "./StateLifing/StateLifting";
// import Parent from "./StateLiftingCTP/Parent";
// import Toggle from "./Toggle/Toggle";
function App() {
  // let items = [];
  // USING FOR LOOP........
  // for (let i = 0; i < Data.length; i++) {
  //   item.push(<Card titleText={Data[i].title} descText={Data[i].desc} />);

  // USING MAP:..........
  // items = Data.map((item) => (
  //   <Card titleText={item.title} descText={item.desc} />
  // ));
  // const handleData = (data) => {
  //   console.log(data);
  // };
  return (
    <Fragment>
      {/* {Data.map((item, index) => (
        <Card key={index} titleText={item.title} descText={item.desc} />
      ))} */}
      {/* <UniqueId /> */}
      {/* <NestedMapping /> */}
      {/* <SetState /> */}
      {/* <PracticeMapping /> */}
      {/* <State /> */}
      {/* <PracticeTwoMapp /> */}
      {/* <Event_handler /> */}
      {/* <UseState /> */}
      {/* <Form /> */}
      {/* <StateLifting onMethodData={handleData} /> */}
      {/* <Parent /> */}
      {/* <Toggle /> */}
      <UseEffect />
    </Fragment>
  );
}

export default App;
