interface SampleNextArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
const SampleNextArrow: React.FC<SampleNextArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} next-arrow`}
      style={{
        ...style,}}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clipPath="url(#clip0_1_349)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.06 10.94C16.3409 11.2213 16.4987 11.6025 16.4987 12C16.4987 12.3975 16.3409 12.7788 16.06 13.06L10.404 18.718C10.1226 18.9993 9.74102 19.1573 9.34316 19.1572C8.9453 19.1571 8.56377 18.9989 8.28251 18.7175C8.00125 18.4361 7.84329 18.0545 7.84338 17.6567C7.84348 17.2588 8.00162 16.8773 8.28301 16.596L12.879 12L8.28301 7.40403C8.00964 7.12126 7.85827 6.74243 7.8615 6.34913C7.86473 5.95583 8.0223 5.57953 8.30028 5.30129C8.57827 5.02305 8.95441 4.86511 9.34771 4.86151C9.741 4.85791 10.12 5.00893 10.403 5.28203L16.061 10.939L16.06 10.94Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_349">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};
export default SampleNextArrow;
