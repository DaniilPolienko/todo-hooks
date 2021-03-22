import React, {useState, useEffect} from 'react'
import Todos from './components/Todos.js'

import './App.css';
import './components/Styles.css'

function App(props) {
  const [appState, setAppState] = useState();

//   useEffect(() => {
//     const apiUrl = 'https://todo-api-learning.herokuapp.com/';
//     axios.get(apiUrl).then((resp) => {
//       const allPersons = resp.data;
//       setAppState(allPersons);
//     });
//   }, [setAppState]);


//   async function makeGetRequest() {

//     let task = { name: 'John Doe', done: true };

//     let res = await axios.post('https://todo-api-learning.herokuapp.com/v1/task/{1}', task);

//     let data = res.data;
//     console.log(data);
// }
//   useEffect(()=> {
//     makeGetRequest();
//   },[])
  



  console.log(appState)

  return (
    <section className="section">
      <Todos/>
    </section>
  );
}

export default App;
