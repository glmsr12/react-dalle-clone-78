function App() {
  const surpriseOptions = [
    'A red fox crossing a road',
    'A flock of crows flying over a trash can',
    'A watermelon swimming in creek',
  ];

  async function getImages() {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'BLUGH',
        }),
      };
      const response = await fetch('http://localhost:8000/images', options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <section className="search-section">
        <p>
          Start with a detailed description{' '}
          <span className="surprise">Surprise me</span>
        </p>
        <div className="input-container">
          <input placeholder="An amazing view of redwood trees..." />
          <button onClick={getImages}>Generate</button>
        </div>
      </section>
      <section className="image-section"></section>
    </div>
  );
}

export default App;
