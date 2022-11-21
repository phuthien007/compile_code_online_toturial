import React from "react";
import Editor from "react-simple-code-editor";
import Prism, { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import "prismjs/components";
import "prismjs";
import { Button } from "react-bootstrap";

const ProblemCodeLayout = () => {
  const [code, setCode] = React.useState(
    `import java.io.*;

class Codechef {
    public static void main (String[] args) {
        System.out.println("Codechef!");
    }
}`
  );
  return (
    <div
      style={{
        height: "85vh",
        backgroundColor: "#1e1f26",
        color: "#FFF",
        overflowY: "scroll",
        overflowX: "hidden",
      }}
    >
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.clike)}
        padding={10}
        tabSize={2}
        onScroll={(e) => console.log("scroll", e)}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 13,
          position: "relative",
        }}
      />
      <Button
        style={{
          position: "absolute",
          right: "15px",
          bottom: "-20px",
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default ProblemCodeLayout;
