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

const proficiency_ratings = {
  "Novice": "Familiar with fundamental concepts, can write simple programs.",
  "Functional": "Familiar with core concepts, can tackle medium tasks.  Used on-demand, but not consistently",
  "Intermediate": "Comfortable with core concepts, can tackle more complex tasks.  Familiar with idiomatic code.",
  "Advanced": "Proficient, can handle challenging problems.",
  "Expert": "Fluent. Deep understanding of the language, including idiosyncracies.  Effective reviewer and mentor",
}

const languages = [
  {
    title: "C and C++",
    proficiency: "Expert",
    icon: c_and_cpp,
    id: "c-and-cpp",
    desc: [
      `
I have decades of experience with C and C++, developing
on Windows, OS X, and Linux using GCC, clang, and Microsoft
Visual C++, as well numerous cross-compilers for
embedded devices.  Much of my experience is with
system code, as opposed to GUI applications.  I also
have experience with interop between C and
other languages (Assembly, Lua, Rust, etc.)
      `,
    ],
  },
  {
    title: "Python",
    proficiency: "Advanced",
    icon: python,
    id: "python",
    desc: [
      `
I have been programming in Python for more than 10 years.
I use it for basic scripting, text manipulation and parsing,
data analysis, modeling, and extensive on-device test automation.
I've done a fair amount of python2 ➜ python3 migration.
      `,
    ]
  },
  {
    title: "Rust",
    proficiency: "Intermediate",
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
    title: "Lua",
    proficiency: "Functional",
    icon: lua,
    id: "lua",
    desc: [
      `
I have used Lua intermittently over several years. I think it's a great
language for certain problem domains. Lua is extremely intuitive,
compact, and easy to comprehend. It is powerful, but simple to learn.
It is also embeddable, which makes it a great choice for enabling
scripting inside another application (or game engine).
      `,
    ]

  },
  {
    title: "Mojo",
    proficiency: "Novice",
    icon: mojo,
    id: "mojo",
    desc: [
      `
  I'm just starting to work with Mojo, but it's exciting.
  It is a revolutionary platform for AI and other parallelizable
  problem domains, while also being very familiar to experienced
  python developers.
        `,
    ]
  },
  {
    title: "Javascript",
    proficiency: "Intermediate",
    icon: javascript,
    id: "javascript",
    desc: [
      `
I've used Javascript (ES6) for web development, and still consider myself a novice.
But, I have been able to complete several projects and keep the code
readable, functional, and maintainable.  It seems deceptively powerful and elegant
if you avoid some pitfalls.  I'm exploring TypeScript, but wanted a handle
on Javascript first.
      `,
    ]
  },
  {
    title: "Assembly",
    proficiency: "Advanced",
    icon: asm,
    id: "assembly",
    desc: [
      `
I've programmed in Assembly language on the following RISC, CISC, and DSP processor families:
x86, 68k, ADSP2101, DSP56k, ARM, Snapdragon, PowerPC, MIPS, and Alpha.
      `,
    ]
  }, {
    title: "Other Languages",
    proficiency: "Functional",
    icon: code,
    id: "other",
    desc: [
      `
I've also used C#, Ruby, Lisp, HTML, CSS, Bash, Pascal, Ada,
Awk, Make, Sed, Perl, PHP, and Basic.  I'm sure
there are others, but I don't really consider myself proficient
in any of these.  Basically, I can make them do what I need.
      `,
    ]
  },
];

export { languages, proficiency_ratings };