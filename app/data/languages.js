import {
  c_and_cpp,
  python,
  lua,
  rust,
  mojo,
  javascript,
  code
} from "../assets";

const languages = [
  {
    title: "C and C++",
    icon: c_and_cpp,
    id: "c-and-cpp",
    desc: [
      `
I have been programming in C for more than 30 years.
I have extensive experience with the language, the
varieties of compilers and toolchains, the standard
libraries, and the build systems.
      `,
      `
During that time, I also used C++ for specific projects.
Much of the C++ used objects, but was not what I'd call
object-oriented.  It was more for simple encapsulation,
but with limits on inheritence.  In general, I find
that large inheritence trees make debugging and
performance-tuning unacceptably convoluted.
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
    title: "Mojo",
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
    title: "Javascript",
    icon: javascript,
    id: "javascript",
    desc: [
      `
I've used Javascript for web development, and still consider myself a novice.
But, I have been able to complete several projects and keep the code
readable, functional, and maintainable.  As long as you stick to the rational
subset of the language, it seems to be powerful and elegant.  I'm exploring
TypeScript, but prioritized Javascript first.
      `,
    ]
  },
  {
    title: "Other",
    icon: code,
    id: "other",
    desc: [
      `
I've also used the following languages as needed:
HTML, CSS, Bash, C#, Lisp, Pascal, Ada, Awk, Sed, Perl, and Basic.
      `,
      `
I've also programmed in Assembly on the following RISC, CISC, and DSP processors:
x86, 68k, ADSP2101, DSP56k, ARM, Snapdragon, PowerPC, MIPS, Alpha, and SPARC (LSI Logic?).
      `,
    ]
  },
];

export { languages };