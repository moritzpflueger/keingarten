import React, { useEffect, useRef, useState } from 'react';

const Header = ({ handleMenuClick }) => {

  return (
    <header className="flex justify-between p-5">
      <h1 className="text-2xl text-red-500">Keingarten MVP</h1>
      <button 
        className="text-4xl"
        role="button"
        onClick={handleMenuClick}
      >
        ◎
      </button>
    </header>
  );
};

export default Header;