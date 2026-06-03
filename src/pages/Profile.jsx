import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { oneUser } from "../services/UsersService";
import Spinner from "../components/Spinner";
import Card from "../components/Card";

function Profile() {
  let params = useParams();

  const [dataUser, setDataUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchingUser = await oneUser({ userId: params.id });
        setDataUser(fetchingUser);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, [params.id]);

  if (isLoading) return <Spinner />;

  return (
    <div className="min-h-screen bg-[#f5f1ec]">
      {/* BANDEAU */}
      <div className="h-30 bg-chocolate"></div>

      {/* PROFIL */}
      <div className="max-w-200 mx-auto bg-latte rounded-2xl p-6 mb-10 -mt-15 relative z-10 border border-light">
        {/* AVATAR */}
        <div className="flex justify-center">
          {dataUser.avatar ? (
            <img
              src={dataUser.avatar}
              alt="avatar"
              className="w-24 h-24 rounded-full border-2 border-latte object-cover"
            />
          ) : (
            <img
              src={"/images/stardew-valley.jpg"}
              alt="avatar"
              className="w-24 h-24 rounded-full border-2 border-latte object-cover"
            />
          )}
        </div>

        {/* NOM */}
        <h1 className="font-[CreamCake] text-3xl tracking-wide text-chocolate text-center mt-4">
          {dataUser.firstname} {dataUser.lastname}
        </h1>

        {/* ROLES */}
        <div className="flex justify-center gap-2 mt-2 flex-wrap">
          {dataUser.role?.map((role, i) => (
            <span
              key={i}
              className="bg-light text-chocolate px-3 py-1 rounded-full text-xs"
            >
              {role}
            </span>
          ))}
        </div>

        {/* INFOS */}
        <div className="text-center mt-4 text-sm text-chocolate">
          <p>{dataUser.email}</p>
          <p>{dataUser.nationality || "no nationality"}</p>
        </div>

        {/* FAVORITE GAME */}
        <div className="mt-8">
          <h2 className="text-xl text-center text-chocolate font-Mitr mb-4">
            Favorite game
          </h2>

          <div className="flex justify-center">
            <div className="w-60">
              <Card
                size="md"
                name={dataUser.favorite_game?.name || "Favorite game"}
                photo={
                  dataUser.favorite_game?.image || "/images/stardew-valley.jpg"
                }
                info="Favorite"
                showCTA={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
