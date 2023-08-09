import { Table } from "react-bootstrap";
import ElementCard from "../../layout/ElementCard";
import ElementCode from "../../layout/ElementCode";
const BasicTable = function () {
  const code = `
  <Table bordered hover>
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
        <h2>Dark & Centered</h2>
        <Table bordered hover variant="dark" className="text-center">
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
      <ElementCard name="Basic Table">
        <h2>Light</h2>
        <Table bordered hover>
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
        <h2>Dark & Centered</h2>
        <Table bordered hover variant="dark" className="text-center">
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
export default BasicTable;
