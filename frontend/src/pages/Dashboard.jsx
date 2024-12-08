import { useState, useEffect } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
export const Dashboard = () => {
  const [money, setMoney] = useState(0);

  // Fetch the balance when the component mounts
  useEffect(() => {
    const fetchBalance = async () => {
      const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}` // Include token if required
        }
      });
      setMoney(response.data["balance"]);
    }

    fetchBalance();
  }, []);

  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance value={money} /> {/* Pass the money state directly */}
        <Users />
      </div>
    </div>
  );
};
