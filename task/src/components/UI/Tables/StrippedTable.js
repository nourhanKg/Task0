import { Table } from "react-bootstrap";
import ElementCard from "../../layout/ElementCard";
import ElementCode from "../../layout/ElementCode";
const StrippedTable = function () {
  const code = `
  <Table bordered hover striped>
  <thead>
    <tr>
      <th>Id</th>
      <th>Data 1</th>
      <th>Data 2</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Name 1</td>
      <td>Age 1</td>
      <td>
        <i className="bi bi-trash3-fill"></i>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>Name 2</td>
      <td>Age 2</td>
      <td>
        <i className="bi bi-trash3-fill"></i>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Name 3</td>
      <td>Age 3</td>
      <td>
        <i className="bi bi-trash3-fill"></i>
      </td>
    </tr>
  </tbody>
</Table>
<Table bordered hover striped="columns">
  <thead>
    <tr>
      <th>Id</th>
      <th>Data 1</th>
      <th>Data 2</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Name 1</td>
      <td>Age 1</td>
      <td>
        <i className="bi bi-trash3-fill"></i>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>Name 2</td>
      <td>Age 2</td>
      <td>
        <i className="bi bi-trash3-fill"></i>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Name 3</td>
      <td>Age 3</td>
      <td>
        <i className="bi bi-trash3-fill"></i>
      </td>
    </tr>
  </tbody>
</Table>
  `;
  return (
    <>
      <ElementCard name="Stripped Table">
        <h2>Row Stripped</h2>
        <Table bordered hover striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Data 1</th>
              <th>Data 2</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Name 1</td>
              <td>Age 1</td>
              <td>
                <i className="bi bi-trash3-fill"></i>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Name 2</td>
              <td>Age 2</td>
              <td>
                <i className="bi bi-trash3-fill"></i>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Name 3</td>
              <td>Age 3</td>
              <td>
                <i className="bi bi-trash3-fill"></i>
              </td>
            </tr>
          </tbody>
        </Table>
        <h2>Column Stripped</h2>
        <Table bordered hover striped="columns">
          <thead>
            <tr>
              <th>Id</th>
              <th>Data 1</th>
              <th>Data 2</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Name 1</td>
              <td>Age 1</td>
              <td>
                <i className="bi bi-trash3-fill"></i>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Name 2</td>
              <td>Age 2</td>
              <td>
                <i className="bi bi-trash3-fill"></i>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Name 3</td>
              <td>Age 3</td>
              <td>
                <i className="bi bi-trash3-fill"></i>
              </td>
            </tr>
          </tbody>
        </Table>
      </ElementCard>
      <ElementCode code={code}></ElementCode>
    </>
  );
};
export default StrippedTable;
