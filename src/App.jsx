import { useEffect } from "react";
import { imageThunk } from "./redux/imageSlice";
import { useDispatch, useSelector } from "react-redux";
import ImageContainer from "./component/ImageContainer";
import SearchInput from "./component/SearchInput";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.image);

  useEffect(() => {
    if (store.length === 0) dispatch(imageThunk());
    console.log(store);
  }, [dispatch]);

  return (
    <div className="dark:bg-dark bg-light text-dark dark:text-light ">
      <Navbar />
      <SearchInput />
      <ImageContainer images={store} />
      <Footer />
    </div>
  );
}

export default App;
