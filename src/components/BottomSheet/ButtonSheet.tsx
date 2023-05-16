import './ButtomSheet.scss'

const ButtonSheet = ({ children, className, closeButtonSheet }: any) => {

  return (
    <div className={`bottom-sheet-wrapper ${className}`}>
      <div className="bottom-sheet-content">
        <header className="bottom-sheet-header">
          <button className="bottom-sheet-close-btn" onClick={closeButtonSheet}>X</button>
        </header>
        {children}
      </div>
    </div >
  );
};

export default ButtonSheet;