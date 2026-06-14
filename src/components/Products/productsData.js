
import imgBlack1 from "./images/Black/B0-BSW-2_aa0f8832-bbc1-41f8-bfc4-62bdf28e8768.jpg";
import imgBlack2 from "./images/Black/B0-BSW-3_8a68b735-bc9f-4cc3-9264-b2adff62966e.jpg";
import imgBlack3 from "./images/Black/B0-BSW-4_7efd09e1-b3e9-464c-8306-98f9f7bf7ec2.jpg";
import imgBlack4 from "./images/Black/B0-BSW-5_3fc1c485-5333-4ca7-a504-123d8115a4c6.jpg";

import imgBlackwhite1 from "./images/Blackwhite/B0-FW-2_d2316088-1fdc-47f7-b6c8-e4703324c8a4.jpg";
import imgBlackwhite2 from "./images/Blackwhite/B0-FW-3_bd56b8a4-ed02-4b66-822f-87877825a3ff.jpg";
import imgBlackwhite3 from "./images/Blackwhite/B0-FW-4_99c17cbf-350c-4b51-9b7a-382dae846ab7.jpg";
import imgBlackwhite4 from "./images/Blackwhite/B0-FW-5_88f8320c-47af-4995-84c8-8ae18949ceab.jpg";
import imgBlackwhite5 from "./images/Blackwhite/B0-FW-6_3c6a45bc-9470-4d66-90af-d62476648fb2.jpg";

import imgBlackb1 from "./images/blackb/B7-XX-BLACK-2_4e64c1c7-b0c1-491b-8d52-526a0b0f0c2a.jpg";
import imgBlackb2 from "./images/blackb/B7-XX-BLACK-3_d33a5c9b-564c-4396-a130-619c5de4b7ce.jpg";
import imgBlackb3 from "./images/blackb/B7-XX-BLACK-4_60d487c5-7fd3-4088-8d45-bc7b340e6b88.jpg";

import imgGum1 from "./images/gum/B0-WNR-2_2a3e1fca-f968-4896-bec4-1718bcb07cc8.jpg";
import imgGum2 from "./images/gum/B0-WNR-3_7c70b1aa-d9ce-4165-a63a-e9c1a64444e9.jpg";
import imgGum3 from "./images/gum/B0-WNR-4_e52293c6-8bd9-4750-8d18-44f0c603b7d9.jpg";
import imgGum4 from "./images/gum/B0-WNR-5_2e555980-ccef-4e63-a4a8-34daf6b390b8.jpg";
import imgGum5 from "./images/gum/B0-WNR-6_a7492875-f94f-4ff4-8df5-f42c47b5e76d.jpg";

import imgGumwhite1 from "./images/gumwhite/B0-NN-2_fbf13500-f7bf-4639-b4b9-7b6a8ce63af2.jpg";
import imgGumwhite2 from "./images/gumwhite/B0-NN-3_79a41df4-37cd-4e87-b1a6-75b8a9c23f74.jpg";
import imgGumwhite3 from "./images/gumwhite/B0-NN-4_5e9fb3d3-1175-4927-a701-f62b7f8f3418.jpg";
import imgGumwhite4 from "./images/gumwhite/B0-NN-5_c52bcce4-e18d-45be-8587-b4f2acd951d0.jpg";
import imgGumwhite5 from "./images/gumwhite/B0-NN-6_1deb30fa-b832-4e17-b0d1-f5aa35a1fe13.jpg";

import imgWhite1 from "./images/white/B7-XX-WHITE-2_1d3fc3af-4379-430b-91c3-246f4dc0a6a0.jpg";
import imgWhite2 from "./images/white/B7-XX-WHITE-3_312f232c-8430-4eeb-adb0-864aeb14fc71.jpg";
import imgWhite3 from "./images/white/B7-XX-WHITE-4_2eab50de-f540-473c-9f73-dcda8af31a9a.jpg";
import imgWhite4 from "./images/white/B7-XX-WHITE-5_9b6a0c7d-0d43-430b-95e2-99628928ff8b.jpg";
import imgWhite5 from "./images/white/B7-XX-WHITE-6_bfb02353-00d8-4c6e-8e34-d83c5c79b26c.jpg";

export const PRODUCTS_DATA = [
  {
    id: 1,
    name: "B0 - Black",
    price: "180 €",
        images: [imgBlackwhite1, imgBlackwhite2, imgBlackwhite3, imgBlackwhite4, imgBlackwhite5],

    colors: ["black", "white", "blackb", "gum", "gumwhite"],
    size: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
    available: true
  },
  {
    id: 2,
    name: "B0 - Gum White",
    price: "180 €",
     images: [imgWhite1, imgWhite2, imgWhite3, imgWhite4, imgWhite5],
    colors: ["black", "white", "blackb", "gum", "gumwhite"],
    size: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
    available: true
  },
  {
    id: 3,
    name: "B0 - Full Black",
    price: "180 €",
    images: [imgBlack1, imgBlack2, imgBlack3, imgBlack4],
    colors: ["black", "white", "blackb", "gum", "gumwhite"],
    size: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
    available: true
  },
  {
    id: 4,
    name: "B7 - Black",
    price: "195 €",
    images: [imgGum1, imgGum2, imgGum3, imgGum4, imgGum5],
    colors: ["black", "white", "blackb", "gum", "gumwhite"],
    size: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
    available: true
  },
  {
    id: 5,
    name: "B7 - White",
    price: "195 €",
    images: [imgGumwhite1, imgGumwhite2, imgGumwhite3, imgGumwhite4, imgGumwhite5],
   
    colors: ["black", "white", "blackb", "gum", "gumwhite"],
    size: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
    available: true
  },
  {
    id: 6,
    name: "B7 - Cream",
    price: "195 €",
    
    images: [imgBlackb1, imgBlackb2, imgBlackb3],
    colors: ["black", "white", "blackb", "gum", "gumwhite"],
    size: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
    available: true
  }
];
