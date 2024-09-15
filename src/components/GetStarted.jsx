import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} bg-blue-gradient animate-bounce hover:bg-blue-600  h-[140px] w-[140px] cursor-pointer rounded-full p-[2px]`}
  >
    <div
      className={`${styles.flexCenter}  group-hover:bg-blue-gradient h-[100%] w-[100%] flex-col rounded-full transition-colors duration-300`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins text-[18px] font-medium leading-[23.4px]">
          <span className="text-primary">Get</span>
        </p>
        {/* <img
          src={arrowUp}
          alt="arrow-up"
          className="h-[23px] w-[23px] object-contain"
          color="#00040f"
        /> */}
      </div>

      <p className="font-poppins text-[18px] font-medium leading-[23.4px]">
        <span className="text-primary">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
