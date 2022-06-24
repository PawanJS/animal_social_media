import { Header } from './Header/header.component';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <footer className="font-bold">footer</footer>
    </>
  );
};
