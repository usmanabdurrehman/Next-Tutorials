import axios from "axios";

const getData = async () => {
  const { data } = await axios.get("https://hub.dummyapis.com/delay?seconds=3");
  return data;
};

export default async function Home() {
  const data = await getData();

  return data;
}
