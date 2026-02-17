import CTA from "../components/CTA";
import Card from "../components/Card";

function Tournaments() {
  return (
    <>
      <section>
        <div className="bg-latte w-[40%] mx-auto p-8 rounded-2xl mt-5">
          <h3 className="font-Mitr text-center text-2xl text-chocolate mb-2">
            Last tournament
          </h3>
          <Card
            infoCTA="Voir plus"
            name="Test"
            info="coucou"
            photo="/images/stardew-valley.jpg"
            linkToCTA="#"
          />
        </div>
      </section>
      <section className="my-5 py-5">
        <h3 className="font-Mitr text-center text-2xl text-latte mb-2">
          Upcoming
        </h3>
        <div className="flex gap-4 justify-center">
          <div className="w-[30%] mt-4">
            <Card
              infoCTA="test"
              name="Test"
              info="coucou"
              photo="/images/stardew-valley.jpg"
              linkToCTA="#"
            />
          </div>
          <div className="w-[30%] mt-4">
            <Card
              infoCTA="test"
              name="Test"
              info="coucou"
              photo="/images/stardew-valley.jpg"
              linkToCTA="#"
            />
          </div>
          <div className="w-[30%] mt-4">
            <Card
              infoCTA="test"
              name="Test"
              info="coucou"
              photo="/images/stardew-valley.jpg"
              linkToCTA="#"
            />
          </div>
        </div>
        <CTA text="See all" buttonWidth="20%" linkTo="#" />
      </section>
      <section className="my-5 py-5">
        <h3 className="font-Mitr text-center text-2xl text-latte mb-2">
          Passed
        </h3>
        <div className="flex gap-4 justify-center">
          <div className="w-[30%] mt-4">
            <Card
              infoCTA="test"
              name="Test"
              info="coucou"
              photo="/images/stardew-valley.jpg"
              linkToCTA="#"
            />
          </div>
          <div className="w-[30%] mt-4">
            <Card
              infoCTA="test"
              name="Test"
              info="coucou"
              photo="/images/stardew-valley.jpg"
              linkToCTA="#"
            />
          </div>
          <div className="w-[30%] mt-4">
            <Card
              infoCTA="test"
              name="Test"
              info="coucou"
              photo="/images/stardew-valley.jpg"
              linkToCTA="#"
            />
          </div>
        </div>
        <CTA text="See all" buttonWidth="20%" linkTo="#" />
      </section>
    </>
  );
}

export default Tournaments;
