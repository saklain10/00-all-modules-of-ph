import './App.css'
import { add, diff, mult, divide } from './utilities/math/math';

function App() {
  const sum = add(2, 4);
  const subs = diff(3, 6);
  const gonfol = mult(7, 4);
  const divisionResult = 15 / 3;
  const something = divide(25, 5);

  console.log(sum, subs, gonfol, divisionResult, something);

  return (
    <>
      <h1>Check console output!</h1>
    </>
  );
}

export default App;
