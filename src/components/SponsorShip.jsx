import PropTypes from "prop-types";

const SponsorShip = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-grey overflow-hidden flex flex-col items-center justify-center py-8 px-5 box-border gap-[40px] max-w-full text-left text-base text-main-text font-headings-h6-700 mq750:gap-[20px] ${className}`}
    >
      <div className="relative leading-[24px] font-semibold inline-block max-w-full">
        Trusted by the big ones, loved by everyone
      </div>
      <div className="w-[1244px] flex flex-row items-center justify-center py-0 px-[117px] box-border gap-[40px] max-w-full mq750:gap-[20px] mq750:pl-[29px] mq750:pr-[29px] mq750:box-border mq1050:flex-wrap mq1225:pl-[58px] mq1225:pr-[58px] mq1225:box-border">
        <div className="flex-1 flex flex-col items-center justify-center py-1 pr-[29px] pl-7 box-border min-w-[167px] max-w-[170px]">
          <img
            className="self-stretch h-8 relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/layer-12.svg"
          />
        </div>
        <div className="flex-[0.8319] flex flex-col items-center justify-center py-0 px-[38px] box-border min-w-[167px] max-w-[170px] mq450:flex-1">
          <img
            className="self-stretch h-8 relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/layer-22.svg"
          />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center py-1 pr-[29px] pl-7 box-border min-w-[167px] max-w-[170px]">
          <img
            className="self-stretch h-8 relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/layer-12.svg"
          />
        </div>
        <div className="flex-[0.8319] flex flex-col items-center justify-center py-0 px-[38px] box-border min-w-[167px] max-w-[170px] mq450:flex-1">
          <img
            className="self-stretch h-8 relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/layer-22.svg"
          />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center py-1 pr-[29px] pl-7 box-border min-w-[167px] max-w-[170px]">
          <img
            className="self-stretch h-8 relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/layer-12.svg"
          />
        </div>
      </div>
    </section>
  );
};

SponsorShip.propTypes = {
  className: PropTypes.string,
};

export default SponsorShip;
