const SkillsCard = ({ icon, title, text, progressValue }) => {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 text-black font-medium">{title}</h4>

      <div className="w-full bg-lightAccent/35 rounded-full ">
        <div
          className="bg-lightAccent text-xs font-medium  p-1 leading-none rounded-full"
          style={{ width: `${progressValue}%` }}
        ></div>
      </div>
      <p className="mt-2 text-gray justify-start">{text}</p>
    </article>
  );
};
export default SkillsCard;
