import SummaryBox from "./components/Summarybox";
import data from "./data/data.json";

function App() {

  const summaryItem = data.summaryItem;

  return (
   <SummaryBox
   title={summaryItem.title}
   description={summaryItem.description}
   planType={summaryItem.plan.type}
   planPrice={summaryItem.plan.price}
   />
  )
}

export default App

