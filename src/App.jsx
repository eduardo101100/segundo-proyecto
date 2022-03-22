
		const App= () => {
      const persona={
        nombre:"Eduardo",
        Apellido:"Lopez",
        Edad:16,
        
        direccion:{
          Calle:"Hidalgo",
          numExt:650,
          numIn:"",
          ciudad:"tuxtepec",
        }
      };
    
    const contactoPersona={
      telefono:"283 1633729",
      email:"lalolopez@gmail.com",
      web:"www.simpsomps.net",
    };
    
    const infoPersona = {...persona, ...contactoPersona, empresa: "AnimeYT"};
    infoPersona.apodo="Ero sennin"
    
    //console.table(infoPersona);
    
    
      const {Edad, nombre, Apellido}= persona;
      const {Calle, numExt, numIn, ciudad}= persona.direccion;
      const humanos=["Jose", "Eira", "Rafa", "Ale"];
      const [padre, madre, hermano, hermana]=humanos;
      const mascotas = ["Santa's helper", "Snow Ball"];
    
      const familia =[...humanos, ...mascotas, "Shikamaru"];
      console.log(familia)
    
    
      return(
      <div className="App">
        {/*ECMAScript 6*/}
        <h3>{`Mi nombre es ${nombre} ${Apellido}, tengo ${Edad} años y vivo en ${Calle} número ${numExt}, ${ciudad}`}</h3>
       <br />
       {"Mi familia lo conforman: "}
       <ul>
         <li>{`Mi padre: ${padre}`}</li>
         <li>{`Mi hermanos: ${hermano} y ${hermana}`}</li>
         <li>{`Mi madre: ${madre}`}</li>
    
       </ul>
      </div>
    );
    
    }
    
    export default App;

// 