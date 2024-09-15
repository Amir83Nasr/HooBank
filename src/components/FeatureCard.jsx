import styles from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row gap-2 justify-center items-center rounded-[20px] p-6 cursor-pointer transition-all duration-300 hover:bg-dimWhite/5 lg:hover:-translate-x-5`}>
    
    <div className={`h-[64px] w-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="h-[50%] w-[50%] object-contain flex items-center justify-center" />
    </div>

    <div className="ml-3 flex flex-1 flex-col">
      <h4 className="font-poppins mb-1 text-[18px] font-semibold leading-[23.4px] text-white">
        {title}
      </h4>
      <p className="font-poppins text-dimWhite text-[16px] font-normal leading-[24px]">
        {content}
      </p>
    </div>

  </div>
);

export default FeatureCard;
