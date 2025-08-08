import PropTypes from 'prop-types';

function Footer(props) {
  const { handleToggleModal, data } = props;

  return (
    <footer>
      <div className="bgGradient" />
      <div>
        <h1>APOD PROJECT</h1>
        <h2>{data?.title}</h2>
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
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};
