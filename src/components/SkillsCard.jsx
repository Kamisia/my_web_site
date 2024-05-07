const SkillsCard = ({ icon, title, text }) => {
  return (
    <article className="max-w-xs min-h-40  flex-col  columns-1 ">
      <div className="align-element mt-0 mb-7  justify-center flex ">
        <div className="pt-1">{icon}</div>

        <h4 className=" ml-1 font-thin text-black text-2xl">{title}</h4>
      </div>
      <p className="mt-auto mb-auto text-gray text-justify"> {text}</p>
    </article>
  );
};
export default SkillsCard;
