import ElementCard from "../layout/ElementCard";
import ElementCode from "../layout/ElementCode";
const Titles = function () {
  const code = `
<h1 className="h1 text-capitalize text-light bg-dark">
This is title for section
</h1>
<h1 className="h2 text-capitalize text-main">
  This is title for section
</h1>
<h1 className="h3 text-capitalize text-sec">
  This is title for section
</h1>
<h1 className="h4 text-capitalize text-terinary">
  This is title for section
</h1>
<h1 className="h3 text-center text-capitalize text-warning">
    This is title for section
</h1>
<h1 className="h4 text-center text-capitalize text-primary">
    This is title for section
</h1>
<h1 className="h5 text-center text-capitalize text-success">
    This is title for section
</h1>
<h1 className="h6 text-center text-capitalize text-danger">
    This is title for section
</h1>
  `;
  return (
    <>
      <ElementCard name="Titles Typography">
        <h2>Titles</h2>
        <h1 className="h1 text-capitalize text-light bg-dark">
          This is title for section
        </h1>
        <h1 className="h2 text-capitalize text-main">
          This is title for section
        </h1>
        <h1 className="h3 text-capitalize text-sec">
          This is title for section
        </h1>
        <h1 className="h4 text-capitalize text-terinary">
          This is title for section
        </h1>
      </ElementCard>
      <ElementCard>
        <h2>Titles Centered</h2>
        <h1 className="h3 text-center text-capitalize text-warning">
          This is title for section
        </h1>
        <h1 className="h4 text-center text-capitalize text-primary">
          This is title for section
        </h1>
        <h1 className="h5 text-center text-capitalize text-success">
          This is title for section
        </h1>
        <h1 className="h6 text-center text-capitalize text-danger">
          This is title for section
        </h1>
      </ElementCard>
      <ElementCode code={code}></ElementCode>
    </>
  );
};
export default Titles;
