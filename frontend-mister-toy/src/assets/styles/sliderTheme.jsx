import { sliderAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const size = {
  xl: definePartsStyle({
    container: defineStyle({
      w: "50%",
    }),
    track: defineStyle({
      h: 7,
    }),
    thumb: defineStyle({
      boxSize: 7,
    }),
  }),
};
export const sliderTheme = defineMultiStyleConfig({ size });
