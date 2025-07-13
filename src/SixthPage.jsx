import { useState } from "react";
import Page from "./Page";
import { useFormStatus } from "react-dom";

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxo_uShAdsTnZiVVeFZBsUm4IvkP9oG_2oiTLJqFEOaN4aKIlG0S14cgb34nL_ibO9SAg/exec";

function Submit() {
  const status = useFormStatus();
  return <button disabled={status.pending}>Submit</button>;
}

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
      <h1>Los esperamos!</h1>
      {error && <p className="error">{error}</p>}
      <label htmlFor="Email">Email:</label>
      <input
        name="Email"
        type="email"
        required
        onInvalid={(e) => {
          e.target.setCustomValidity("Por favor, ingresa un email válido.");
        }}
        onInput={(e) => {
          e.target.setCustomValidity("");
        }}
      />
      <label htmlFor="Asistentes">
        Asistentes (indicar nombre y apellido):
      </label>
      <input
        name="Asistentes"
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
      <label htmlFor="Restricciones">Restricciones alimentarias:</label>
      <input name="Restricciones" type="text" />
      <label htmlFor="cancion">Mi canción:</label>
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
      <img src="Image 4.png" />
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
