import Image from "next/image";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ComboForm from "./components/ComboForm";
import ComboList from "./components/ComboList";

export default function Home() {
  return (
  <Provider store={store}>
   <ComboForm/>
   <ComboList/>
  </Provider>
  );
}
