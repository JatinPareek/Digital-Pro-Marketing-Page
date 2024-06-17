import AboutContent from "./AboutContent";
import Card from "./Card";
import PropTypes from "prop-types";

const Testimonials = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-20 px-5 box-border gap-[80px] max-w-full text-left text-9xl text-heading font-headings-h6-700 mq450:gap-[20px] mq750:gap-[40px] mq750:pt-[52px] mq750:pb-[52px] mq750:box-border ${className}`}
    >
      <AboutContent weBreatheLifeInto="What Our " digitalIdeas="Client Say" />
      <div className="w-[1244px] flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
        <Card melyndaAngelina="Melynda Angelina" />
        <Card melyndaAngelina="Roney Merino" />
        <Card melyndaAngelina="Andina Virdany" />
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;
