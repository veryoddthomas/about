import {
    chromium,
    firmware,
    lock,
    mobile,
    os
} from "../assets";

const domains = [
    {
        title: "Operating Systems",
        label: "OS",
        id: "operating-systems",
        icon: os,
    },
    {
        title: "Mobile Platforms",
        label: "Mobile",
        id: "mobile-platforms",
        icon: mobile,
    },
    {
        title: "Web Technologies",
        label: "Web",
        id: "web-technologies",
        icon: chromium,
    },
    {
        title: "Embedded Systems",
        label: "Firmware",
        id: "embedded-systems",
        icon: firmware,
    },
    {
        title: "Software Security",
        label: "Security",
        id: "software-security",
        icon: lock,  // shield
    },
];

export { domains };
