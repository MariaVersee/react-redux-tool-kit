import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart.items);

  return (
    <>
      <h2>{cart.length}</h2>
    </>
  );
}
