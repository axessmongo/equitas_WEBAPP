import MainRouter from './MainRouter';

function App() {

  const arr = [1,2,3,4,5]
  
  let [one, two, ...balanced] = arr

  console.log(one, two, balanced);

  return (
    <div clas sName="App">
      <MainRouter/>
    </div>
  );
}

export default App;
