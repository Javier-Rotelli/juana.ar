import Page from "./Page";

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxo_uShAdsTnZiVVeFZBsUm4IvkP9oG_2oiTLJqFEOaN4aKIlG0S14cgb34nL_ibO9SAg/exec";

function RSVPForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch(WEB_APP_URL, {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (!response.ok) {
        console.error("Network response was not ok");
        console.error(response);
        throw new Error("Network response was not ok");
      }
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
      <label htmlFor="Email">Email:</label>
      <input name="Email" type="email" required />
      <label htmlFor="Asistentes">Asistentes:</label>
      <input name="Asistentes" type="text" required />
      <label htmlFor="Restricciones">Restricciones alimentarias:</label>
      <input name="Restricciones" type="text" />
      <label htmlFor="cancion">Mi canción:</label>
      <input name="cancion" type="text" />
      <button type="submit">CONFIRMAR ASISTENCIA</button>
    </form>
  );
}

function SixthPage() {
  return (
    <Page className="sixth-page">
      <img src="public/Image 4.png" />
      <RSVPForm />
    </Page>
  );
}

export default SixthPage;
