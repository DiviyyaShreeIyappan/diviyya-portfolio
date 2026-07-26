"use client";

import { useEffect, useState } from "react";

const lines = [
  { text: "Hi, I'm Diviyya", delay: 0, isTitle: true },
  { text: "const developer = {", delay: 2 },
  { text: '  name: "Diviyya Shree",', delay: 4 },
  { text: '  role: "Postgraduate CS Student",', delay: 6 },
  {
    text: '  university: "University College Dublin",',
    delay: 8,
  },
  {
    text: '  focus: ["Java", "Backend", "Distributed Systems"]',
    delay: 10,
  },
  { text: "}", delay: 12 },
];

export default function HeroText() {
  const [status, setStatus] = useState(() => {
    if (typeof window === "undefined") {
      return "complete";
    }

    return sessionStorage.getItem("heroSeen") === "true"
      ? "complete"
      : "animate";
  });

  useEffect(() => {
    if (status !== "animate") return;

    const timer = setTimeout(() => {
      sessionStorage.setItem("heroSeen", "true");
      setStatus("complete");
    }, 14000);

    return () => clearTimeout(timer);
  }, [status]);

  return (
    <div className="heroText">
      {lines.map((line, index) => (
        <span
          key={index}
          className={[
            "heroTextLine",
            line.isTitle ? "heroTextTitle" : "",
            status === "animate"
              ? "heroTextTyping"
              : "heroTextComplete",
          ]
            .filter(Boolean)
            .join(" ")}
          style={{
            "--line-width": `${line.text.length}ch`,
            "--typing-steps": line.text.length,
            "--typing-delay": `${line.delay}s`,
          }}
        >
          {line.text}
        </span>
      ))}
    </div>
  );
}