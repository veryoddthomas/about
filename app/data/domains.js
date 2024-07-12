import {
    chromium,
    firmware,
    lock,
    mobile,
    os
} from "../assets";

const domains = [
    {
        title: "Embedded Systems",
        label: "Firmware",
        id: "embedded-systems",
        icon: firmware,
        desc: [
            `
TBD.
            `,
        ],
    },
    {
        title: "Operating Systems",
        label: "OS",
        id: "operating-systems",
        icon: os,
        desc: [
            `
I was hired out of college by Microsoft to work on the initial release
of Windows NT.  I spent almost 5 years
on that team.
            `, `
Since then, I have also worked on Qualcomm's BREW
operating system, Android, Windows Mobile, and Embedded Linux
releases for Snapdragon.  One major focus of my work has been performance
analysis and optimization.  Another has been security.
            `,
        ],
    },
    {
        title: "Mobile Platforms",
        label: "Mobile",
        id: "mobile-platforms",
        icon: mobile,
        desc: [
            `
TBD.
            `,
        ],
    },
    {
        title: "Web Technologies",
        label: "Web",
        id: "web-technologies",
        icon: chromium,
        desc: [
            `
TBD.
            `,
        ],
    },
    {
        title: "Software Security",
        label: "Security",
        id: "software-security",
        icon: lock,  // shield
        desc: [
            `
TBD.
            `,

            //             `, `
            // Static Analysis and Fuzzing.  Trusted Execution Evironments (TEEs).  Secure Boot.  Secure Enclaves.
            //             `, `
            // Vulnerability tracking and mitigation leveraging the Common Vulnerabilities and Exposures (CVE) database.
            //             `, `
            // Incident response and forensics.
            //             `, `
            // Supply Chain Levels for Software Artifacts (SLSA)
            //             `, `
            // Software Bill of Materials (SBOM)
            //             `, `
            // Secure Software Development Framework (SSDF)

        ],
    },
];

export { domains };
