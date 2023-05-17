import './ButtomSheet.scss'

interface ButtonSheetProps {
  children: React.ReactNode;
  className: string;
  closeButtonSheet: () => void
}

const ButtonSheet = (props: ButtonSheetProps) => {
  const { children, className, closeButtonSheet } = props
  return (
    <div className={`bottom-sheet-wrapper ${className}`}>
      <header className="bottom-sheet-header">
        <button className="bottom-sheet-close-btn" onClick={closeButtonSheet}>X</button>
      </header>
      <div className="bottom-sheet-content">
        {children}
      </div>
    </div >
  );
};

export default ButtonSheet;