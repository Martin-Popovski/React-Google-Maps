import { useEffect, useState } from "react";
import useHttp from "../hooks/httpHook";
import UsersRepository from "../api/UsersRepository";
import { GoogleMap } from "../components/GoogleMap/GoogleMap";
import Spinner from "../components/Spinner/Spinner";
import { User } from "../models/User";
import { TradeType } from "../models/TradeType";
import { UserType } from "../models/UserType";
import { MarkerColor } from "../models/MarkerColor"


const Home = () => {
  const [users, setUsers] = useState([]);
  const { sendRequest, isLoading } = useHttp();

  useEffect(() => {
    async function getUsers() {
      const response = await sendRequest(UsersRepository.get());

      if (response) {
        const users = response.data;

        for (const user of users) {
          setUserTypeMarkerColor(user);
        }

        setUsers(users);
      } else {
        // Show error notification in real app
      }
    }
    getUsers();
  }, []);

  /**
   * Set the color of the marker depending on the trade type and user type
   */
  const setUserTypeMarkerColor = (user: User) => {
    if (
      user.primaryTradeType === TradeType.Buyer ||
      user.primaryTradeType === TradeType.Seller
    ) {
      user.userMarkerColor =
        user.primaryTradeType === TradeType.Buyer ? MarkerColor.Green : MarkerColor.Yellow;
    } else {
      switch (user.userTypeIdentifier) {
        case UserType.Advisor:
          user.userMarkerColor = MarkerColor.Black;
          break;
        case UserType.Farmer:
          user.userMarkerColor = MarkerColor.Grey;
          break;
        case UserType.TradingHouse:
          user.userMarkerColor = MarkerColor.Blue;
          break;
        case UserType.Mill:
          user.userMarkerColor = MarkerColor.Orange;
          break;
      }
    }
  };

  return (
    <section>
      <GoogleMap users={users} />
      {isLoading && <Spinner />}
    </section>
  );
};

export default Home;
