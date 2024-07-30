import { useEffect, useState } from "react";

function InfiniteScroller() {
    const [count,setCount] = useState(50)

    useEffect(()=>{
        const onScroll = ()=>{
        if(window.innerHeight + window.scrollY >= window.document.body.offsetHeight - 30){
            setCount(count + 50)
        }
    }
    window.addEventListener('scroll',onScroll)

    return ()=> window.removeEventListener('scroll', onScroll)

    },[count])

    const elments = []
    for(let i = 0 ; i < count ; i++){
        elments.push(<div key={i}>{i}</div>)
    }
  return (
    <div>
      <h1>InifiniteScroller component</h1>
      <section>{elments}</section>
    </div>
  );
}

export default InfiniteScroller;
