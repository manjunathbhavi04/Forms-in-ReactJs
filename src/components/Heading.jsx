import style from "./Heading.module.css";

const Heading = () => {
  return (
    <>
      <div className={style.heading}>
        <h4 className={style.h4}>Name</h4>
        <h4 className={style.h4}>Email</h4>
      </div>
    </>
  );
};

export default Heading;
