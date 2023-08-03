import { Table } from "react-bootstrap";
import ElementCard from "../../layout/ElementCard";
const ColoredTable = function () {
  const code = ``;
  return (
    <>
      <ElementCard name="Colored Tables">
        <Table bordered hover>
          <thead className="table-main">
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
                <i class="bi bi-trash3-fill"></i>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Name 2</td>
              <td>Age 2</td>
              <td>
                <i class="bi bi-trash3-fill"></i>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Name 3</td>
              <td>Age 3</td>
              <td>
                <i class="bi bi-trash3-fill"></i>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table bordered hover>
          <thead className="table-sec">
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
                <i class="bi bi-trash3-fill"></i>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Name 2</td>
              <td>Age 2</td>
              <td>
                <i class="bi bi-trash3-fill"></i>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Name 3</td>
              <td>Age 3</td>
              <td>
                <i class="bi bi-trash3-fill"></i>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table bordered hover>
          <thead className="table-terinary">
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
                <i class="bi bi-trash3-fill"></i>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Name 2</td>
              <td>Age 2</td>
              <td>
                <i class="bi bi-trash3-fill"></i>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Name 3</td>
              <td>Age 3</td>
              <td>
                <i class="bi bi-trash3-fill"></i>
              </td>
            </tr>
          </tbody>
        </Table>
      </ElementCard>
    </>
  );
};
export default ColoredTable;
