import { quotes } from "../assets";

const FeedbackCard = ({ name, title, content, img }) => {
  return (
    <div className="hover:bg-dimWhite/5 relative my-5 flex max-w-[370px] cursor-pointer flex-col rounded-[20px] px-10 pt-12 transition-all duration-300 lg:hover:-translate-y-5">
      <div className="flex flex-row">
        <img
          src={img}
          alt={name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="ml-4 flex flex-col">
          <h4 className="font-poppins text-[20px] font-semibold leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins text-dimWhite text-[16px] font-normal leading-[24px]">
            {title}
          </p>
        </div>
      </div>

      <p className="font-poppins my-10 text-[18px] font-normal leading-[32.4px] text-white">
        {content}
      </p>

      {/* <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" /> */}
    </div>
  );
};

export default FeedbackCard;
