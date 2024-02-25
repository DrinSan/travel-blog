interface ArrowProps {
  strokeWidth?: string;
}
const Arrow: React.FC<ArrowProps> = ({ strokeWidth }) => (
  <path
    d="M7.17,9.56l4.88,4.88,4.78-4.77"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth || "2.5"}
  />
);

export default Arrow;
