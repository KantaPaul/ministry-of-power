import cn from "classnames";

const Heading = ({
  title,
  className,
  ...props
}: {
  title: string;

  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "lg:text-3xl text-xl font-semibold lg:mb-11 mb-4 text-[#000225]",
        className
      )}
      {...props}
    >
      {title}
    </h2>
  );
};

export default Heading;
