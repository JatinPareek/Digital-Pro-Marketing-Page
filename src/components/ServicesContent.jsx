import PropTypes from "prop-types";

const ServicesContent = ({ className = "", variousServices, weProvide }) => {
  return (
    <div
      className={`w-[1244px] flex flex-row items-start justify-center max-w-full text-center text-48xl text-heading font-headings-h6-700 ${className}`}
    >
      <div className="w-[626px] flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[88px] font-semibold font-inherit mq450:text-21xl mq450:leading-[53px] mq750:text-35xl mq750:leading-[70px]">
          <span>{variousServices}</span>
          <span className="text-mediumslateblue">{weProvide}</span>
        </h1>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-3 box-border max-w-full text-base text-main-text font-main-text-p2-400">
          <div className="flex-1 relative leading-[24px] inline-block max-w-full">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular.
          </div>
        </div>
      </div>
    </div>
  );
};

ServicesContent.propTypes = {
  className: PropTypes.string,
  variousServices: PropTypes.string,
  weProvide: PropTypes.string,
};

export default ServicesContent;
