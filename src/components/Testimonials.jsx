import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

import styles from "../style";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} relative flex-col`}
    >
      <div className="blue__gradient absolute -right-[50%] bottom-40 z-[0] h-[60%] w-[60%] rounded-full" />

      <div className="relative z-[1] mb-6 flex w-full flex-col items-center justify-between sm:mb-16 md:flex-row">
        <h2 className={styles.heading2}>
          What People are <br className="hidden sm:block" /> saying about us
        </h2>

        <div className="mt-6 w-full md:mt-0">
          <p className={`${styles.paragraph} max-w-[450px] text-left`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="feedback-container relative z-[1] flex w-full flex-wrap justify-center sm:justify-start sm:gap-5 md:gap-10">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
