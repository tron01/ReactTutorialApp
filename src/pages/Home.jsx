import { useSelector } from 'react-redux';

const Home = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div className="text-center">
      <h1>Welcome to MyApp</h1>
      <p>Current theme: <strong>{theme}</strong></p>
    </div>
  );
};
export default Home;