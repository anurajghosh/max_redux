import "./App.css";
import Header from "./components/Header";
import useFetch from "./components/useFetch";
const App = () => {
  const [data] = useFetch(
    "https://hub.dummyapis.com/employee?noofRecords=5&idStarts=1001"
  );
  return (
    <>
      <Header />
      {data.map((e, i) => {
        return (
          <div key={i}>
            <h1>{e.firstName}</h1>
            <h2>{e.lastName}</h2>
          </div>
        );
      })}
    </>
  );
};

export default App;
