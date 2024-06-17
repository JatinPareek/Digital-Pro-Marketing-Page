import PropTypes from "prop-types";

const Card = ({ className = "", melyndaAngelina }) => {
  return (
    <div
      className={`flex-1 shadow-[4px_11px_35px_rgba(0,_0,_0,_0.07)] rounded-2xl bg-white overflow-hidden flex flex-col items-start justify-start py-10 pr-4 pl-6 box-border gap-[40px] min-w-[291px] max-w-full text-left text-9xl text-heading font-headings-h6-700 mq450:gap-[20px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start gap-[16px] mq450:flex-wrap">
        <img
          className="h-14 w-14 relative rounded-21xl overflow-hidden shrink-0 object-cover min-h-[56px]"
          alt=""
          src="/image-placeholder-8@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[179px]">
          <h2 className="m-0 self-stretch relative text-inherit leading-[32px] font-semibold font-inherit mq450:text-3xl mq450:leading-[26px]">
            {melyndaAngelina}
          </h2>
          <div className="flex flex-row items-start justify-start gap-[4px]">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
              loading="lazy"
              alt=""
              src="/star.svg"
            />
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
              alt=""
              src="/star.svg"
            />
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
              alt=""
              src="/star.svg"
            />
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
              alt=""
              src="/star.svg"
            />
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
              alt=""
              src="/star.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-base text-main-text font-main-text-p2-400 mq450:gap-[20px]">
        <blockquote className="m-0 self-stretch relative leading-[24px]">
          “Li Europan lingues es membres del sam familie. Lor separat existentie
          es un myth. Por scientie, musica, sport etc.”
        </blockquote>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  melyndaAngelina: PropTypes.string,
};

export default Card;
