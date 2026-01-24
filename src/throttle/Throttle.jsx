import { useState, useRef, useEffect } from "react"

function throttle(fun, delay){
    let lastTime = 0;
    return function(){
        let now = Date.now()
        if(now - lastTime >= delay){
            lastTime = now
            fun()
        }
    }

}

export const Throttle =()=>{
    const [height, setHeight] = useState(window.innerHeight);
const throttleResize = useRef(throttle(() => {
        console.log("Resize executed at:", Date.now());
        setHeight(window.innerHeight);
      }, 1000))

      useEffect(()=>{
        window.addEventListener('resize',throttleResize.current)
        return ()=> window.removeEventListener('resize', throttleResize.current)
      },[])

    return(
        <h2>Window Height: {height}</h2>
    )
}

/*
inside the component, it will be recreated on every render, resetting lastCall and breaking throttle.

useRef keeps the same throttled function instance across renders.
 */