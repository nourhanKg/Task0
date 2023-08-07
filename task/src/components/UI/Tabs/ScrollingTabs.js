import ElementCard from "../../layout/ElementCard";
import ElementCode from "../../layout/ElementCode";
import { useRef, useState } from "react";
const ScrollingTabs = function () {
  const tabMenuRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  function dragTabBar(e) {
    if (!isDragging) return;
    const tabMenu = tabMenuRef.current;
    const maxScrollValue = tabMenu.scrollWidth - tabMenu.clientWidth;
    tabMenu.scrollLeft -= e.movementX;
    if (tabMenu.scrollLeft <= 0) {
      setShowLeftArrow(false);
    } else {
      setShowLeftArrow(true);
    }
    if (tabMenu.scrollLeft >= maxScrollValue) {
      setShowRightArrow(false);
    } else {
      setShowRightArrow(true);
    }
  }
  function moveToEnd() {
    const tabMenu = tabMenuRef.current;
    const scrollAmount = tabMenu.clientWidth;
    const maxScrollValue = tabMenu.scrollWidth - tabMenu.clientWidth;
    tabMenu.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
    setShowLeftArrow(true);
    setTimeout(() => {
      if (tabMenu.scrollLeft >= maxScrollValue) {
        setShowRightArrow(false);
      }
    }, 500);
  }
  function moveToStart() {
    const tabMenu = tabMenuRef.current;
    const scrollAmount = tabMenu.clientWidth;
    tabMenu.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
    setShowRightArrow(true);
    tabMenu.scrollLeft < scrollAmount && setShowLeftArrow(false);
  }
  const code = `
  <div className="text-light d-flex  align-items-center position-relative">
    {showLeftArrow && (
    <button
        id="left-btn"
        className="position-absolute top-50 start-0 translate-middle-y rounded-circle border-0 bg-light fs-4 fw-bold"
        onClick={moveToStart}
    >
        <i className="bi bi-chevron-left"></i>
    </button>
    )}
    {showRightArrow && (
    <button
        id="right-btn"
        className="position-absolute top-50 end-0 translate-middle-y rounded-circle border-0 bg-light fs-4 fw-bold"
        onClick={moveToEnd}
    >
        <i className="bi bi-chevron-right"></i>
    </button>
    )}
    <ul
    id="tab-menu"
    className="px-4 list-unstyled d-flex justify-content-start align-items-center my-0 w-100 mx-3 overflow-hidden"
    ref={tabMenuRef}
    onMouseDown={() => setIsDragging(true)}
    onMouseUp={() => setIsDragging(false)}
    onMouseMove={dragTabBar}
    >
    <li
        className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
        style={{ width: "10rem" }}
    >
        <a className="text-light text-decoration-none" href="#">
        Link1
        </a>
    </li>
    <li
        className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
        style={{ width: "10rem" }}
    >
        <a className="text-light text-decoration-none" href="#">
        Link2
        </a>
    </li>
    <li
        className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
        style={{ width: "10rem" }}
    >
        <a className="text-light text-decoration-none" href="#">
        Link3
        </a>
    </li>
    <li
        className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
        style={{ width: "10rem" }}
    >
        <a className="text-light text-decoration-none" href="#">
        Link4
        </a>
    </li>
    <li
        className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
        style={{ width: "10rem" }}
    >
        <a className="text-light text-decoration-none" href="#">
        Link5
        </a>
    </li>
    <li
        className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
        style={{ width: "10rem" }}
    >
        <a className="text-light text-decoration-none" href="#">
        Link6
        </a>
    </li>
    <li
        className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
        style={{ width: "10rem" }}
    >
        <a className="text-light text-decoration-none" href="#">
        Link7
        </a>
    </li>
    <li
        className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
        style={{ width: "10rem" }}
    >
        <a className="text-light text-decoration-none" href="#">
        Link8
        </a>
    </li>
    <li
        className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
        style={{ width: "10rem" }}
    >
        <a className="text-light text-decoration-none" href="#">
        Link9
        </a>
    </li>
    <li
        className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
        style={{ width: "10rem" }}
    >
        <a className="text-light text-decoration-none" href="#">
        Link10
        </a>
    </li>
    <li
        className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
        style={{ width: "10rem" }}
    >
        <a className="text-light text-decoration-none" href="#">
        Link11
        </a>
    </li>
    <li
        className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
        style={{ width: "10rem" }}
    >
        <a className="text-light text-decoration-none" href="#">
        Link12
        </a>
    </li>
    </ul>
</div>
  `;
  return (
    <>
      <ElementCard name="Scrolling Tabs">
        <div className="text-light d-flex  align-items-center position-relative">
          {showLeftArrow && (
            <button
              id="left-btn"
              className="position-absolute top-50 start-0 translate-middle-y rounded-circle border-0 bg-light fs-4 fw-bold"
              onClick={moveToStart}
            >
              <i className="bi bi-chevron-left"></i>
            </button>
          )}
          {showRightArrow && (
            <button
              id="right-btn"
              className="position-absolute top-50 end-0 translate-middle-y rounded-circle border-0 bg-light fs-4 fw-bold"
              onClick={moveToEnd}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          )}
          <ul
            id="tab-menu"
            className="px-4 list-unstyled d-flex justify-content-start align-items-center my-0 w-100 mx-3 overflow-hidden"
            ref={tabMenuRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseMove={dragTabBar}
          >
            <li
              className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
              style={{ width: "10rem" }}
            >
              <a className="text-light text-decoration-none" href="#">
                Link1
              </a>
            </li>
            <li
              className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
              style={{ width: "10rem" }}
            >
              <a className="text-light text-decoration-none" href="#">
                Link2
              </a>
            </li>
            <li
              className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
              style={{ width: "10rem" }}
            >
              <a className="text-light text-decoration-none" href="#">
                Link3
              </a>
            </li>
            <li
              className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
              style={{ width: "10rem" }}
            >
              <a className="text-light text-decoration-none" href="#">
                Link4
              </a>
            </li>
            <li
              className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
              style={{ width: "10rem" }}
            >
              <a className="text-light text-decoration-none" href="#">
                Link5
              </a>
            </li>
            <li
              className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
              style={{ width: "10rem" }}
            >
              <a className="text-light text-decoration-none" href="#">
                Link6
              </a>
            </li>
            <li
              className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
              style={{ width: "10rem" }}
            >
              <a className="text-light text-decoration-none" href="#">
                Link7
              </a>
            </li>
            <li
              className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
              style={{ width: "10rem" }}
            >
              <a className="text-light text-decoration-none" href="#">
                Link8
              </a>
            </li>
            <li
              className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
              style={{ width: "10rem" }}
            >
              <a className="text-light text-decoration-none" href="#">
                Link9
              </a>
            </li>
            <li
              className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
              style={{ width: "10rem" }}
            >
              <a className="text-light text-decoration-none" href="#">
                Link10
              </a>
            </li>
            <li
              className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
              style={{ width: "10rem" }}
            >
              <a className="text-light text-decoration-none" href="#">
                Link11
              </a>
            </li>
            <li
              className="rounded-pill bg-main px-3 py-2 me-4 text-light text-center"
              style={{ width: "10rem" }}
            >
              <a className="text-light text-decoration-none" href="#">
                Link12
              </a>
            </li>
          </ul>
        </div>
      </ElementCard>
      <ElementCode code={code}></ElementCode>
    </>
  );
};
export default ScrollingTabs;
