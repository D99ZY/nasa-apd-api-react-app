import PropTypes from 'prop-types';

function Main(props) {
  const { data } = props;
  return (
    <div className="imgContainer">
      <img src={data.hdurl} alt={data.title} className="bgImage" />;
    </div>
  );
}
export default Main;

Main.propTypes = {
  data: PropTypes.shape({
    hdurl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
