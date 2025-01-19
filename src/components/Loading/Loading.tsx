const Loading = () => {
  return(
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-transparent'>
      <div className='relative p-4'>
        <p className='text-xl flex gap-2 text-gray-500 dark:text-gray-300'>
          <span className='dot animate-bounce delay-100'>.</span>
          <span className='dot animate-bounce delay-200'>.</span>
          <span className='dot animate-bounce delay-300'>.</span>
        </p>
      </div>
    </div>
  );
}

export default Loading;
