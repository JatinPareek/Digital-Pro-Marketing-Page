import { Button } from "@mui/material";
import AboutContent from "./AboutContent";
import PropTypes from "prop-types";

const AboutUs = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-20 px-5 box-border gap-[80px] max-w-full text-left text-48xl text-heading font-headings-h6-700 mq450:gap-[20px] mq750:gap-[40px] mq750:pt-[34px] mq750:pb-[34px] mq750:box-border mq1225:pt-[52px] mq1225:pb-[52px] mq1225:box-border ${className}`}
    >
      <AboutContent
        weBreatheLifeInto="We Breathe Life Into "
        digitalIdeas="Digital Ideas"
      />
      <div className="w-[1244px] flex flex-col items-start justify-start gap-[94px] max-w-full text-center text-31xl text-accent-2 mq450:gap-[23px] mq750:gap-[47px]">
        <div className="self-stretch h-[512px] flex flex-row items-start justify-start relative max-w-full">
          <div className="h-[512px] flex-1 relative rounded-2xl max-w-full flex items-center justify-center z-[0]">
            <img
              className="h-full flex-1 overflow-hidden object-contain absolute left-[4px] top-[11px] w-full [transform:scale(1.137)]"
              loading="lazy"
              alt=""
              src="/frame-2889@2x.png"
            />
          </div>
          <Button
            className="h-14 w-[263px] !m-[0] absolute right-[490px] bottom-[-28px] shadow-[4px_11px_35px_rgba(0,_0,_0,_0.07)] z-[1]"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "21",
              background: "#2a62fe",
              border: "#fff solid 3px",
              borderRadius: "16px",
              "&:hover": { background: "#2a62fe" },
              width: 263,
              height: 56,
            }}
          >
            Get Free Consultant
          </Button>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[220px] max-w-[293px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <div className="relative leading-[56px] font-semibold inline-block min-w-[89px] mq450:text-11xl mq450:leading-[34px] mq750:text-21xl mq750:leading-[45px]">
                10+
              </div>
            </div>
            <div className="self-stretch relative text-2xl leading-[24px] font-semibold text-main-text mq450:text-mid mq450:leading-[19px]">
              Years of Experience
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[220px] max-w-[293px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <div className="relative leading-[56px] font-semibold inline-block min-w-[121px] mq450:text-11xl mq450:leading-[34px] mq750:text-21xl mq750:leading-[45px]">
                120+
              </div>
            </div>
            <div className="self-stretch relative text-2xl leading-[24px] font-semibold text-main-text mq450:text-mid mq450:leading-[19px]">
              Award Achieved
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[220px] max-w-[293px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <div className="relative leading-[56px] font-semibold inline-block min-w-[126px] mq450:text-11xl mq450:leading-[34px] mq750:text-21xl mq750:leading-[45px]">
                10K+
              </div>
            </div>
            <div className="self-stretch relative text-2xl leading-[24px] font-semibold text-main-text mq450:text-mid mq450:leading-[19px]">
              Project Success
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[220px] max-w-[293px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <div className="relative leading-[56px] font-semibold inline-block min-w-[82px] mq450:text-11xl mq450:leading-[34px] mq750:text-21xl mq750:leading-[45px]">
                1k+
              </div>
            </div>
            <div className="self-stretch relative text-2xl leading-[24px] font-semibold text-main-text mq450:text-mid mq450:leading-[19px]">
              Happy Clients
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutUs.propTypes = {
  className: PropTypes.string,
};

export default AboutUs;
