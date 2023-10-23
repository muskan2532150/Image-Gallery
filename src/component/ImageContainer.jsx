import react from "react";
import SearchInput from "./SearchInput";
import { HeartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const ImageContainer = ({ images }) => {
  return (
    <>
      <SearchInput />
      <div className="dark:bg-dark bg-light text-dark dark:text-light ">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {images.map((image) => (
              <Link to={`/image/${image.id}`}>
                <div key={image.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={image.urls.regular}
                      alt={image.alt_description}
                      loading="lazy"
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <h3 className="text-lg text-gray-700 font-bold">
                      {image.user.name}
                    </h3>
                    <p className="text-lg text-gray-700 font-bold flex">
                      <HeartIcon className="h-6 w-6 text-red-400" />
                      {image.likes}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageContainer;
