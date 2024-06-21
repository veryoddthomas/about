import {
  // javascript,
  // typescript,
  // html,
  // css,
  // reactjs,
  // redux,
  // tailwind,
  // nodejs,
  // mongodb,
  // git,
  // figma,
  // docker,
  conexant,
  microsoft,
  snapdragon,
  // threejs,

} from "./assets";

// const technologies = [
//   "HTML 5", icon: html,},
//   "CSS 3", icon: css, },
//   "JavaScript", icon: javascript, },
//   "TypeScript", icon: typescript, },
//   "React JS", icon: reactjs, },
//   "Redux Toolkit", icon: redux, },
//   "Tailwind CSS", icon: tailwind, },
//   "Node JS", icon: nodejs, },
//   "MongoDB", icon: mongodb, },
//   "Three JS", icon: threejs, },
//   "git", icon: git, },
//   "figma", icon: figma, },
//   "docker", icon: docker, },
// ];

const experiences = [
  {
    title: "Windows NT Development Team",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#000",   // "#383E56"
    date: "Jun 1992 - Dec 1996",
    points: [
      "Display Driver and GDI development - C++, C and Assembly (x86, Mips, Alpha, and PowerPC)",
      "Extensive performance analysis and tuning.",
      "Authored and maintained several of the commercial display drivers",
      "Participated in code reviews, providing constructive feedback to peer developers.",
      "Mentored by some industry legends.",
    ],
    detailed_points: [
      "Software developer on all versions of Windows NT through Windows 2000.",
      "Implemented GDI support for multiple monitors and remote displays for Windows NT.",
      "Wrote several of the Windows NT display drivers (Cirrus Logic, Matrox, and Tseng Labs).",
      "Supported and maintained most of the internal display drivers for Windows NT.",
      "Implemented initial DirectDraw support for many of the Windows NT display drivers.",
      "Ported user-mode display drivers to kernel-mode to improve performance.",
      "Sped up the already optimized VGA driver assembly code by 4x.",
      "Maintained and enhanced the Win32 API Profiler.",
    ],
    languages: [
      "c++",
      "c",
      "x86-asm",
      "mips-asm",
      "alpha-asm",
      "powerpc-asm",
    ],

  },
  {
    title: "Digital Infotainment Division",
    company_name: "Conexant Systems, Inc.",
    icon: conexant,
    iconBg: "#112",   // "#383E56"
    date: "Dec 1996 - Oct 2004",
    points: [
      "PCI bus-mastering drivers for terrestrial and satelite TV tuners and decoders",
      "WDM Stream Class and AVStream Class driver development",
    ],
    detailed_points: [
      "Directed software development for broadcast video and audio decoders, video encoders, and satellite products.",
      "Co-designed and implemented WDM Stream Class capture drivers for the Brooktree BT848, Rockwell Fusion 878, and Conexant CX23880 PCI DMA television video and audio capture chips.",
      "Co-designed and implemented an AVStream class driver for the Falcon CX23416 MPEG encoder TV capture system.",
      "Worked with Microsoft to find and fix bugs in the WDM Stream Class and AVStream Class.",
      "Designed and implemented DSP software signal recognition system to detect audio carriers and control signals for differentiation of mono, stereo, and dual language broadcasts for BTSC, EIAJ, and A2 (Zweiton).",
      "Provided input into IC design process for broadcast audio and video decoders based on experience with previous designs.",
      "Worked with team to identify and document a software process consistent with CMM level 3.",
      "Worked as technical lead on numerous projects involving developing software models, building system prototypes, bring- alive of new semiconductors (ICs), bring-alive of new boards, and developing production software systems.",
      "Virtually all projects involved certification through external organizations including Microsoft Windows Hardware Quality Labs (WHQL), CableLabs, Dolby, and Macrovision, and involved acceptance testing by an OEM such as HP, Sony, NEC, Dell, or Intel.",
      "Participated in Conexant's successful effort to gain and maintain ISO 9001-2000 certification.",
      "Member of Microsoft's working group for driver development established by Microsoft and OSR.",
    ],
    languages: [
      "c++",
      "c",
      "c#",
    ],
  },
  {
    title: "ASIC Software, BREW Team",
    company_name: "Qualcomm",
    icon: snapdragon,
    iconBg: "#112",
    date: "Feb 2008 - May 2011",
    points: [
      "Contributed to the BREW operating system for Qualcomm's early SoC platforms.",
    ],
    languages: [
      "c",
      "arm-asm",
    ],
  },
  {
    title: "Web Technologies Team",
    company_name: "Qualcomm and QuIC",
    icon: snapdragon,
    iconBg: "#112",
    date: "May 2011 - Oct 2017",
    points: [
      "Developed the chromium/blink-based Snapdragon Web Engine (SWE) for mobile devices.",
      "Maintained the open-source 'Chromium for Snapdragon Web Engine (SWE)' project.",
      "Open source contributions through the CodeAurora Forum and the Linux Foundation"
    ],
    languages: [
      "c++",
      "c",
      "lua",
      "python",
      "javascript",
    ],
  },
  {
    title: "Secure Systems Group",
    company_name: "Qualcomm Technologies, Inc.",
    icon: snapdragon,
    iconBg: "#112",
    date: "Oct 2017 - Dec 2023",
    points: [
      "Developing and maintaining software in C++, C, Arm Assembly, Python, and Rust.",
      "Participating in architecture, design, and code reviews, providing constructive feedback to the team.",
    ],
    detailed_points: [
      "Led a global team of 30+ engineers responsible for end-to-end delivery of Qualcomm's TrustZone software. The team was highly execution focused, and process optimization and robustness were key to success through scalability.",
      "Launched 20+ Snapdragon™ processors on Android, Windows, iOS, Embedded Linux, and Chrome OS.",
      "Reviewed and contributed to initiatives to convert critical code, including secure boot and the trusted-application framework, from C to Rust, reducing code size by 50% and increasing performance by 10%. Memory related defects (accounting for 80% of total, historically) were reduced to 0.",
      "Re-designed the continuous integration and delivery processes for Qualcomm's Trusted Execution Environment (QTEE). Increased code throughput and decreased latencies by 5x and reduced developer build times by 75%.",
      "Developed auditing and tracking infrastructure for static analysis reducing 'release impacting' events by >90%",
    ],
    languages: [
      "rust",
      "c++",
      "c",
      "lua",
      "python",
      "arm-asm",
    ],
  },
];

export { experiences };
