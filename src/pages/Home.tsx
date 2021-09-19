import { useEffect, useState } from "react";
import useHttp from "../hooks/httpHook";
import UsersRepository from "../api/UsersRepository";
import { GoogleMap } from "../components/GoogleMap/GoogleMap";
import Spinner from "../components/Spinner/Spinner";

const Home = () => {
  const [users, setUsers] = useState([]);
  const { sendRequest, isLoading, error } = useHttp();

  useEffect(() => {
    async function getUsers() {
      const response = await sendRequest(UsersRepository.get());

      if (response && !error) {
        setUsers(response.data);
      } else {
        // Show error in real app
      }
    }
    getUsers();
  }, []);

  return (
    <section>
      <GoogleMap users={users} />
      {isLoading && <Spinner />}
    </section>
  );
};

export default Home;
