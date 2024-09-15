import { clients } from "../constants";

import styles from "../style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} w-full justify-around flex-wrap max-sm:gap-4 gap-14`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} min-w-[120px] cursor-pointer rounded-2xl p-4 transition-all duration-200 hover:bg-blue-200 sm:min-w-[192px] lg:hover:-translate-y-4`}
          >
            <img
              src={client.logo}
              alt="client-logo"
              className="w-[100px] object-contain sm:w-[156px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
