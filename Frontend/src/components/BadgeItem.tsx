interface IProps {
  children: React.ReactNode;
  className ? : string;
}
export default function BadgeItem({ children, className }: IProps) {
  return (
    <div className={`px-5 py-2 text-sm rounded-full flex-center cursor-pointer text-nowrap ${className}`}>
      {children}
    </div>
  );
}
