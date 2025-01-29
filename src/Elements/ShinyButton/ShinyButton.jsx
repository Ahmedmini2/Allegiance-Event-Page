import './ShinyButton.css'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function ShinyButton({ title, link}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  }

  return (
    <button type="button" className={`button hover:shadow-md shadow w-full hover:bg-main-green-500`} onClick={handleClick}>
     <span className="fold" />
      <div className="points_wrapper">
        {/* Points remain the same */}
        <i className="point" />
        <i className="point" />
        <i className="point" />
        <i className="point" />
        <i className="point" />
        <i className="point" />
        <i className="point" />
        <i className="point" />
        <i className="point" />
        <i className="point" />
      </div>
      <span className="inner">
        {/* Right Arrow SVG */}
        <svg
          className="icon"
          fill="none"
          width="34"  /* set the width */
          height="34" /* set the height */
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4.5"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
        {title}
      </span>
    </button>
  );
}

export default ShinyButton;