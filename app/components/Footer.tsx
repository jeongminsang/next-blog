const Footer = () => {
  return (
    <footer className='bg-bg-base text-white font-mono text-[12px] uppercase tracking-[1px] border-t border-border-default mt-24'>
      <div className='max-w-[1200px] mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8'>
        <div className='flex flex-col gap-2'>
          <span className='opacity-100'>
            © {new Date().getFullYear()} MINSANG_DEV. ALL RIGHTS RESERVED.
          </span>
          {/* <span className='text-white/30'>MINSANG_DEV_V1.0</span> */}
        </div>
        <div className='flex gap-8'>
          <a
            className='text-white/50 hover:text-white transition-colors duration-200'
            href='https://github.com/jeongminsang'
            target='_blank'
            rel='noreferrer'
          >
            GITHUB
          </a>
          {/* <a
            className='text-white/50 hover:text-white transition-colors duration-200'
            href='#'
          >
            TWITTER
          </a>
          <a
            className='text-white/50 hover:text-white transition-colors duration-200'
            href='#'
          >
            LINKEDIN
          </a>
          <a
            className='text-white/50 hover:text-white transition-colors duration-200'
            href='#'
          >
            RSS
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
