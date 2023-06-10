import Image from "next/image";
import React from "react";

const SideSocial = () => {
  return (
    <div>
      <div>
        <Image
          width={90}
          height={90}
          src={"/assets/img/social/massenger.svg"}
          alt="massenger"
        />
        {/* <Image
          width={90}
          height={90}
          src={"/assets/img/social/notice.svg"}
          alt="massenger"
        /> */}
      </div>
    </div>
  );
};

export default SideSocial;
