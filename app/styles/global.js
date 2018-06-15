import Dimensions from "Dimensions";

const x = Dimensions.get("window").width;
const y = Dimensions.get("window").height;

const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1;
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1;

const base_unit = 16;

const unit = base_unit * ratioX;

function em(value) {
  return unit * value;
}

export default (globalStyles = {
  // GENERAL
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),
  PADDING: em(1.25),

  // CARD
  CARD_WIDTH: x - em(1.25) * 2,
  CARD_HEIGHT: (x - em(1.25) * 2) * (3 / 5),
  CARD_PADDING_X: em(1.875),
  CARD_PADDING_Y: em(1.25),

  // FONT
  FONT_SIZE: em(1),
  FONT_SIZE_SMALL: em(0.75),
  FONT_SIZE_TITLE: em(1.25),
  FONT_SIZE_LARGE: em(1.75),
  FONT_SIZE_LARGEST: em(3),

  // WONT WORK WITHOUT XCODE OR EXPO
  FONT_REGULAR: "Gibson-Regular",
  FONT_REGULAR_ITALIC: "Gibson-Italic",
  FONT_LIGHT: "Gibson-Light",
  FONT_LIGHT_ITALIC: "Gibson-LightIt",
  FONT_SEMIBOLD: "Gibson-SemiBold",
  FONT_SEMIBOLD_ITALIC: "Gibson-SemiboldIt",
  FONT_BOLD: "Gibson-Bold",
  FONT_BOLD_ITALIC: "Gibson-BoldItalic",

  // COLOR
  COLOR_PRIMARY: "#52CEB3",
  COLOR_PRIMARY_DARK: "#3B7F6F",
  COLOR_PRIMARY_LIGHT: "#ACE4D7",
  COLOR_SECONDARY: "#ED1B3B",
  COLOR_LIGHTEST_GRAY: "#E9E9E9",
  COLOR_LIGHT_GRAY: "#B5B5B5",
  COLOR_GRAY: "#676767",
  COLOR_DARK_GRAY: "#4D4D4D",
  COLOR_DARKEST_GRAY: "#333333",
  COLOR_WHITE: "#FFFFFF",

  //Functions for CSS
  responsive(val) {
    return em(val);
  },
  //Add percentages to React-Native!(based on full screen)
  percentDisplay(value, letter) {
    if (letter === "x") {
      return (x / 100) * value;
    } else if (letter === "y") {
      return (y / 100) * value;
    }
  }
});