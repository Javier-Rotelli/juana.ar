import Page from "./Page";

function SecondPage() {
  return (
    <Page>
      <div className="chirimbolo angel" />
      <div className="chirimbolo copas2" />

      <img src="public/Image 1.png" />
      <img src="public/Image 2.png" />
      <img
        src="public/Image 3.png"
        style={{ alignSelf: "flex-start", marginTop: 180 }}
      />
    </Page>
  );
}

export default SecondPage;
