function App() {
  const surpriseOptions = [
    'A red fox crossing a road',
    'A flock of crows flying over a trash can',
    'A watermelon swimming in creek',
  ];
  return (
    <div className="App">
      <section className="search-section">
        <p>
          Start with a detailed description{' '}
          <span className="surprise">Surprise me</span>
        </p>
        <div className="input-container">
          <input placeholder="An amazing view of redwood trees..." />
          <button>Generate</button>
        </div>
      </section>
      <section className="image-section"></section>
    </div>
  );
}

export default App;
