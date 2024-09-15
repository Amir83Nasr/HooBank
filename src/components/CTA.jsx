import Button from "./Button";
import styles from "../style";
import { logo } from "../assets";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} max-sm:text-center max-sm:${styles.paddingY} max-sm:${styles.paddingX} bg-black-gradient-2 border-primary hover:border-secondary box-shadow cursor-pointer flex-col rounded-[24px] border px-6 transition-all duration-500 sm:flex-row sm:px-12 sm:py-8`}
    >
      <div className="flex flex-1 flex-col">
        <h2 className={styles.heading2}>
          Let’s try our <span className="text-secondary">service</span> now!
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div
        className={`${styles.flexCenter} ml-0 mt-10 max-sm:hidden sm:ml-10 sm:mt-0`}
      >
        <a href="#">
          <img src={logo} alt="HooBank" />
        </a>
      </div>
    </section>
  );
};

export default CTA;
