import {
  c_and_cpp,
  python,
  lua,
  rust,
  mojo,
  code
} from "../assets";

const languages = [
  {
    title: "C and C++",
    icon: c_and_cpp,
    id: "c-and-cpp",
    desc: [
      `
Let's just say I have my 10,000+ hours.
      `,
      `
      `,
    ],
  },
  {
    title: "Rust",
    icon: rust,
    id: "rust",
    desc: [
      `
I'm ramping up on Rust right now, and I'm optimistic that it's
a game-changer for system programmers.  The benefits of the
memory-safety mechanisms are huge.  It also has a rich (and growing)
standard library.  "System programmers can have nice things too."
      `,
    ]
  },
  {
    title: "Python",
    icon: python,
    id: "python",
    desc: [
      `
I have been programming in Python for more than 10 years.
I use it for basic scripting, text manipulation and parsing,
data analysis, modeling, and extensive on-device test automation.
      `,
    ]
  },
  {
    title: "Lua", icon: lua, id: "lua", desc: [
      `
I have a lot less experience with Lua than I do with Python, but I
still think it is a great language for certain problem domains.
Lua is extremely intuitive, compact, and easy to comprehend.
      `,
    ]

  },
  {
    title: "Mojo 🔥",
    icon: mojo,
    id: "mojo",
    desc: [
      `
TBD:
      `,
      `
I'm just starting to work with Mojo and it looks like it has
incredible potential.  Not only is it an extraordinary platform
for AI, but it will probably eventually replace Python and Lua
in my toolbag
      `,
    ]
  },
  {
    title: "Other",
    icon: code,
    id: "other",
    desc: [
      `
TBD:
      `,
      `
Javascript, HTML, CSS, Pascal, Ada, Lisp, Awk, Bash, Ruby, C#, Prolog.
      `,
      `
Assembly on: x86, 68k, ADSP2101, DSP56k, ARM, Snapdragon, PowerPC, MIPS, Alpha, and SPARC.
      `,
    ]
  },
];

export { languages };