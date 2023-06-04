import { useState } from 'react';

function App() {
  const [images, setImages] = useState(null);
  const [value, setValue] = useState(null);
  const surpriseOptions = [
    'A red fox crossing a road',
    'A flock of crows flying over a trash can',
    'A watermelon swimming in creek',
  ];

  const getImages = async () => {
    try {
      const options = {
        method: 'POST',

        body: JSON.stringify({
          message: 'BLUGH',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch('http://localhost:8000/images', options);
      const data = await response.json();
      console.log(data);
      setImages(data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(value);

  return (
    <div className="App">
      <section className="search-section">
        <p>
          Start with a detailed description{' '}
          <span className="surprise">Surprise me</span>
        </p>
        <div className="input-container">
          <input
            value={value}
            placeholder="An amazing view of redwood trees..."
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={getImages}>Generate</button>
        </div>
      </section>
      <section className="image-section">
        {images?.map((image, _index) => (
          <img
            key={_index}
            src={image.url}
            alt={`Generated image of ${value}`}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
