import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import style from "./style.module.css";

export default function Home() {
  return (
    <div
      className={`${style.flex} ${style.alignItemsCenter} ${style.justifyCenter} ${style.mt3}`}
    >
      <div
        id="todo-wrapper"
        className={`${style.container} ${style.borderRadius}`}
      >
        <div
          id="input-wrapper"
          className={`${style.inputWrapper}  ${style.borderRadius}`}
        >
          <FontAwesomeIcon icon={faListAlt} className={style.inputIcon}/>
          <input
            type="text"
            className={style.inputField}
            placeholder="Add a Text"
          />
        </div>
      </div>
    </div>
  );
}
