function AutoComplete() {
    const [result, setResult] = useState([]);
    const [input, setInput] = useState('');
    const [showResults, setShowResults] = useState(false);
    const cache = useRef({});
  
    const fetchData = async () => {
      try {
        if (cache.current[input]) {
          console.log('cache result::', cache.current[input]);
          setResult(cache.current[input]);
          return;
        }
        console.log('input::', input);
        const data = await fetch(
          'https://dummyjson.com/recipes/search?q=' + input
        );
        const json = await data.json();
        setResult(json.recipes);
        cache.current[input] = json.recipes;
      } catch (error) {
        console.log('error fetching data::', error);
      }
    };
  
    // debounce
    useEffect(() => {
      let timer = setTimeout(() => {
        fetchData();
      }, 400);
      return () => {
        clearTimeout(timer);
      };
    }, [input]);
  
    return (
      <>
        <h1>AutoCompletion</h1>
        <input
          type="text"
          placeholder="search here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        />
        {showResults && (
          <ul>
            {result.map((item) => {
              return (
                <li key={item.id} className="search-item">
                  {item.name}
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
}

export default AutoComplete;