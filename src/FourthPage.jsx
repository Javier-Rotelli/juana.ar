import Page from "./Page";

function FourthPage() {
  return (
    <Page className="fourth-page">
      <div className="title-card">
        <div className="text">
          <h1>Cuándo?</h1>
          <h2>Sábado 6 de septiembre de 2025</h2>
          <h3>El evento comienza a las 14:00hs.</h3>
        </div>
        <img src="public/Calendar.svg" alt="Ana & Juan" />
      </div>

      <div className="title-card">
        <div className="text">
          <h1>Donde?</h1>
          <h2>Estancia Santa Elena</h2>
          <h3>Dr. Muñiz 720, Luján</h3>
          <a
            href="https://maps.app.goo.gl/2UhQXJnMeRCEK9fs6"
            target="_blank"
            rel="noopener noreferrer"
          >
            ver mapa
          </a>
        </div>
        <img src="public/Table.svg" alt="Ana & Juan" />
      </div>
    </Page>
  );
}

export default FourthPage;
