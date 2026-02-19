import Card from "../components/Card";
import ResearchBar from "../components/ResearchBar";

function Teams() {
  return (
    <div className="relative min-h-[90vh]">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/pexels-karola-g-6634461.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <section className="relative z-10 py-5">
        <ResearchBar />
      </section>
      <section className="relative z-10">
        <div className="bg-latte w-[75%] mx-auto p-8 rounded-2xl mt-5">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-[10%] lg:w-[5%]">
              <img
                src="/images/start-up.png"
                alt="logo start"
                className="w-full"
              />
            </div>
            <h3 className="font-Mitr text-center text-xl lg:text-2xl text-chocolate mb-2">
              Last created team
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-4">
            <Card
              infoCTA="Voir plus"
              name="Team"
              info="team"
              photo="/images/stardew-valley.jpg"
              linkToCTA="/team/1"
            />
            <Card
              infoCTA="Voir plus"
              name="Team"
              info="team"
              photo="/images/stardew-valley.jpg"
              linkToCTA="/team/2"
            />
            <Card
              infoCTA="Voir plus"
              name="Team"
              info="team"
              photo="/images/stardew-valley.jpg"
              linkToCTA="/team/3"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Teams;
