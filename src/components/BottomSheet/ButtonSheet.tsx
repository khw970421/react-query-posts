import './ButtomSheet.scss'

interface ButtonSheetProps {
  children: React.ReactElement;
  className: string;
  closeButtonSheet: () => void
}

const ButtonSheet = (props: ButtonSheetProps) => {
  const { children, className, closeButtonSheet } = props
  const commentLength = children.props?.comments?.length
  return (
    <div className={`bottom-container ${className}`}>
      <div className={`bottom-background ${className}`}></div>
      <div className={`bottom-sheet-wrapper ${className}`}>
        <header className="bottom-sheet-header">
          <h3>게시물 댓글 <span>{commentLength}</span></h3>
          <button className="bottom-sheet-close-btn" onClick={closeButtonSheet}>X</button>
        </header>
        <div className="bottom-sheet-content">
          {children}
        </div>
      </div >
    </div>

  );
};

export default ButtonSheet;