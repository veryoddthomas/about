import {
  c_and_cpp,
  python,
  lua,
  rust,
  mojo,
  javascript,
  code,
  gears,
  asm,
} from "../assets";

const languages = [
  {
    title: "C and C++",
    proficiency: 10,
    stars: "★★★★★",
    icon: c_and_cpp,
    id: "c-and-cpp",
    desc: [
      `
I have decades of experience with C and C++, developing
on Windows, OS X, and Linux using GCC, clang, and Microsoft
Visual C++, as well numerous cross-compilers for
embedded devices.  Much of my experience is with
system code, as opposed to GUI applications. ★★★★★.
      `,
    ],
  },
  {
    title: "Python",
    proficiency: 8,
    stars: "★★★★☆",
    icon: python,
    id: "python",
    desc: [
      `
I have been programming in Python for more than 10 years.
I use it for basic scripting, text manipulation and parsing,
data analysis, modeling, and extensive on-device test automation.
★★★★☆.
      `,
    ]
  },
  {
    title: "Rust",
    proficiency: 6,
    stars: "★★★☆☆",
    icon: rust,
    id: "rust",
    desc: [
      `
I'm ramping up on Rust right now, and I'm optimistic that it's
a game-changer for system programmers.  The benefits of the
memory-safety mechanisms are huge.  It also has a rich (and growing)
standard library.  "System programmers can have nice things too."
★★★☆☆.
      `,
    ]
  },
  {
    title: "Lua",
    proficiency: 6,
    stars: "★★★☆☆",
    icon: lua,
    id: "lua",
    desc: [
      `
I have a lot less experience with Lua than I do with Python, but I
still think it is a great language for certain problem domains.
Lua is extremely intuitive, compact, and easy to comprehend.
★★★☆☆.
      `,
    ]

  },
  {
    title: "Mojo",
    proficiency: 1,
    stars: "★☆☆☆☆",
    icon: mojo,
    id: "mojo",
    desc: [
      `
  TBD:
        `, `
  I'm just starting to work with Mojo and it looks like it has
  incredible potential.  Not only is it an extraordinary platform
  for AI, but it will probably eventually replace Python and Lua
  in my toolbag.  ★☆☆☆☆.
        `,
    ]
  },
  {
    title: "Javascript",
    proficiency: 4,
    stars: "★★☆☆☆",
    icon: javascript,
    id: "javascript",
    desc: [
      `
I've used Javascript (ES6) for web development, and still consider myself a novice.
But, I have been able to complete several projects and keep the code
readable, functional, and maintainable.  It seems deceptively powerful and elegant
if you avoid some pitfalls.  I'm exploring TypeScript, but wanted a handle
on Javascript first.  ★★☆☆☆.
      `,
    ]
  },
  {
    title: "Assembly",
    proficiency: 10,
    stars: "★★★★★",
    icon: asm,
    id: "Assembly",
    desc: [
      `
I've programmed in Assembly language on the following RISC, CISC, and DSP processor families:
x86, 68k, ADSP2101, DSP56k, ARM, Snapdragon, PowerPC, MIPS, and Alpha.  ★★★★★.
      `,
    ]
  }, {
    title: "Other Languages",
    proficiency: 1,
    stars: "★☆☆☆☆",
    icon: code,
    id: "other",
    desc: [
      `
I've also used the following:
C#, Ruby, Lisp, HTML, CSS, Bash, Pascal, Ada, Awk, Make, Sed, Perl, PHP, and Basic.  I'm sure
there are others, but I don't really consider myself proficient
in any of these.  Basically, I can make them do what I need.  ★☆☆☆☆.
      `,
    ]
  },
];

export { languages };