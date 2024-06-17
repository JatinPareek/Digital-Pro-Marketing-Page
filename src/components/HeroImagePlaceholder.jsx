import { Button } from "@mui/material";
import PropTypes from "prop-types";

const HeroImagePlaceholder = ({ className = "" }) => {
  return (
    <div
      className={`w-[1398px] flex flex-row items-start justify-end py-0 px-14 box-border max-w-full text-left text-63xl text-heading font-headings-h6-700 mq1225:pl-7 mq1225:pr-7 mq1225:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-[40px] max-w-full mq750:gap-[20px] mq1225:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start pt-[45px] px-0 pb-0 box-border min-w-[426px] max-w-full mq750:pt-[29px] mq750:box-border mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
            <div className="self-stretch flex flex-col items-start justify-center gap-[56px] max-w-full mq750:gap-[28px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
                <h1 className="m-0 self-stretch relative text-inherit leading-[104px] font-semibold font-inherit mq450:text-6xl mq450:leading-[42px] mq750:text-22xl mq750:leading-[62px]">
                  <span>{`Your Partner in `}</span>
                  <span className="text-mediumslateblue">Digital Success</span>
                </h1>
                <div className="w-[602px] relative text-base leading-[24px] font-main-text-p2-400 text-main-text inline-block max-w-full">
                  Li Europan lingues es membres del sam familie. Lor separat
                  existentie es un myth. Por scientie, musica, sport etc, litot
                  Europa usa li sam vocabular.
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[32px] max-w-full text-2xl mq750:flex-wrap mq750:gap-[16px]">
                <Button
                  className="h-[72px] w-[222px] shadow-[2px_6px_17px_rgba(0,_0,_0,_0.1)]"
                  endIcon={
                    <img width="24px" height="24px" src="/arrow-forward.svg" />
                  }
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "21",
                    background: "#2a62fe",
                    borderRadius: "16px",
                    "&:hover": { background: "#2a62fe" },
                    width: 222,
                    height: 72,
                  }}
                >
                  Get Started
                </Button>
                <div className="shadow-[2px_6px_17px_rgba(0,_0,_0,_0.1)] rounded-2xl overflow-hidden flex flex-row items-center justify-start py-2 px-6 gap-[24px]">
                  <img
                    className="h-12 w-12 relative rounded-61xl overflow-hidden shrink-0"
                    alt=""
                    src="/video-placeholder.svg"
                  />
                  <div className="relative leading-[24px] font-semibold mq450:text-mid mq450:leading-[19px]">
                    Watch Video
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] text-center text-base">
              <div className="relative leading-[24px] font-semibold inline-block min-w-[126px]">
                Join Members :
              </div>
              <div className="flex flex-row items-start justify-start text-2xl text-white">
                <img
                  className="h-16 w-16 relative rounded-61xl overflow-hidden shrink-0 object-cover min-h-[64px] [debug_commit:0448091]"
                  alt=""
                  src="/image-placeholder@2x.png"
                />
                <img
                  className="h-16 w-16 relative rounded-61xl overflow-hidden shrink-0 object-cover min-h-[64px] [debug_commit:0448091] z-[1] ml-[-8px]"
                  alt=""
                  src="/image-placeholder@2x.png"
                />
                <img
                  className="h-16 w-16 relative rounded-61xl overflow-hidden shrink-0 object-cover min-h-[64px] [debug_commit:0448091] z-[2] ml-[-8px]"
                  alt=""
                  src="/image-placeholder@2x.png"
                />
                <div className="rounded-61xl bg-accent-2 overflow-hidden flex flex-row items-start justify-start py-5 px-[19px] shrink-0 [debug_commit:0448091] z-[3] ml-[-8px]">
                  <div className="relative leading-[24px] font-semibold inline-block min-w-[26px] mq450:text-mid mq450:leading-[19px]">
                    5+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[590px] relative max-h-full overflow-hidden shrink-0 object-cover max-w-full mq1225:flex-1"
          alt=""
          src="/image-placeholder-3@2x.png"
        />
      </div>
    </div>
  );
};

HeroImagePlaceholder.propTypes = {
  className: PropTypes.string,
};

export default HeroImagePlaceholder;
