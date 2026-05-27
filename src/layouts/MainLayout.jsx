import Header from "@/components/layout/Header/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="site-main">{children}</main>
    </>
  );
};

export default MainLayout;
