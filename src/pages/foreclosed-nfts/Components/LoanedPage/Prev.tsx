interface SamplePrevArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
const SamplePrevArrow: React.FC<SamplePrevArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} prev-arrow`}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clipPath="url(#clip0_1_344)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.93999 10.94C7.65909 11.2213 7.50131 11.6025 7.50131 12C7.50131 12.3975 7.65909 12.7788 7.93999 13.06L13.596 18.718C13.8774 18.9993 14.259 19.1573 14.6568 19.1572C15.0547 19.1571 15.4362 18.9989 15.7175 18.7175C15.9988 18.4361 16.1567 18.0545 16.1566 17.6567C16.1565 17.2588 15.9984 16.8773 15.717 16.596L11.121 12L15.717 7.40403C15.9904 7.12126 16.1417 6.74243 16.1385 6.34913C16.1353 5.95583 15.9777 5.57953 15.6997 5.30129C15.4217 5.02305 15.0456 4.86511 14.6523 4.86151C14.259 4.85791 13.88 5.00893 13.597 5.28203L7.93899 10.939L7.93999 10.94Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_344">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="matrix(-1 0 0 1 24 0)"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};
export default SamplePrevArrow;
