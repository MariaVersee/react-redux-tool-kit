import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";

export default function ItemCard() {
  const dispatch = useDispatch();
  const item1={id:1,name:"book_1"}

  return (
    <>
      <button onClick={()=>dispatch(addItem(item1))}>add item in cart</button>
    </>
  );
}
