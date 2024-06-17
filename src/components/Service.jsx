import ServicesContent from "./ServicesContent";
import PropTypes from "prop-types";

const Service = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-20 px-5 box-border gap-[80px] max-w-full text-center text-48xl text-heading font-headings-h6-700 mq450:gap-[20px] mq750:gap-[40px] mq750:pt-[52px] mq750:pb-[52px] mq750:box-border ${className}`}
    >
      <ServicesContent
        variousServices="Various Services "
        weProvide="We Provide"
      />
      <div className="w-[1244px] flex flex-row items-start justify-center gap-[24px] max-w-full text-9xl mq1050:flex-wrap">
        <div className="flex-[0.9177] shadow-[4px_11px_35px_rgba(0,_0,_0,_0.07)] rounded-2xl bg-mediumslateblue overflow-hidden flex flex-col items-start justify-start py-6 px-[35px] box-border gap-[24px] min-w-[220px] max-w-[293px] text-white mq450:flex-1">
          <div className="flex flex-row items-start justify-start py-0 px-[71px]">
            <img
              className="h-20 w-20 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/creative-design.svg"
            />
          </div>
          <h2 className="m-0 self-stretch relative text-inherit leading-[32px] font-semibold font-inherit mq450:text-3xl mq450:leading-[26px]">
            Creative Designer
          </h2>
        </div>
        <div className="flex-1 shadow-[4px_11px_35px_rgba(0,_0,_0,_0.07)] rounded-2xl bg-white overflow-hidden flex flex-col items-start justify-start py-6 px-[25px] box-border gap-[24px] min-w-[220px] max-w-[293px]">
          <div className="self-stretch flex flex-row items-start justify-center">
            <img
              className="h-20 w-20 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/content-marketing.svg"
            />
          </div>
          <h2 className="m-0 self-stretch relative text-inherit leading-[32px] font-semibold font-inherit mq450:text-3xl mq450:leading-[26px]">
            Content Marketing
          </h2>
        </div>
        <div className="flex-1 shadow-[4px_11px_35px_rgba(0,_0,_0,_0.07)] rounded-2xl bg-white overflow-hidden flex flex-col items-start justify-start py-6 px-[25px] box-border gap-[24px] min-w-[220px] max-w-[293px]">
          <div className="self-stretch flex flex-row items-start justify-center">
            <img
              className="h-20 w-20 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/video-content.svg"
            />
          </div>
          <h2 className="m-0 self-stretch relative text-inherit leading-[32px] font-semibold font-inherit mq450:text-3xl mq450:leading-[26px]">
            Video Production
          </h2>
        </div>
        <div className="flex-[0.9506] shadow-[4px_11px_35px_rgba(0,_0,_0,_0.07)] rounded-2xl bg-white overflow-hidden flex flex-col items-start justify-start py-6 px-[31px] box-border gap-[24px] min-w-[220px] max-w-[293px] mq450:flex-1">
          <div className="flex flex-row items-start justify-start py-0 px-[75px]">
            <img
              className="h-20 w-20 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/mail.svg"
            />
          </div>
          <h2 className="m-0 self-stretch h-16 relative text-inherit tracking-[-0.05px] leading-[32px] font-semibold font-inherit inline-block mq450:text-3xl mq450:leading-[26px]">
            Email Marketing
          </h2>
        </div>
      </div>
    </section>
  );
};

Service.propTypes = {
  className: PropTypes.string,
};

export default Service;
