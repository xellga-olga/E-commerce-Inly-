import Title from "../components/Title";
import about_img from "../assets/about_img.jpg";
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl pt-8 border-t text-center">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="mt-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[350px]" src={about_img} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            INLY was created with a vision to bring innovation and transform the
            way people shop online. Our story started with a clear goal: to
            build a platform where customers can effortlessly find, explore, and
            purchase a variety of products without leaving their homes.
          </p>
          <p>
            From the beginning, we have strived to offer a wide array of
            high-quality products that suit all preferences and lifestyles.
            Whether it is fashion, beauty, electronics, or home essentials, our
            collection is carefully curated from reliable brands and suppliers.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            At INLY, our vision is to provide customers with freedom of choice,
            convenience, and trust. We are committed to delivering a smooth and
            enjoyable shopping experience, from browsing to delivery and
            customer support.
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Uncompromising Quality:</b>
          <p className="text-gray-600">
            We carefully handpick every product, ensuring that only the best
            make it to our store, meeting the highest standards of excellence.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Seamless Shopping Experience:</b>
          <p className="text-gray-600">
            Our platform is designed for ease of use, allowing you to enjoy a
            smooth and effortless shopping journey from start to finish.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Dedicated Support:</b>
          <p className="text-gray-600">
            Our committed customer support team is always ready to help,
            ensuring that your experience with us is nothing short of
            exceptional.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
