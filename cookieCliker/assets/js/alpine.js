
import Alpine from 'alpinejs'
import faqs from "./alpine-components/faqs";
import Rhubarb from "./Rhubarb";
import Shop from "./Shop";
import Profile from "./Profile.js";

window.Alpine = Alpine

// All alpine data should be there

Alpine.data('faqs', faqs)
Alpine.data('rhubarb', Rhubarb)
Alpine.data('shop',Shop)
Alpine.data('profile',Profile)

// Should be the last line of the file ! :)
Alpine.start()
