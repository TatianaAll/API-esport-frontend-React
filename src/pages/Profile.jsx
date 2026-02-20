import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { oneUser } from "../services/UsersService";
import Spinner from "../components/Spinner";

function Profile() {
  let params = useParams();

  const [dataUser, setDataUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // search the data in backend
        const fetchingUser = await oneUser({ userId: params.id });
        // Set the data just fetched
        setDataUser(fetchingUser);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUser();
  }, [params.id]);
  console.log(dataUser);

  return (
    <>
      {!isLoading ? (
        <section>
          <h1 className="font-[CreamCake] text-chocolate text-5xl text-center p-4">
            {dataUser.firstname} {dataUser.lastname}
          </h1>
        </section>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default Profile;
