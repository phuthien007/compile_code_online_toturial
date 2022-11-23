import Accordion from "react-bootstrap/Accordion";

function Testcases({ data }) {
  return (
    <Accordion>
      {data?.length
        ? data.map((item, index) => (
            <Accordion.Item eventKey={index + 1}>
              <Accordion.Header>Testcase #{index + 1}</Accordion.Header>
              <Accordion.Body>
                <p>Input: {item.testcase.input}</p>
                <p>Output: {item.output}</p>
                <p>Expected: {item.testcase.output}</p>
                <p>
                  Result:{" "}
                  {item.testcase.output ===
                  item.output.replace(/(\r\n|\n|\r)/gm, "")
                    ? "Correctly answer"
                    : "Wrong answer"}
                </p>
                <p>Memory: {item.memory}</p>
                <p>Time: {item.time}</p>
              </Accordion.Body>
            </Accordion.Item>
          ))
        : "Not found testcase"}
    </Accordion>
  );
}

export default Testcases;
