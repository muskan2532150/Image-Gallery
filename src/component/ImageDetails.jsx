import {
  HeartIcon,
  ChatBubbleLeftIcon,
  ChatBubbleOvalLeftIcon,
  CurrencyRupeeIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ImageDetails = () => {
  const images = useSelector((state) => state.image);
  const { id } = useParams();
  const FilterData = images.filter((image) => image.id.includes(id));
  let image = FilterData[0];

  return (
    <div className="dark:bg-dark bg-light text-dark dark:text-light flex p-6 max-w-screen-xl mx-auto h-screen">
      <div className="w-1/2 pr-4">
        <img
          src={image.urls.full}
          alt={image.alt_description}
          className="w-full object-cover object-center h-full"
        />
      </div>

      <div className="w-1/2 pl-4">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
          {image.user.name}
        </h1>
        <p className="text-lg text-gray-700 font-bold flex dark:text-white">
          <HeartIcon className="h-6 w-6 text-red-400" />
          {image.likes}
        </p>

        {image.description && (
          <div>
            <h3 className="text-lg font-semibold dark:text-white text-underline">
              Description
            </h3>
            <p className="text-base text-gray-900 dark:text-white mt-2">
              {image.description}
            </p>
          </div>
        )}

        <div className="mt-4">
          <h3 className="text-lg font-semibold dark:text-white">Details</h3>
          <p className="text-base text-gray-900 dark:text-white mt-2">
            color
            {image.color}
          </p>
          {image.user.social && (
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Social Links:
              </h4>
              <ul className="flex space-x-4 mt-2">
                {image.user.social.instagram_username && (
                  <li>
                    <a
                      href={image.user.social.instagram_username}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600"
                    >
                      <ChatBubbleLeftIcon className="h-6 w-6" />
                      <span className="ml-2">Instagram UserName</span>
                    </a>
                  </li>
                )}
                {image.user.social.twitter_username && (
                  <li>
                    <a
                      href={image.user.social.twitter_username}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600"
                    >
                      <ChatBubbleOvalLeftIcon className="h-6 w-6" />
                      <span className="ml-2">Twitter Username</span>
                    </a>
                  </li>
                )}
                {image.user.social.paypal_email && (
                  <li>
                    <a
                      href={image.user.social.paypal_email}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600"
                    >
                      <CurrencyRupeeIcon className="h-6 w-6" />
                      <span className="ml-2">PayPal</span>
                    </a>
                  </li>
                )}
                {image.user.social.portfolio_url && (
                  <li>
                    <a
                      href={image.user.social.portfolio_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600"
                    >
                      <UserIcon className="h-6 w-6" />
                      <span className="ml-2">Portfolio</span>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
