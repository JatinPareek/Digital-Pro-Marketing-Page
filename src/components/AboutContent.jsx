import PropTypes from "prop-types";

const AboutContent = ({ className = "", weBreatheLifeInto, digitalIdeas }) => {
  return (
    <div
      className={`w-[1244px] flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-full text-left text-48xl text-heading font-headings-h6-700 mq750:gap-[20px] ${className}`}
    >
      <h1 className="m-0 flex-1 relative text-inherit leading-[88px] font-semibold font-inherit inline-block min-w-[391px] max-w-full mq450:text-21xl mq450:leading-[53px] mq750:text-35xl mq750:leading-[70px] mq750:min-w-full">
        <span>{weBreatheLifeInto}</span>
        <span className="text-mediumslateblue">{digitalIdeas}</span>
      </h1>
      <div className="flex-1 flex flex-col items-start justify-start pt-[52px] px-0 pb-0 box-border min-w-[391px] max-w-full text-base text-main-text font-main-text-p2-400 mq750:min-w-full">
        <div className="self-stretch relative leading-[24px]">
          Li Europan lingues es membres del sam familie. Lor separat existentie
          es un myth. Por scientie, musica, sport etc, litot Europa usa li sam
          vocabular. Li lingues differe solmen in li grammatica, li
          pronunciation e li plu commun vocabules.
        </div>
      </div>
    </div>
  );
};

AboutContent.propTypes = {
  className: PropTypes.string,
  weBreatheLifeInto: PropTypes.string,
  digitalIdeas: PropTypes.string,
};

export default AboutContent;
