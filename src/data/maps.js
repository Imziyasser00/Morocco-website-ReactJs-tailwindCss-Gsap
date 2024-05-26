// map.js

const moroccanCities = [
  {
    city: "Casablanca",
    embedMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.506738590003!2d-7.619161486663183!3d33.59032238069817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3127359c9f3%3A0x100b8b4ab70748a6!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sfr!4v1716750289607!5m2!1sen!2sfr" style="border:0;width:100%;height:100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  {
    city: "Rabat",
    embedMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.009661641193!2d-6.849812684993574!3d34.02088208061632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b0ad99c161b%3A0x960e1af66bbf1670!2sRabat%2C%20Morocco!5e0!3m2!1sen!2sfr!4v1716750289607!5m2!1sen!2sfr" style="border:0;width:100%;height:100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  {
    city: "Marrakech",
    embedMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108702.9589120824!2d-8.090253600699564!3d31.634741149313225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakesh%2C%20Morocco!5e0!3m2!1sen!2sfr!4v1716750289607!5m2!1sen!2sfr" style="border:0;width:100%;height:100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  {
    city: "Fes",
    embedMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.685249273918!2d-4.99999858638747!3d34.0330131806071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b0ad99c161b%3A0x960e1af66bbf1670!2sFes%2C%20Morocco!5e0!3m2!1sen!2sfr!4v1716750289607!5m2!1sen!2sfr" style="border:0;width:100%;height:100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  {
    city: "Tangier",
    embedMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.856204508345!2d-5.808910484994656!3d35.78051668016838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdad9f003a1db6a7%3A0x9989c5e8bfc1c5f7!2sTangier%2C%20Morocco!5e0!3m2!1sen!2sfr!4v1716750289607!5m2!1sen!2sfr" style="border:0;width:100%;height:100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  {
    city: "Agadir",
    embedMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107909.82692210345!2d-9.596880245876768!3d30.427754654080962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3a93c462a7b9d%3A0x4a4b9c524bcb28b6!2sAgadir%2C%20Morocco!5e0!3m2!1sen!2sfr!4v1716750289607!5m2!1sen!2sfr" style="border:0;width:100%;height:100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  {
    city: "Essaouira",
    embedMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107919.73740687583!2d-9.770905126458992!3d31.50849344655681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdac156e042a7c69%3A0x32b7e523a6bc8b50!2sEssaouira%2C%20Morocco!5e0!3m2!1sen!2sfr!4v1716750289607!5m2!1sen!2sfr" style="border:0;width:100%;height:100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  {
    city: "Meknes",
    embedMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107933.94647612668!2d-5.626412946786604!3d33.893522354827745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda68e0fa1a6ec51%3A0x639df61d1a8c3e3d!2sMeknes%2C%20Morocco!5e0!3m2!1sen!2sfr!4v1716750289607!5m2!1sen!2sfr" style="border:0;width:100%;height:100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  {
    city: "Ouarzazate",
    embedMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107906.93701786364!2d-6.926256741575715!3d30.9190651214771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda39cb8f7162f7d%3A0x81f800a52de150e7!2sOuarzazate%2C%20Morocco!5e0!3m2!1sen!2sfr!4v1716750289607!5m2!1sen!2sfr" style="border:0;width:100%;height:100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  {
    city: "Chefchaouen",
    embedMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209994.2637580069!2d-5.260673733368059!3d35.16837778116279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdab143693e724d5%3A0x73fdd76155e74577!2sChefchaouen%2C%20Morocco!5e0!3m2!1sen!2sfr!4v1716750289607!5m2!1sen!2sfr" style="border:0;width:100%;height:100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  {
    city: "Ifrane",
    embedMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217290.14462777485!2d-5.172442207444657!3d33.531781419502235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdacdb2af90f953d%3A0x50be48e35edb8b52!2sIfrane%2C%20Morocco!5e0!3m2!1sen!2sfr!4v1716750289607!5m2!1sen!2sfr" style="border:0;width:100%;height:100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  {
    city: "Tétouan",
    embedMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53829.8786410182!2d-5.391505894676974!3d35.57830921957885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdac3564dc9a2169%3A0xa575521674f72e30!2sTetouan%2C%20Morocco!5e0!3m2!1sen!2sfr!4v1716750289607!5m2!1sen!2sfr" style="border:0;width:100%;height:100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  {
    city: "El Jadida",
    embedMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428673.8083484607!2d-9.353273934144546!3d33.25701805738262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda8c4e1ed9e7ad3%3A0xa35b37fda2d6bb5e!2sEl%20Jadida%2C%20Morocco!5e0!3m2!1sen!2sfr!4v1716750289607!5m2!1sen!2sfr" style="border:0;width:100%;height:100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  {
    city: "Kenitra",
    embedMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.6769874220275!2d-6.570811386728187!3d34.25906398053595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda77a74a38a5c3d%3A0x684c57a5ffb10f3f!2sKenitra%2C%20Morocco!5e0!3m2!1sen!2sfr!4v1716750289607!5m2!1sen!2sfr" style="border:0;width:100%;height:100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  {
    city: "Oujda",
    embedMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220541.1371756517!2d-1.999642103399544!3d34.67668423050116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd786497a36573ff%3A0xe318b7adf7ae129!2sOujda%2C%20Morocco!5e0!3m2!1sen!2sfr!4v1716750289607!5m2!1sen!2sfr" style="border:0;width:100%;height:100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  }
];

export default moroccanCities;
