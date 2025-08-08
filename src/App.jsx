import { useCallback, useEffect, useState } from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import SideBar from './components/SideBar';

function App() {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Toggle hide / show side bar modal
  const handleToggleModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  // Set data on page load
  useEffect(() => {
    // Retrieve NASA API key from .env file
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;

    // Retrieve and set data
    async function fetchAPIData() {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

      // Set data with local storage
      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        return;
      }

      // Set data with API call
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
