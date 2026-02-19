import CTA from "../components/CTA";
import Card from "../components/Card";

function Tournaments() {
  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/pexels-karola-g-6634461.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <section className="pt-5 relative z-10">
        <div className="bg-latte w-[80%] lg:w-[40%] mx-auto p-8 rounded-2xl">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-[7%] lg:w-[5%]">
              <img
                src="/images/hourglass.png"
                alt="logo start"
                className="w-full"
              />
            </div>
            <h3 className="font-Mitr text-center text-2xl text-chocolate mb-2">
              Last tournament
            </h3>
          </div>

          <Card
            infoCTA="Voir plus"
            name="Test"
            info="coucou"
            photo="/images/stardew-valley.jpg"
            linkToCTA="#"
          />
        </div>
      </section>
      <section className="my-5 py-5 relative z-10">
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="w-[7%] lg:w-[3%]">
            <img
              src="/images/calendar.jpg"
              alt="logo start"
              className="w-full"
            />
          </div>
          <h3 className="font-Mitr text-center text-2xl text-latte mb-2">
            Upcoming
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mb-4">
          <div className="w-[60%] lg:w-[30%] mt-4">
            <Card
              infoCTA="test"
              name="Test"
              info="coucou"
              photo="/images/stardew-valley.jpg"
              linkToCTA="#"
            />
          </div>
          <div className="w-[60%] lg:w-[30%] mt-4">
            <Card
              infoCTA="test"
              name="Test"
              info="coucou"
              photo="/images/stardew-valley.jpg"
              linkToCTA="#"
            />
          </div>
          <div className="w-[60%] lg:w-[30%] mt-4">
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

      <section className="mt-5 py-5 relative z-10">
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="w-[7%] lg:w-[3%]">
            <img src="/images/crown.png" alt="logo start" className="w-full" />
          </div>
          <h3 className="font-Mitr text-center text-2xl text-latte mb-2">
            Passed
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
          <div className="w-[60%] lg:w-[30%] mt-4">
            <Card
              infoCTA="test"
              name="Test"
              info="coucou"
              photo="/images/stardew-valley.jpg"
              linkToCTA="#"
            />
          </div>
          <div className="w-[60%] lg:w-[30%] mt-4">
            <Card
              infoCTA="test"
              name="Test"
              info="coucou"
              photo="/images/stardew-valley.jpg"
              linkToCTA="#"
            />
          </div>
          <div className="w-[60%] lg:w-[30%] mt-4">
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
    </div>
  );
}

export default Tournaments;
