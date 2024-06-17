import { Button } from "@mui/material";
import PropTypes from "prop-types";

const CTA = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-mediumslateblue overflow-hidden flex flex-col items-center justify-start pt-[119px] px-5 pb-[121px] box-border gap-[56px] max-w-full text-center text-48xl text-white font-headings-h6-700 mq750:gap-[28px] mq750:pt-[77px] mq750:pb-[79px] mq750:box-border ${className}`}
    >
      <div className="w-[1010px] flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[88px] font-semibold font-inherit mq450:text-21xl mq450:leading-[53px] mq750:text-35xl mq750:leading-[70px]">
          Join Now to Get More Convenience
        </h1>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-base font-main-text-p2-400">
          <div className="w-[832px] relative leading-[24px] inline-block shrink-0 max-w-full">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular.
          </div>
        </div>
      </div>
      <div className="w-[1010px] flex flex-row items-start justify-center max-w-full">
        <Button
          className="h-[72px] w-[222px] shadow-[2px_6px_17px_rgba(0,_0,_0,_0.1)]"
          endIcon={
            <img width="24px" height="24px" src="/arrow-forward-1.svg" />
          }
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#2a62fe",
            fontSize: "21",
            background: "#fff",
            borderRadius: "16px",
            "&:hover": { background: "#fff" },
            width: 222,
            height: 72,
          }}
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

CTA.propTypes = {
  className: PropTypes.string,
};

export default CTA;
