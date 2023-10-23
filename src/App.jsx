import { useEffect } from "react";
import { imageThunk } from "./redux/imageSlice";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ImageContainer from "./component/ImageContainer";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ImageDetails from "./component/ImageDetails";

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
      <Routes>
        <Route path="/" element={<ImageContainer images={store} />} />
        <Route path="/image/:id" element={<ImageDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
