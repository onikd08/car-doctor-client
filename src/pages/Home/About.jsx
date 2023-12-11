import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-[calc(100vh/1.5)]">
      <div className="hero-content flex-col lg:flex-row gap-8 lg:gap-0">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-2/3 rounded-lg shadow-2xl h-[400px]" />
          <img
            src={parts}
            className="absolute right-1/4 -bottom-1/4 w-1/3 h-[250px] rounded-lg shadow-2xl border-8 border-white"
          />
        </div>
        <div className="lg:w-1/2 space-y-8">
          <h3 className="font-bold text-3xl text-orange-500">About Us</h3>
          <h2 className="text-4xl">
            We are qualified & of experience in this field
          </h2>
          <p className="text-slate-500">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which do not look even slightly
            believable.
          </p>
          <p className="text-slate-500">
            The majority have suffered alteration in some form, by injected
            humour, or randomized words which do not look even slightly
            believable.
          </p>
          <button className="btn btn-error">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
