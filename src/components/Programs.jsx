import Title from "../subComponents/Title";
import programBG1 from "./../assets/images/2.png";
import programBG2 from "./../assets/images/3.png";
import programBG3 from "./../assets/images/4.png";

const Programs = () => {
  return (
    <div className="container w-full px-5 flex flex-col items-center">
      <Title
        title={"Program Sections"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non illum facilis iusto veniam corporis deleniti ex aliquam."
        }
      ></Title>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 w-full">
        <div
          className="col-span-1 p-3 rounded-xl shadow-lg lg:pt-40 pt-20 flex flex-col gap-2 w-full"
          style={{
            background: `url(${programBG1})`,
            backgroundSize: "cover",
            backgroundPositionX: "center",
            backgroundPositionY: "center",
          }}
        >
          <h3 className="text-xl text-white text-shadow-lg font-bold">
            Junior Program
          </h3>
          <p className="text-gray-100 text-shadow-lg max-w-sm font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            ratione doloremque cupiditate mollitia fugiat modi architecto,
            voluptates quia.
          </p>
          <button className="py-2 px-4 w-fit rounded-xl bg-red-500 text-white hover:bg-black duration-300">
            Register Now!
          </button>
        </div>
        <div
          className="col-span-1 p-3 rounded-xl shadow-lg lg:pt-40 pt-20 flex flex-col gap-2 w-full"
          style={{
            background: `url(${programBG2})`,
            backgroundSize: "cover",
            backgroundPositionX: "center",
            backgroundPositionY: "center",
          }}
        >
          <h3 className="text-xl text-white text-shadow-lg font-bold">
            Teenager Program
          </h3>
          <p className="text-gray-100 text-shadow-lg max-w-sm font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            ratione doloremque cupiditate mollitia fugiat modi architecto,
            voluptates quia.
          </p>
          <button className="py-2 px-4 w-fit rounded-xl bg-red-500 text-white hover:bg-black duration-300">
            Register Now!
          </button>
        </div>
        <div
          className="sm:col-span-2 col-span-1 p-3 rounded-xl shadow-lg flex flex-col gap-2 w-full lg:pt-40 pt-20"
          style={{
            background: `url(${programBG3})`,
            backgroundSize: "cover",
            backgroundPositionX: "center",
            backgroundPositionY: "center",
          }}
        >
          <h3 className="text-xl text-white text-shadow-lg font-bold">
            Professional Program
          </h3>
          <p className="text-gray-100 text-shadow-lg max-w-sm font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            ratione doloremque cupiditate mollitia fugiat modi architecto,
            voluptates quia.
          </p>
          <button className="py-2 px-4 w-fit rounded-xl bg-red-500 text-white hover:bg-black duration-300">
            Register Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Programs;
