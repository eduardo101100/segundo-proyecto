var textoVar = "texto var 2";
let textoLet = "texto let 2";
const textoConst = "texto conts 1";


if (true) {
textoVar = 5;
textoLet = 10;


}


const App = () => {
  return (
    <div className="App">

     <h1>{textoVar} </h1>
     <h1>{textoLet} </h1>
     <h1>{textoConst} </h1>

    </div>
  );
};

export default App;
