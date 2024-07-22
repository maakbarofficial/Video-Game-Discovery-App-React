import bullseye from "../assets/bullseye.png";
import thumbsup from "../assets/thumbsup.png";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsup, alt: "recommended", boxSize: "25px" },
    5: { src: bullseye, alt: "exceptional", boxSize: "23px" },
  };

  return <Image {...emojiMap[rating]} boxSize={"25px"} marginTop={1} />;
};

export default Emoji;
