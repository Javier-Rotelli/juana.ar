import "./App.css";

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxo_uShAdsTnZiVVeFZBsUm4IvkP9oG_2oiTLJqFEOaN4aKIlG0S14cgb34nL_ibO9SAg/exec";

/**
 * Creates a json object including fields in the form
 *
 * @param {HTMLElement} form The form element to convert
 * @return {Object} The form data
 */
const getFormJSON = (form) => {
  const data = new FormData(form);
  return Array.from(data.keys()).reduce((result, key) => {
    if (result[key]) {
      result[key] = data.getAll(key);
      return result;
    }
    result[key] = data.get(key);
    return result;
  }, {});
};

function App() {
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
    <div>
      <form method="POST" action={WEB_APP_URL} onSubmit={handleSubmit}>
        <input name="Email" type="email" placeholder="Email" required />
        <input name="Name" type="text" placeholder="Name" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
