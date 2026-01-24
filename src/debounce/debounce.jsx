import {useCallback} from 'react'

function debounce(fun, delay){
    let timerId;
    return function(...args){
        clearTimeout(timerId)
        timerId = setTimeout(()=>{
            fun.apply(this, args)
        },delay)
    }
}
export const SearchDebounce =()=> {

    const debounceSearch = useCallback(debounce((value)=>{
  console.log('search value::',value)
    },2000),[])

    const handleChange = (e)=>{
    debounceSearch(e.target.value)
    }
    return ( 
        <input 
        type='text'
        placeholder="search.."
        onChange={handleChange}
         />
     );
}

/*
Without useCallback:
A new debounced function is created on every render
Old timer is lost → debounce breaks

With useCallback:
Same debounced function is reused
timer inside debounce stays in memory

Delay logic works correctly 
*/
