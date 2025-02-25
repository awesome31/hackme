import Image from "next/image";

const Lane = (props) => {
  const { status, vehicleClassCode, direction, laneName } = props;

  const renderStatus = () => {
    if (status === "High") {
      return <div className="h-9 w-full bg-red-500"></div>;
    } else if (status === "Medium") {
      return <div className="h-9 w-full bg-yellow-500"></div>;
    } else if (status === "Low") {
      return <div className="h-9 w-full bg-green-500"></div>;
    }
  };

  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center">
      {direction === "S" ? (
        <div className="text-lg text-black font-bold p-2 bg-[#BCF2FF]">
          {vehicleClassCode}
        </div>
      ) : null}
      {direction === "N" ? renderStatus() : null}
      <div className="relative">
        <Image
          src={direction === "N" ? "/north.png" : "/south.png"}
          alt={vehicleClassCode}
          width={200}
          height={200}
        />
        <div className="absolute top-28 left-7 text-[32px] font-bold">
          {laneName}
        </div>
      </div>
      {direction === "N" ? (
        <div className="text-lg text-black font-bold p-2 bg-[#BCF2FF]">
          {vehicleClassCode}
        </div>
      ) : null}
      {direction === "S" ? renderStatus() : null}
    </div>
  );
};

export default Lane;
