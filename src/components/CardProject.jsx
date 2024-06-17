import PropTypes from "prop-types";

const CardProject = ({ className = "", imagePlaceholder, businessAgency }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start min-w-[391px] max-w-full text-center text-9xl text-heading font-headings-h6-700 mq750:min-w-full ${className}`}
    >
      <img
        className="self-stretch h-[411px] relative rounded-t-2xl rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src={imagePlaceholder}
      />
      <div className="self-stretch shadow-[4px_11px_35px_rgba(0,_0,_0,_0.07)] rounded-t-none rounded-b-2xl bg-white overflow-hidden flex flex-row items-center justify-start p-6 box-border max-w-full">
        <div className="w-[534px] flex flex-col items-start justify-center gap-[16px] max-w-full">
          <h2 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit mq450:text-3xl mq450:leading-[26px]">
            {businessAgency}
          </h2>
          <div className="self-stretch relative text-base leading-[24px] font-main-text-p2-400 text-main-text text-left">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular.
          </div>
        </div>
      </div>
    </div>
  );
};

CardProject.propTypes = {
  className: PropTypes.string,
  imagePlaceholder: PropTypes.string,
  businessAgency: PropTypes.string,
};

export default CardProject;
