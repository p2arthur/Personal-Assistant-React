import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./imgs/alexa.png";
import CortanaImage from "./imgs/cortana.png";
import SiriImage from "./imgs/siri.png";

function App() {
  const assistant = [
    {
      title: "Alexa",
      handle: "@alexa99",
      image: AlexaImage,
      description: "Alexa was created by Amazon and helps you buy things",
    },
    {
      title: "Cortana",
      handle: "@cortana32",
      image: CortanaImage,
      description: "Cortana was created by Microsoft and helps you find things",
    },
    {
      title: "Siri",
      handle: "@siri01",
      image: SiriImage,
      description:
        "Siri was created by Apple and is being phased out and gets no news",
    },
  ];

  const [Alexa, Cortana, Siri] = assistant;

  const renderedPDAs = assistant.map((assistant, index) => (
    <div className="column is-4" key={index}>
      <ProfileCard
        title={assistant.title}
        handle={assistant.handle}
        imageSrc={assistant.image}
        alt={`${assistant.title} Logo`}
        description={assistant.description}
      />
    </div>
  ));

  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
          <p className="subtitle">The main PDAs</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">{renderedPDAs}</div>
        </section>
      </div>
    </div>
  );
}

export default App;
