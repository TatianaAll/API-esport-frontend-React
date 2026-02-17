import Title from "../components/Title";
import CTA from "../components/CTA";

function Home() {
  return (
    <>
      <section className="flex items-center justify-center bg-[url('/images/cosyGame_homepage.jpg')] bg-cover bg-center h-[90vh]">
        <div className="flex rounded-3xl p-15 shadow-2xl/20 inset-shadow-sm inset-shadow-current/20 backdrop-blur-xs bg-light/60 w-fit">
          <Title mainTitle="Cosy Games" subtitle="Turnament" size="large" />
        </div>
      </section>
      <section className="p-6">
        <h2 className="font-Mitr text-chocolate text-3xl text-center">
          What is cosy Games turnaments ?
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ratione
          repellat rem, enim vel labore sint nulla ea quia reprehenderit
          eligendi? Molestias atque aliquid neque sit, laboriosam omnis esse
          natus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus est nam
          atque, possimus repellat fugiat ipsa voluptate. Aperiam vero, libero
          assumenda molestias veritatis fuga, consequuntur laboriosam, optio
          magni voluptatibus velit?
        </p>

        <CTA text= "Register" buttonWidth="25%"/>
      </section>
    </>
  );
}

export default Home;
