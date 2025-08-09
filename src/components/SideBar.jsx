import PropTypes from 'prop-types';

function SideBar(props) {
  const { handleToggleModal, data } = props;
  return (
    <div className="sidebar">
      <div
        className="bgOverlay"
        onClick={handleToggleModal}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleToggleModal();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      />
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p className="descriptionText">{data?.explanation}</p>
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
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};
