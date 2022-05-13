import { Skill } from "../../Model/skill";
import AdminLayout from "../../components/layout/AdminLayout";
import { useDispatch } from "react-redux";
import { removeSkill } from "../../actions/SkillAction";
import style from "../admin.module.scss";
import { Button } from "primereact/button";
interface Props {
  item: Skill;
}

const AdminSkillItem = ({ item }: Props) => {
  const dispatch = useDispatch();

  const deleteSkill = () => {
    dispatch(removeSkill(item.id));
  };

  return (
    <li>
      <section className={style["admin__skill-card"]}>
        <div className={style["admin__skill-card--picture"]}>
          <img src={item.photoUrl} />
        </div>

        <div className={style["admin__skill-card--info"]}>
          <p>{item.skillName}</p>
        </div>
        <div className={style["admin__skill-card--actions"]}>
          <Button label="Delete" icon="pi pi-trash" className="p-button-danger" onClick={deleteSkill} />
        </div>
      </section>
    </li>
  );
};

AdminSkillItem.Layout = AdminLayout;
export default AdminSkillItem;
