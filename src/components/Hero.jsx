import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}
      >
        <div className="bg-discount-gradient mb-2 flex flex-row items-center rounded-[10px] px-4 py-[6px]">
          <img src={discount} alt="discount" className="h-[32px] w-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex w-full flex-row items-center justify-between">
          <h1 className="font-poppins ss:text-[72px] ss:leading-[100.8px] flex-1 text-[52px] font-semibold leading-[75px] text-white">
            The Next <br className="hidden sm:block" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex mr-0 hidden md:mr-4">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins ss:text-[68px] ss:leading-[100.8px] w-full text-[52px] font-semibold leading-[75px] text-white">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div
        className={`flex flex-1 ${styles.flexCenter} relative my-10 md:my-0`}
      >
        <img
          src={robot}
          alt="billing"
          className="relative z-[5] h-[100%] w-[100%]"
        />

        {/* gradient start */}
        <div className="pink__gradient absolute top-0 z-[0] h-[35%] w-[40%]" />
        <div className="white__gradient absolute bottom-40 z-[1] h-[80%] w-[80%] rounded-full" />
        <div className="blue__gradient absolute bottom-20 right-20 z-[0] h-[50%] w-[50%]" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
