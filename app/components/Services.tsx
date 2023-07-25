const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-5 px-5">
      <div className="relative inline-block">
        <span className="z-10 relative text-text-title font-bold xl:text-4xl lg:text-3xl sm:text-xl text-lg dark:text-white">
          What services do i provide
        </span>
        <div className="absolute inset-x-0 -bottom-0.5 bg-primary-highlight md:h-[20px] h-[15px]" />
      </div>
      <div>ServiceCard</div>
    </div>
  );
};

export default Services;
