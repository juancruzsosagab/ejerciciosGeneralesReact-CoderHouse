const MascaraInput = () => {
  const change = (e) => {
    console.log(e.target.value);
    const arrayVocal = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    arrayVocal.forEach((a) => {
      if (e.target.value.includes(a)) {
        console.log("Hola");
        const resultado = e.target.value.slice(0, -1);
        e.target.value = resultado;
        alert("no se pueden ingresar vocales");
      }
    });
  };

  return (
    <>
      <h1>Hola</h1>
      <input type="text" onChange={change} />
    </>
  );
};

export default MascaraInput;
