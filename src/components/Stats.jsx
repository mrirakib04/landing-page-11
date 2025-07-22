import Title from "../subComponents/Title";
import Stat from "../subComponents/Stat";
import statImg1 from "./../assets/images/GroupA.png";
import statImg2 from "./../assets/images/GroupB.png";
import statImg3 from "./../assets/images/GroupC.png";
import statImg4 from "./../assets/images/GroupD.png";

const Stats = () => {
  return (
    <div className="container w-full px-5 flex flex-col items-center">
      <Title
        title={"Professional Hockeys Club"}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta vitae quidem eum praesentium repellat unde commodi nostrum deserunt eius aspernatur!"
        }
      ></Title>
      <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
        <Stat
          image={statImg1}
          name={"Player Facility"}
          bio={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic labore non laudantium vel dolorem aspernatur!"
          }
        ></Stat>
        <Stat
          image={statImg2}
          name={"Experienced Coach"}
          bio={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore ea iusto."
          }
        ></Stat>
        <Stat
          image={statImg3}
          name={"Senior Player"}
          bio={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia velit odit similique repellat commodi in iusto."
          }
        ></Stat>
        <Stat
          image={statImg4}
          name={"Training Ground"}
          bio={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rem ipsum iste."
          }
        ></Stat>
      </div>
    </div>
  );
};

export default Stats;
