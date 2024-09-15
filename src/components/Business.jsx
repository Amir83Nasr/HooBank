import Button from "./Button";
import FeatureCard from "./FeatureCard";

import styles, { layout } from "../style";
import { features } from "../constants";

const Business = () => {
  return (
    <section id="feature" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="hidden sm:block" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button className={`mt-10`}>Get Started</Button>
      </div>

      <div className={`${layout.sectionImg} flex-col gap-y-6`}>
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Business;
