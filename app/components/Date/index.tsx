const DateComponent = () => {
  const date = new Date();

  const formattedDate = date.toLocaleDateString("en-US", {
    timeZone: "UTC",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <p className="text-[#6272A4] text-[48px] font-bold">
        {formattedDate}
      </p>
    </>
  )
}

export default DateComponent;
