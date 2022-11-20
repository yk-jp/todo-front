import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListAlt,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import style from "./style.module.css";

export default function Home() {
  return (
    <div
      className={`${style.flex} ${style.alignItemsCenter} ${style.justifyCenter} ${style.mt3}`}
    >
      <div
        id="todo-wrapper"
        className={`${style.container} ${style.borderRadius8px}`}
      >
        <div
          id="input-wrapper"
          className={`${style.inputWrapper}  ${style.borderRadius8px}`}
        >
          <FontAwesomeIcon icon={faListAlt} className={style.inputIcon} />
          <input
            type="text"
            className={style.inputField}
            placeholder="Add a Text"
          />
        </div>
        <div id="task-wrapper" className={`${style.taskWrapper}`}>
          <ul id="task-list" className={style.taskList}>
            <li className={`${style.list} ${style.borderRadius2px} ${style.mt1}`}>
              <input type="checkbox" className={style.m1} />
              <span className={style.m1}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </span>

              <FontAwesomeIcon icon={faEdit} />
              <FontAwesomeIcon icon={faTrashAlt} className={style.m1} />
            </li>
            <li className={`${style.list} ${style.borderRadius2px} ${style.mt1}`}>
              <input type="checkbox" className={style.m1} />
              <span className={style.m1}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled itLorem Ipsum is simply
              </span>

              <FontAwesomeIcon icon={faEdit} />
              <FontAwesomeIcon icon={faTrashAlt} className={style.m1} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
