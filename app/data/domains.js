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
        desc: [
            `
I was a member of the original Windows NT team at Microsoft.  I spent
almost 5 years there.
            `, `
Since then, I have also worked on Qualcomm's BREW
operating system, Android, Windows Mobile, and Embedded Linux
releases for Snapdragon.  One major focus of my work has been performance
analysis and optimization.  Another has been security.
            `,
        ],
    },
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
In the Secure Systems Group at Qualcomm, I worked on all aspects of delivering
a secure platform for Snapdragon devices.  I dealt with the entire secure-software
stack, including secure-boot, debug, hypervisor(s), the trusted
execution environment and trusted applications that ran within it. I was also
involved in managing supply-chain security, responsible open-source usage and
licensing, static analysis of the codebase, fuzzing of the system components,
code signing, continuous integration and delivery, and CVE/vulerability mitigation.
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
