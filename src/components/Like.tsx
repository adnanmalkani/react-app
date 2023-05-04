import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function Like() {
  const [status, setStatus] = useState(false);

  return (
    <div>
      <AiFillHeart color="red" size={50} onClick={() => setStatus(true)} />
    </div>
  );
}

export default Like;
