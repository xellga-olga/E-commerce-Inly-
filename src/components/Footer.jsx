import Logo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <div className="my-10 mt-20 text-sm">
      <div className="flex flex-col gap-10 sm:grid sm:grid-cols-[3fr_1fr_1fr] sm:gap-14">
        <div className="text-center sm:text-left">
          <img src={Logo} className="w-24 mb-5 mx-auto sm:mx-0" alt="logo" />
          <p>
            We strive for continuous development and innovation, while at the
            same time making sure to deliver tried-and-true models to our
            customers time and again.
          </p>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-xl mb-5 font-medium">COMPANY</p>
          <ul className="text-gray-600 flex flex-col gap-1">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="mb-5 text-xl font-medium">GET IN TOUCH</p>
          <ul className="text-gray-600 flex flex-col gap-1">
            <li>+111-111-1</li>
            <li>inly@test.com</li>
          </ul>
        </div>
      </div>

      <hr className="my-10 border-gray-300" />
      <p className="py-5 text-sm text-center">
        Copyright 2024 @ inly.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
