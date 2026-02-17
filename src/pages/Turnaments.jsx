import CTA from "../components/CTA";
import Card from "../components/Card";

function Turnaments() {
  return (
    <section>
      <div className="w-[50%] mt-4">
        <Card
          infoCTA="test"
          name="Test"
          info="coucou"
          photo="/images/stardew-valley.jpg"
          linkToCTA="#"
        />
      </div>
    </section>
  );
}

export default Turnaments;
