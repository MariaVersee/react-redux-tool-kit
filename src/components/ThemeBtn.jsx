import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../features/themeSlice";

const ThemeBtn = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button className="border" onClick={() => dispatch(toggle())}>
        change color
      </button>
    </>
  );
};
export default ThemeBtn;
