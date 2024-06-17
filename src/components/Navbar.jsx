import PropTypes from "prop-types";

const Navbar = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch box-border overflow-hidden flex flex-row items-center justify-between pt-5 px-[98px] pb-[18px] top-[0] z-[99] sticky max-w-full gap-[20px] border-b-[1px] border-solid border-gainsboro mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:pl-[49px] mq1050:pr-[49px] mq1050:box-border ${className}`}
    >
      <img
        className="h-8 w-[175.3px] relative"
        loading="lazy"
        alt=""
        src="/group-5925.svg"
      />
      <nav className="m-0 w-[406px] flex flex-row items-start justify-start gap-[40px] max-w-full text-center text-base text-heading font-headings-h6-700 mq450:gap-[20px] mq750:hidden">
        <div className="flex flex-row items-center justify-start text-accent-2">
          <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[50px]">
            Home
          </a>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[77px] whitespace-nowrap">
            About Us
          </a>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
            alt=""
            src="/expand-more.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[67px]">
            Product
          </a>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
            alt=""
            src="/expand-more1.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[92px] whitespace-nowrap">
            Contact Us
          </a>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
            alt=""
            src="/expand-more.svg"
          />
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
