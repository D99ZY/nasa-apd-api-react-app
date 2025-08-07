import { useCallback, useEffect, useState } from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import SideBar from './components/SideBar';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  useEffect(() => {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
    async function fetchAPIData() {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
      try {
        const res = await fetch(url);
        const resData = await res.json();
        console.log('DATA\n', resData);
        setData(resData);
      } catch (error) {
        console.log(error.message);
        console.error(error.message);
      }
    }
    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear" />
        </div>
      )}
      {showModal && <SideBar handleToggleModal={handleToggleModal} data={data} />}
      {data && <Footer handleToggleModal={handleToggleModal} data={data} />}
    </>
  );
}

export default App;
