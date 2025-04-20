export function Card({ children }) {
  return <div className='bg-gray-50 p-4 rounded shadow'>{children}</div>;
}
export function CardContent({ children }) {
  return <div>{children}</div>;
}