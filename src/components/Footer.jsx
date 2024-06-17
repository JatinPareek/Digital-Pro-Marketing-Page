import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-col items-start justify-start text-left text-2xl text-white font-headings-h6-700 ${className}`}
    >
      <div className="self-stretch bg-dark overflow-hidden flex flex-row items-start justify-between py-20 px-[98px] gap-[20px] mq450:pt-[52px] mq450:pb-[52px] mq450:box-border mq750:pl-6 mq750:pr-6 mq750:box-border mq1225:flex-wrap mq1225:pl-[49px] mq1225:pr-[49px] mq1225:box-border">
        <div className="w-[282px] flex flex-col items-start justify-start gap-[24px] text-base font-main-text-p2-400">
          <img
            className="w-[175.3px] h-8 relative"
            alt=""
            src="/group-5925.svg"
          />
          <div className="self-stretch relative leading-[24px]">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular.
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <div className="h-10 w-10 rounded-3xl bg-accent-2 flex flex-row items-start justify-start p-2 box-border">
              <img
                className="h-6 w-6 relative"
                loading="lazy"
                alt=""
                src="/fb.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start p-2">
              <img
                className="h-6 w-6 relative"
                loading="lazy"
                alt=""
                src="/tw.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start p-2">
              <img
                className="h-6 w-6 relative"
                loading="lazy"
                alt=""
                src="/ig.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start p-2">
              <img
                className="h-6 w-6 relative"
                loading="lazy"
                alt=""
                src="/yt.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[40px]">
          <div className="relative leading-[24px] font-semibold inline-block min-w-[125px] mq450:text-mid mq450:leading-[19px]">
            Quick Links
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px] text-center text-base font-main-text-p2-400">
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[24px] inline-block min-w-[69px]">
                About Us
              </div>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[24px] inline-block min-w-[53px]">
                Service
              </div>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[24px] inline-block min-w-[95px]">
                Testimonials
              </div>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[24px] inline-block min-w-[81px]">
                Contact Us
              </div>
            </div>
          </div>
        </div>
        <div className="w-[277px] flex flex-col items-start justify-start gap-[40px] mq450:gap-[20px]">
          <div className="relative leading-[24px] font-semibold inline-block min-w-[121px] mq450:text-mid mq450:leading-[19px]">
            Contact Us
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base font-main-text-p2-400">
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src="/email.svg"
              />
              <div className="flex-1 relative leading-[24px] whitespace-nowrap">
                hello@website.com
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
              <div className="flex flex-row items-start justify-start pt-1 px-0 pb-0">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                  src="/location-on.svg"
                />
              </div>
              <div className="flex-1 relative leading-[24px]">
                Riverside Building, County Hall, London SE1 7PB, United Kingdom
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src="/call.svg"
              />
              <div className="flex-1 relative leading-[24px] whitespace-nowrap">
                +02 5421234560
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src="/call.svg"
              />
              <div className="flex-1 relative leading-[24px] whitespace-nowrap">
                +02 5421234999
              </div>
            </div>
          </div>
        </div>
        <div className="w-[294px] flex flex-col items-start justify-start gap-[40px] mq450:gap-[20px]">
          <div className="relative leading-[24px] font-semibold inline-block min-w-[110px] mq450:text-mid mq450:leading-[19px]">
            Subscribe
          </div>
          <div className="self-stretch flex flex-row items-start justify-start">
            <TextField
              className="[border:none] bg-[transparent] h-12 flex-1 font-main-text-p2-400 text-xs text-main-text"
              placeholder="Enter email address"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "48px",
                  backgroundColor: "#fff",
                  borderRadius: "8px 0px 0px 8px",
                  fontSize: "12px",
                },
                "& .MuiInputBase-input": { color: "#525252" },
              }}
            />
            <Button
              className="h-12 w-[103px]"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "12",
                background: "#2a62fe",
                borderRadius: "0px 8px 8px 0px",
                "&:hover": { background: "#2a62fe" },
                width: 103,
                height: 48,
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-dark overflow-hidden flex flex-row items-center justify-center pt-1.5 px-5 pb-2 text-right text-xs font-main-text-p2-400 border-t-[1px] border-solid border-main-text">
        <div className="w-[274px] relative leading-[16px] inline-block">
          Ⓒ 2023 All rights reserved. This is Your Company
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
