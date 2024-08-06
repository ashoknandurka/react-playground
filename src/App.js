import "./App.css";
import Item from "./hoc/Item";
import Counter1 from "./customHook/counter1";
import Search from "./search/search";
import InfiniteScroller from "./infiniteScroll/infiniteScroller";
import InfiniteScrollerIntApi from "./infiniteScroll/infiniteIntApi";
import PaginationExample from "./pagination/Pagination";
import DebounceSearch from "./search/debounceSearch";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>new reacr app</h1>
      </header> */}
      <h1>new react app</h1>
      {/* <Search /> */}
      <DebounceSearch />
      {/* <Counter1 />  */}
      {/* <Item /> */}
      {/* <InfiniteScroller /> */}
      {/* <InfiniteScrollerIntApi /> */}
      {/* <PaginationExample /> */}
    </div>
  );
}

export default App;
