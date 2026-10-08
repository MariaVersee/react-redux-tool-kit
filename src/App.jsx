import { useSelector } from "react-redux";
import Cart from "./components/Cart";
import ItemCard from "./components/ItemCard";

import ThemeBtn from "./components/ThemeBtn";

export default function App() {
  const theme = useSelector((state) => state.theme);

  console.log(theme);
  return (
    <>
      <main className="p-6 flex flex-col gap-4 items-start justify-start">
        <h2 className={`${theme ? "text-red-500" : "text-green-500"} text-8xl`}>
          Hello React
        </h2>
        <Cart />
        <ItemCard />
        <ThemeBtn />
      </main>
    </>
  );
}
