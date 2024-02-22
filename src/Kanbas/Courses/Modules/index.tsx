import ModuleList from "./List";
function Modules() {
  return (
    <div className="Container">
        <div className="Row">
            <div className="Col-sm">
            <h2 className="mod">Modules <button id="btnss" className="btn btn-outline-secondary">Collapse all</button></h2>
            </div>
      <ModuleList />
      </div>
    </div>
  );
}
export default Modules;