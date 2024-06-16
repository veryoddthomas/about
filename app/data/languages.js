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
      `C and C++ are the two most widely used programming languages in the
         world. They are used for a wide variety of applications, from embedded
         systems to web applications.
        `,
      `I've been programming in C professionally since 1990.  At the time, I was
         writing embedded firmware for electronic test equipment.  I started
         programming in C++ a couple of years later, while .
         `,
    ],
  },
  {
    title: "Rust",
    icon: rust,
    id: "rust",
    desc: [
      `Rust is a systems programming language that is blazingly fast and
         memory-efficient. It is syntactically similar to C++, but can guarantee
         memory safety and thread safety.
         `,
    ]
  },
  {
    title: "Python",
    icon: python,
    id: "python",
    desc: [
      `Python is a general-purpose programming language that is used for
         a wide variety of applications. It is used for web applications,
         machine learning, and data science.`,
    ]
  },
  {
    title: "Lua", icon: lua, id: "lua", desc: [
      `Lua is a lightweight, efficient, and versatile scripting language
         designed for embedded systems and extensibility in larger applications.
         Lua's key strengths lie in its speed, portability, and ease of
         integration with other languages, making it popular in game development
         (notably for scripting game logic).  Its minimalistic
         design and focus on performance have contributed to its widespread
         adoption, particularly in scenarios where resource efficiency and
         flexibility are paramount.`,
    ]

  },
  { title: "Mojo 🔥", icon: mojo, id: "mojo", desc: [`TBD`,] },
  { title: "Other", icon: code, id: "other", desc: [`TBD`,] },
];

export { languages };