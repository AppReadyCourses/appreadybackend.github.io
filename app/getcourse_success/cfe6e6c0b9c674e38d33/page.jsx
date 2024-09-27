import Footer from "@/app/components/Footer";

const Course2 = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="hero bg-base-200 min-h-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://ik.imagekit.io/9kllv04exw/Angular%20e-commerce.jpg?updatedAt=1718421707861"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold">Thank you for your purchase!</h1>
            <p className="py-6">
              <span className="font-extrabold">Course you purchased: </span>
              <br />
              Angular & NestJS Full-stack e-commerce
            </p>
            <p className="py-6">
              <span className="font-bold">Download link:</span>
              <br />
              <a href="https://drive.filen.io/d/35ee3a4e-3f14-4636-b0c6-df617223e7fa#78nSs6Fq3mpBuRooUcmWLEdUpnf7iA2X">
                <span className="font-bold">Part 1 (Download here)</span>
              </a>
              <br />
              <a href="https://drive.filen.io/d/566270b7-412c-420e-aaf7-3a751ccbab25#EK1JhzcJjVuVLl0TS8qrlainr3Iil1Te">
                <span className="font-bold">Part 2 (Download here)</span>
              </a>
              <br />
              <a href="https://drive.filen.io/d/dea9112e-6fae-4710-9827-1fae6a61321f#MWUibmTmM9ni1GCQPZpCCg5qDuVrVmms">
                <span className="font-bold">Part 3 (Download here)</span>
              </a>
              <br />
              <a href="https://drive.filen.io/d/1a5185ee-9ed1-44c1-b423-a08ba3ae3eb4#375tX6PiWz8AXbwIVAAXpFqQlhTwjG8S">
                <span className="font-bold">Part 4 (Download here)</span>
              </a>
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Course2;
