import { useEffect } from 'react';
import './ButtomSheet.scss'

const ButtonSheet = ({ children, className, closeButtonSheet }: any) => {

  return (
    <div className={`bottom-sheet ${className}`}>
      <div className="bottom-sheet-content">
        <button onClick={closeButtonSheet}>X</button>
        {children}
      </div>
    </div >
  );
};

export default ButtonSheet;