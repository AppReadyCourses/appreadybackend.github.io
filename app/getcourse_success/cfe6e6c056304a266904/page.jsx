import Footer from "@/app/components/Footer";

const Course1 = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="hero bg-base-200 min-h-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://ik.imagekit.io/9kllv04exw/fullstack_react_coffeeshop.png?updatedAt=1718411631412"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold">Thank you for your purchase!</h1>
            <p className="py-6">
              <span className="font-extrabold">Course you purchased: </span>
              <br />
              ReactJS & NodeJS Full-stack coffee project
            </p>
            <p className="py-6">
              <span className="font-bold">Download link:</span>
              <br />
              <a href="https://drive.filen.io/d/cda73e62-5b1f-4eee-89bd-aabee797c125#XCSogbgLlOuS7lbZlwLTex8UmdBUvu9W">Download link</a>
              
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

export default Course1;
