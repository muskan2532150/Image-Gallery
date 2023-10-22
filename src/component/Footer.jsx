import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 text-gray-600 text-center">
      <div className="container mx-auto">
        <p className="text-sm font-bold">
          &copy; {new Date().getFullYear()} Imgfolio. All rights reserved.
          <br />
          Images provided by{" "}
          <a
            href="https://unsplash.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Unsplash
          </a>{" "}
          contributors.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
