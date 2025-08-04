function SideBar() {
  return (
    <div className="sidebar">
      <div className="bgOverlay" />
      <div className="sidebarContents">
        <h2>The Brutal Martian Landscape</h2>
        <div>
          <p>Description</p>
          <p>Lorem ipsum</p>
        </div>
      </div>
      <button type="button" aria-label="Close Sidebar" onClick={() => {}}>
        <i className="fa-solid fa-arrow-right" />
      </button>
    </div>
  );
}
export default SideBar;
