import { useEffect, useRef, useState } from "react";

function InfiniteScrollerIntApi() {
  const [count, setCount] = useState(50);
  const observerRef = useRef(null);
  const loadmoreRef = useRef(null);
  

  useEffect(() => {
    const instersect = (entries) => {
      if (entries[0].isIntersecting) {
        setCount((prevCount) => prevCount + 50);
      }
    };
    observerRef.current = new IntersectionObserver(instersect);
  
    if (loadmoreRef.current) {
      observerRef.current.observe(loadmoreRef.current);
    }
    return () => {
      if (observerRef.current && loadmoreRef.current) {
        observerRef.current.unobserve(loadmoreRef.current);
      }
    };
  }, [count]);

  let elments = [];
  for (let i = 0; i < count; i++) {
    elments.push(<div key={i}>{i}</div>);
  }
  return (
    <div>
      <h1>infinite Scroll with intersection api</h1>
      <section>{elments}</section>
      <div ref={loadmoreRef} style={{ height: "1px" }}></div>
    </div>
  );
}

export default InfiniteScrollerIntApi;

/* 

const instersect = (entries)=>{
  if(entries[0].isIntersect){
  setCount(prev => prev + 50)
  }
  }

const observerRef.current = new IntersectionObserver(intersect)

if(observeRef.current){
observeRef.current.observe(leadmoreRef.current)
}

*/
