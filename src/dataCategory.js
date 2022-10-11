//mark 11 headpphones

import headPhoneMobile0 from "./assets/category-headphones/mobile/image-xx99-mark-two.jpg";
import headPhoneTablet0 from "./assets/category-headphones/tablet/image-xx99-mark-two.jpg";
import headPhoneDesktop0 from "./assets/category-headphones/desktop/image-xx99-mark-two.jpg";

//mark 1 headphone
import headPhoneMobile1 from "./assets/category-headphones/mobile/image-xx99-mark-one.jpg";
import headPhoneTablet1 from "./assets/category-headphones/tablet/image-xx99-mark-one.jpg";
import headPhoneDesktop1 from "./assets/category-headphones/desktop/image-xx99-mark-one.jpg";

//xx59 headphones
import headPhoneMobile2 from "./assets/category-headphones/mobile/image-xx59.jpg";
import headPhoneTablet2 from "./assets/category-headphones/tablet/image-xx59.jpg";
import headPhoneDesktop2 from "./assets/category-headphones/desktop/image-xx59.jpg";

//speakers ZX9
import speakerMobile0 from "./assets/category-speakers/mobile/image-zx9.jpg";
import speakerTablet0 from "./assets/category-speakers/tablet/image-zx9.jpg";
import speakerDesktop0 from "./assets/category-speakers/desktop/image-zx9.jpg";

//speakers ZX7
import speakerMobile1 from "./assets/category-speakers/mobile/image-zx7.jpg";
import speakerTablet1 from "./assets/category-speakers/tablet/image-zx7.jpg";
import speakerDesktop1 from "./assets/category-speakers/desktop/image-zx7.jpg";

//earphopnes
import earphoneMobile from "./assets/category-earphones/mobile/image-yx1-earphones.jpg";
import earphoneTablet from "./assets/category-earphones/tablet/image-yx1-earphones.jpg";
import earphoneDesktop from "./assets/category-earphones/desktop/image-yx1-earphones.jpg";

export const category = {
  headphones: [
    {
      newProduct: true,
      name: "XX99 MARK II HEADPHONES",
      slug: "xx99-mark-two-headphones",
      info: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      url: "/headphone",
      image: {
        mobile: headPhoneMobile0,
        tablet: headPhoneTablet0,
        desktop: headPhoneDesktop0,
      },
    },
    {
      newProduct: false,
      name: "XX99 Mark I Headphones",
      slug: "xx99-mark-one-headphones",
      info: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      url: "/headphone",
      image: {
        mobile: headPhoneMobile1,
        tablet: headPhoneTablet1,
        desktop: headPhoneDesktop1,
      },
    },
    {
      newProduct: false,
      name: "XX59 Headphones",
      slug: "xx59-headphones",
      info: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      url: "/headphone",
      image: {
        mobile: headPhoneMobile2,
        tablet: headPhoneTablet2,
        desktop: headPhoneDesktop2,
      },
    },
  ],
  speakers: [
    {
      newProduct: true,
      name: "ZX9 Speakers",
      slug: "zx9-speaker",
      info: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      url: "/speaker",
      image: {
        mobile: speakerMobile0,
        tablet: speakerTablet0,
        desktop: speakerDesktop0,
      },
    },
    {
      newProduct: false,
      name: "ZX7 Speakers",
      slug: "zx7-speaker",
      info: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      url: "/speaker",
      image: {
        mobile: speakerMobile1,
        tablet: speakerTablet1,
        desktop: speakerDesktop1,
      },
    },
  ],
  earphones: [
    {
      newProduct: true,
      name: "YX1 Wireless Earphones",
      slug: "yx1-earphones",
      info: "STailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      url: "/earphone",
      image: {
        mobile: earphoneMobile,
        tablet: earphoneTablet,
        desktop: earphoneDesktop,
      },
    },
  ],
};
