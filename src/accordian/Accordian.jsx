import { useState } from 'react';

const AccordianData = [
    { title: 'first title', content: 'first content' },
    { title: 'second title', content: 'second content' },
    { title: 'third title', content: 'third content' },
  ];

function Accordian() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div>
      <h1>Accordian</h1>
      {AccordianData.map((item, index) => {
        return (
          <div key={index}>
            <button onClick={() => handleClick(index)}>{item.title}</button>
            {index === activeIndex && <p>{item.content}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default Accordian;
