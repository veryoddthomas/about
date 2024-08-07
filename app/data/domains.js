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
I was a member of the Windows NT development team at Microsoft
for almost 5 years.  During that time, I developed and maintained
display drivers.  Those drivers had to run on x68, Mips, PowerPC,
and Alpha architectures.  And yes, I had to test and debug them
on all of those platforms.
            `, `
Since then, I have also worked on Qualcomm's BREW
operating system, Android, Windows on Arm, and Embedded Linux
releases for Snapdragon.
            `, `
Never having worked for Apple, my only impact on the shipping
versions of iOS and OSX were via contributions to the WebKit
open-source project which provides the rendering engine for Safari.
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
I spent several years working on firmware for electronic
test equipment.  One device that stands out for me was
a digital power analyzer.  Two of us wrote all of the software
and brought up the hardware.  We also built a simulator for it,
to facilitate faster turnaround times for testing UI changes.
            `, `
The device used a Motorola 68000 processor for control, and a Motorola
DSP56001 for signal processing.  That project was lots of
fun and required learning a significant amount of
domain specific algorithms quickly (and thoroughly).
I learned a lot about embedded systems and
diagnosing and debugging hardware/software issues.  This
project was the epitome of being thrown into the deep end.
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
Early on, I worked on what was basically a bare-metal internal operating system
on a processor with an ARM core, combined with Qualcomm's Binary Runtime
Environment for Wireless(BREW).  The highest priority, beyond basic functionality,
was to minimize power consumption.
            `, `
Later, additional cores (including CPUs, DSPs, GPUs, and NPUs) were added to expand
the capabilities of the platform.
            `, `
As the technology evolved, Android and Embedded Linux became the dominant
platforms for newer, high-end phones that had more memory and faster processors.
Then the lower-tier phones caught up with the resource requirements and the
decision was made to move all new devices to Android(or Windows)
for all phone tiers.
            `, `
As we leveraged more external code, a lot of the software burden shifted to
large scale integration and verification, as well as dealing with
requirements for open-source tracking and licensing.  We also had to build
a secure-boot chain and secure execution environment that could co-exist with
a host operating system, as well as an ecosystem to protect the integrity of both.
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
stack, including secure-boot, debug, hypervisor(s), the trusted execution
environment and trusted applications that ran within it.  I was also
involved in supply-chain security, ensuring responsible open-source usage and
licensing, static analysis of the codebase, fuzzing of the system components,
code signing, continuous integration and delivery, and CVE/vulnerability mitigation.
            `,
        ],
    },
];

export { domains };
