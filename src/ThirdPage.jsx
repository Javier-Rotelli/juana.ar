import Page from "./Page";

function Datita({ src, text, title }) {
  return (
    <div className="datita">
      <div className="datita-image">
        <img src={`${src}.svg`} alt="Datita" />
      </div>
      <div className="datita-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
function ThirdPage() {
  return (
    <Page className="third-page">
      <h1>Datita Importante</h1>
      <div className="datitas">
        <Datita
          src="Shoes"
          title="Vestimenta"
          text="Siéntanse libres de armar un look ecléctico para un evento de día y noche. Alentamos el uso de colores y estampas."
        />
        <Datita
          src="Plate"
          title="Accesorios"
          text="Bienvenidos sombreros, anteojos de sol y todo accesorio que quieran sumar. Calzado amable para caminar y bailar sobre césped"
        />
        <Datita
          src="Music"
          title="Sumá tu música"
          text="Los invitamos a compartir sus canciones preferidas. Pueden adjuntar nombre y artista en el form de confirmación."
        />
      </div>
    </Page>
  );
}

export default ThirdPage;
