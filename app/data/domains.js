import {
    chromium,
    firmware,
    lock,
    mobile,
    os
} from "../assets";

const domains = [
    { title: "Operating Systems", label: "OS", icon: os, },
    { title: "Mobile Platforms", label: "Mobile", icon: mobile, },
    { title: "Web Technologies", label: "Web", icon: chromium, },
    { title: "Embedded Systems", label: "Firmware", icon: firmware, },
    { title: "Software Security", label: "Security", icon: lock, },  // shield
];

export { domains };
