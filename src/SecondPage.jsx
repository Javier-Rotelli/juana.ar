import Page from "./Page";

function SecondPage() {
  return (
    <Page className="second-page">
      <div className="chirimbolo angel" />
      <div className="chirimbolo copas2" />

      <img src="Image 1.png" />
      <img src="Image 2.png" />
      <img
        src="Image 3.png"
        style={{ alignSelf: "flex-start", marginTop: 180 }}
      />
    </Page>
  );
}

export default SecondPage;
