import { useState } from "react";
import Page from "./Page";
import { useFormStatus } from "react-dom";

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycby7y1MZcv1WYyyHvPldjPmZL8i7I8ubXGve1hCtHSfLDHl_Uus97JAO79ppyUO3oJ2-JQ/exec";


function RSVPForm({ onSubmited }) {
  const [error, setError] = useState();
  const [pending, setPending] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPending(true);
    const formData = new FormData(event.target);

    fetch(WEB_APP_URL, {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (!response.ok) {
        console.error("Network response was not ok");
        console.error(response);
        setError(
          "Hubo un error al enviar el formulario. Por favor, intenta nuevamente.",
        );
      } else {
        setError("");
        onSubmited(true);
      }
      setPending(false);
    });
  };

  return (
    <form
      method="POST"
      action={WEB_APP_URL}
      onSubmit={handleSubmit}
      className="rsvp-form"
    >
      <h1 className="title desktop">Los esperamos!</h1>
      <p className="disclaimer">IMPORTANTE: Este formulario es individual y debe completarse por miembro de grupo familiar.</p>
      {error && <p className="error">{error}</p>}
      <label htmlFor="nombre">Nombre y apellido*:</label>
      <input
        name="nombre"
        type="text"
        required
        onInvalid={(e) => {
          e.target.setCustomValidity(
            "Por favor, ingresa al menos un asistente.",
          );
        }}
        onInput={(e) => {
          e.target.setCustomValidity("");
        }}
      />
      <label htmlFor="mail">Mail*:</label>
      <input
        name="mail"
        type="email"
        required
        onInvalid={(e) => {
          e.target.setCustomValidity("Por favor, ingresa un email válido.");
        }}
        onInput={(e) => {
          e.target.setCustomValidity("");
        }}
      />
      <legend htmlFor="Restricciones">Restricciones alimentarias:</legend>
      <fieldset className="radio-group">
        <label>
          <input type="radio" name="restricciones" value="no" />
          No aplica
        </label>
        <label>
          <input type="radio" name="restricciones" value="vegetariano" />
          Vegetariano
        </label>
        <label>
          <input type="radio" name="restricciones" value="vegano" />
          Vegano
        </label>
        <label>
          <input type="radio" name="restricciones" value="sin_tacc" />
          Sin tacc
        </label>
      </fieldset>
      <legend>Te interesa la opción traslado (combi)?</legend>
      <fieldset className="radio-group">
        <label>
          <input type="radio" name="transporte" value="no" />
          No
        </label>
        <label>
          <input type="radio" name="transporte" value="caba" />
          Si(CABA)
        </label>
        <label>
          <input type="radio" name="transporte" value="GBANorte" />
          Si(GBA Norte)
        </label>
        <label>
          <input type="radio" name="transporte" value="otros" />
          Si(Otros)
        </label>
      </fieldset>
      <label htmlFor="cancion">Canción sugerida:</label>
      <input name="cancion" type="text" />
      <button disabled={pending} type="submit">
        {!pending ? "CONFIRMAR ASISTENCIA" : "ENVIANDO..."}
      </button>
    </form>
  );
}

function SixthPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Page className="sixth-page">
      <h1 className="title mobile">Los esperamos!</h1>
      <img src="Boda.png" />
      {!submitted ? (
        <RSVPForm onSubmited={setSubmitted} />
      ) : (
        <div className="rsvp-success">
          {/* TODO: copy para esto */}
          <h1>Gracias por confirmar tu asistencia!</h1>
        </div>
      )}
    </Page>
  );
}

export default SixthPage;
