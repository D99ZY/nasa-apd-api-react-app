import { useCallback, useEffect, useState } from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import SideBar from './components/SideBar';

function App() {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  useEffect(() => {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
    async function fetchAPIData() {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        return;
      }
      localStorage.clear();
      try {
        const res = await fetch(url);
        const resData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(resData));
        setData(resData);
      } catch (error) {
        console.error('Error object:', error);
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
