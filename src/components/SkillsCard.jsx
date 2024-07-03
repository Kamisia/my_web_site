const SkillsCard = ({ icon, title, text, icon2, subtitle }) => {
  return (
    <article className="max-w-xs min-h-40  flex-col  columns-1 ">
      <div className="align-element mt-0 mb-7  justify-center flex items-center ">
        <div className="p-1 ">{icon}</div>
        <div>
          <h4 className=" ml-1 font-thin text-black text-2xl text-center">
            {title}
          </h4>
          <h4 className=" ml-1 font-thin text-black text-lg text-center">
            {subtitle}
          </h4>
        </div>
        <div className="p-1">{icon2}</div>
      </div>
      <p className="mt-auto mb-auto text-gray text-justify"> {text}</p>
    </article>
  );
};
export default SkillsCard;
