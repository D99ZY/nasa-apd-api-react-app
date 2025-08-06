import PropTypes from 'prop-types';

function SideBar(props) {
  const { handleToggleModal } = props;
  return (
    <div className="sidebar">
      <div className="bgOverlay" />
      <div className="sidebarContents">
        <h2>The Brutal Martian Landscape</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">Description</p>
          <p>Lorem ipsum</p>
        </div>
        <button
          type="button"
          aria-label="Close Sidebar"
          onClick={() => {
            handleToggleModal();
          }}
        >
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>
    </div>
  );
}
export default SideBar;

SideBar.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
};
