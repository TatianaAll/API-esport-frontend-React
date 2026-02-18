import Title from "../components/Title";
import CTA from "../components/CTA";

function Home() {
  return (
    <>
      <section className="flex items-center justify-center bg-[url('/images/cosyGame_homepage.jpg')] bg-cover bg-center h-[90vh]">
        <div className="flex rounded-3xl p-15 shadow-2xl/20 inset-shadow-sm inset-shadow-current/20 backdrop-blur-xs bg-light/60 w-fit">
          <Title mainTitle="Cosy Games" subtitle="tournaments" size="large" />
        </div>
      </section>
      <section className="p-6 w-[75%] mx-auto">
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="w-[5%]">
            <img
              src="/images/questionmark.png"
              alt="logo start"
              className="w-full"
            />
          </div>
          <h2 className="font-Mitr text-chocolate text-3xl text-center py-5">
            What is cosy Games tournaments ?
          </h2>
        </div>
        <div className="my-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            ratione repellat rem, enim vel labore sint nulla ea quia
            reprehenderit eligendi? Molestias atque aliquid neque sit,
            laboriosam omnis esse natus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus est
            nam atque, possimus repellat fugiat ipsa voluptate. Aperiam vero,
            libero assumenda molestias veritatis fuga, consequuntur laboriosam,
            optio magni voluptatibus velit?
          </p>
        </div>

        <CTA text="Register" buttonWidth="25%" />
      </section>
    </>
  );
}

export default Home;
