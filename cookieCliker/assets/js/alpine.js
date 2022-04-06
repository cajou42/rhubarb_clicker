
import Alpine from 'alpinejs'
import faqs from "./alpine-components/faqs";
import Rhubarb from "./Rhubarb";
import Shop from "./Shop";

window.Alpine = Alpine

console.log('hh')
// All alpine data should be there

Alpine.data('faqs', faqs)
Alpine.data('rhubarb', Rhubarb)
Alpine.data('shop',Shop)

// Should be the last line of the file ! :)
Alpine.start()
