import PropTypes from 'prop-types';

function Footer(props) {
  const { handleToggleModal } = props;

  return (
    <footer>
      <div className="bgGradient" />
      <div>
        <h2>The Brutal Martian Landscape</h2>
        <h1>APOD PROJECT</h1>
      </div>
      <button
        type="button"
        aria-label="Info"
        onClick={() => {
          handleToggleModal();
        }}
      >
        <i className="fa-solid fa-circle-info" />
      </button>
    </footer>
  );
}
export default Footer;

Footer.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
};
