import React, { useEffect, useState } from "react";

interface TitleWriterProps {
  text: string;
}

const TitleWriter: React.FC<TitleWriterProps> = ({ text }) => {
  const [typedText, setTypedText] = useState<string>("");
  useEffect(() => {
    let cnt = -1;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      cnt = text.length - 1;
    }
    let needToCloseEm = false;
    let needToCloseBold = false;
    const state = { disposed: false };
    setTypedText("");
    const movetoNextChar = (): void => {
      if (cnt < text.length && !state.disposed) {
        cnt += 1;
        let base = 0;
        if (text[cnt] === "*") {
          if (text[cnt + 1] === "*") {
            needToCloseBold = !needToCloseBold;
          } else if (text[cnt - 1] !== "*") {
            needToCloseEm = !needToCloseEm;
          }
        } else {
          let newText = `${text.substring(0, cnt + 1).trim()}`;
          newText += `${needToCloseEm ? "*" : ""}${needToCloseBold ? "**" : ""}`;
          setTypedText(newText);
          base = text[cnt] === " " ? 80 : 50;
          if (text[cnt] === "\n") {
            base = 500;
          }
          base += Math.random() * 25;
        }
        setTimeout(movetoNextChar, base);
      }
    };
    movetoNextChar();
    return (): void => {
      state.disposed = true;
    };
  }, [text]);
  return (
    <>
      <h2 className="font-oswald inline text-3xl uppercase tracking-widest text-primary">
        {typedText}
      </h2>
      <span className="-mb-1 ml-2 inline-block h-8 w-[14px] animate-write rounded-[3px] bg-primary" />
    </>
  );
};

export default React.memo(TitleWriter);
