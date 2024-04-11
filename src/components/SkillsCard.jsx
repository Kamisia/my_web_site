const SkillsCard = ({ icon, title, text, progressValue }) => {
  return (
    <article>
      <div className="align-element  justify-start ">
        <div>{icon}</div>
        <div className="w-full md:col-span-2">
          <h4 className="mt-3 mb-3 text-black text-2xl">{title}</h4>
          <div className="w-full bg-lightAccent/35 rounded-full ">
            <div
              className="bg-lightAccent text-xs font-medium  p-1 leading-none rounded-full"
              style={{ width: `${progressValue}%` }}
            ></div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-gray justify-start">{text}</p>
    </article>
  );
};
export default SkillsCard;
