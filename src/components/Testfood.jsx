import React, { useEffect, useRef } from 'react';
import Tagify from '@yaireo/tagify'; // Vanilla JavaScript version of Tagify
import '@yaireo/tagify/dist/tagify.css';

const Testfood = () => {
  const inputRef = useRef();

  useEffect(() => {
    const tagify = new Tagify(inputRef.current, {
      whitelist: ["Teal", "Blue", "Mint", "Green", "Yellow", "Red", "Purple", "Pink"],
      enforceWhitelist: true,
      dropdown: {
        enabled: 0 // Show dropdown immediately
      }
    });

    return () => {
      tagify.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div className="container">
      <input ref={inputRef} placeholder="Add tag" />
    </div>
  );
};

export default Testfood;
