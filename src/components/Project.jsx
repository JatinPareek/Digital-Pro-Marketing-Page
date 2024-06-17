import ServicesContent from "./ServicesContent";
import CardProject from "./CardProject";
import PropTypes from "prop-types";

const Project = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-grey overflow-hidden flex flex-col items-center justify-start py-20 px-5 box-border gap-[80px] max-w-full text-center text-9xl text-heading font-headings-h6-700 mq450:gap-[20px] mq450:pt-[22px] mq450:pb-[22px] mq450:box-border mq750:gap-[40px] mq1050:pt-[34px] mq1050:pb-[34px] mq1050:box-border mq1225:pt-[52px] mq1225:pb-[52px] mq1225:box-border ${className}`}
    >
      <ServicesContent
        variousServices="Explore Our "
        weProvide="Latest Projects"
      />
      <div className="w-[1244px] flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] max-w-full mq750:gap-[20px]">
          <CardProject
            imagePlaceholder="/image-placeholder-4@2x.png"
            businessAgency="Business Agency"
          />
          <CardProject
            imagePlaceholder="/image-placeholder-4@2x.png"
            businessAgency="Development"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] max-w-full mq750:gap-[20px]">
          <CardProject
            imagePlaceholder="/image-placeholder-6@2x.png"
            businessAgency="UI/UX Design"
          />
          <CardProject
            imagePlaceholder="/image-placeholder-6@2x.png"
            businessAgency="SEO Analytics"
          />
        </div>
      </div>
    </section>
  );
};

Project.propTypes = {
  className: PropTypes.string,
};

export default Project;
