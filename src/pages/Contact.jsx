import Title from "../components/Title";
import contact_img from "../assets/contact_img.jpg";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-row justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[350px]" src={contact_img} />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="text-xl font-semibild text-gray-600">Our Store</p>
          <p className="text-gray-500">3532 Miskolc, Győri kapu 146</p>
          <p className="text-gray-500">
            Tel: (000) 000 - 1111 <br /> Email: admin_inly@test.com
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
