import style from "./Studentlist.module.css";

const Studentlist = ({ studentName, studentEmail }) => {
  return (
    <>
      <div className={style["grid-container"]}>
        <div className={style["grid-item"]}>{studentName}</div>
        <div className={style["grid-item"]}>{studentEmail}</div>
      </div>
    </>
  );
};

export default Studentlist;
