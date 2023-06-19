import React from "react";
import Bulls from "../assets/bulls-eye.webp";
import Thumb from "../assets/thumbs-up.webp";
import Meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: Meh, alt: "meh", boxSize: "25px" },
    4: { src: Thumb, alt: "recommanded", boxSize: "25px" },
    5: { src: Bulls, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;
