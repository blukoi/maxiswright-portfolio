import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { 
    faDesktop, 
    faMobileScreen, 
    faQuoteLeft,
    faQuoteRight,
    faCubes,
    faThumbsDown,
    faThumbsUp,
    faCode,
    faShapes,
    faEnvelope,
    faVideo,
    faCarSide,
    faWindowMaximize,
    faVrCardboard,
    faCube,
    faCaretDown,
    faCaretUp,
    faMagnifyingGlass,
    faDiagramProject,
    faSwatchbook,
    faArrowsToCircle,
    faLayerGroup,
    faNetworkWired,
    faPencil,
    faTriangleExclamation,
    faMap,
    faObjectGroup,
    faPenToSquare,
    faLightbulb,
    faCar,
    faCalendar,
    fa1,
    fa2,
    fa3,
    fa4,
    fa5,
    fa6,
    fa7,
    fa8,
    fa9,
    fa0,
    faHand,
    faArrowRightLong,
    faAddressCard,
    faBeerMugEmpty,
    faCat,
    faGamepad,
    faPersonSkating,
    faBurger,
    faHotdog,
    faFilm,
    faFont,
    faMessage,
    faSquareCaretDown,
    faSquareCaretUp,
    faArrowsLeftRight,
} from '@fortawesome/free-solid-svg-icons';
import { 
    faFontAwesome,
    faLinkedin,
    faInstagram,
    faXbox,
    faUntappd,
    faGithub,
    faApple,
} from '@fortawesome/free-brands-svg-icons';

library.add(
    faDesktop,
    faMobileScreen,
    faQuoteLeft,
    faQuoteRight,
    faCubes,
    faThumbsDown,
    faThumbsUp,
    faCode,
    faShapes,
    faEnvelope,
    faVideo,
    faCarSide,
    faWindowMaximize,
    faVrCardboard,
    faCube,
    faCaretDown,
    faCaretUp,
    faMagnifyingGlass,
    faDiagramProject,
    faSwatchbook,
    faArrowsToCircle,
    faLayerGroup,
    faNetworkWired,
    faPencil,
    faTriangleExclamation,
    faMap,
    faObjectGroup,
    faPenToSquare,
    faLightbulb,
    faCar,
    faCalendar,
    fa1,
    fa2,
    fa3,
    fa4,
    fa5,
    fa6,
    fa7,
    fa8,
    fa9,
    fa0,
    faHand,
    faArrowRightLong,
    faAddressCard,
    faBeerMugEmpty,
    faCat,
    faGamepad,
    faPersonSkating,
    faBurger,
    faHotdog,
    faFilm,
    faFont,
    faMessage,
    faSquareCaretDown,
    faSquareCaretUp,
    faArrowsLeftRight,
    faFontAwesome,
    faLinkedin,
    faInstagram,
    faXbox,
    faUntappd,
    faGithub,
    faApple
 );

// export default defineNuxtPlugin(nuxtApp => {
//  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
// });

Vue.component('FontAwesomeIcon', FontAwesomeIcon);