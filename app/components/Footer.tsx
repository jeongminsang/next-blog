const Footer = () => {
  return (
    <footer className="flex justify-center items-center max-w-[800px] w-full h-[100px] mx-auto mt-[30px] px-4">
      <div className="flex justify-center items-center w-full h-full border-t border-gray-500 py-[30px]">
        Copyright © {new Date().getFullYear()} Minsang Jeong
      </div>
    </footer>
  );
};
export default Footer;
