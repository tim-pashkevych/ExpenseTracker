import TransactionType from "../../constants/TransactionType";
import styles from "./CategoriesModal.module.css";
import { useEffect, useState } from "react";
import { CategoryItem } from "./CategoryItem/CategoryItem";
import CategoryActionType from "../../constants/CategoryActionType";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategoryThunk,
  deleteCategoryThunk,
  fetchCategoriesThunk,
  updateCategoryThunk,
} from "@/redux/categories/operations";
import { selectExpenses, selectIncomes } from "@/redux/categories/slice";

export const CategoriesModal = ({
  transactionType = TransactionType.Expense,
  approveCategory,
}) => {
  const dispatch = useDispatch();

  const categories = useSelector(
    transactionType === TransactionType.Expense ? selectExpenses : selectIncomes
  );

  const [newCategory, setNewCategory] = useState("");

  const [formActionType, setFormActionType] = useState(CategoryActionType.Add);
  const [activeCategory, setActiveCategory] = useState({});
  const [isBeingEdited, setIsBeingEdited] = useState(false);

  const handleAddCategoryFormOnSubmit = (event) => {
    event.preventDefault();

    if (formActionType === CategoryActionType.Add) {
      dispatch(
        createCategoryThunk({
          type: transactionType + "s",
          categoryName: newCategory,
        })
      );
      setNewCategory("");
    } else if (formActionType === CategoryActionType.Edit) {
      setIsBeingEdited(false);
      setFormActionType(CategoryActionType.Add);

      dispatch(
        updateCategoryThunk({
          id: activeCategory.id,
          newName: newCategory,
          type: transactionType + "s",
        })
      );

      setActiveCategory({});
      setNewCategory("");
    }
  };

  const handleAddCategoryOnChange = (event) => {
    setNewCategory(event.target.value);
  };

  const editCategory = (category) => {
    setIsBeingEdited(true);
    setFormActionType(CategoryActionType.Edit);
    setActiveCategory(category);
    setNewCategory(category.name);

    const editCategoryName_TextBox = document.querySelector(
      `.${styles.addCategoryInput}`
    );
    editCategoryName_TextBox.focus();
  };

  const deleteCategory = (id) => {
    dispatch(deleteCategoryThunk({ id, type: transactionType + "s" }));
  };

  useEffect(() => {
    dispatch(fetchCategoriesThunk())
      .unwrap()
      .then((data) => console.log(data));
  }, [dispatch]);

  return (
    <div className={styles.categoryModalContainer}>
      <h3 className={styles.modalTitle}>{transactionType + "s"}</h3>
      <p className={styles.allCategoryLabel}>All category</p>
      {(categories.length > 0 && (
        <ul className={styles.categoriesList}>
          {categories.map(({ _id: id, categoryName: name }) => (
            <CategoryItem
              key={id}
              id={id}
              name={name}
              approve={approveCategory}
              edit={editCategory}
              remove={deleteCategory}
              isBeingEdited={isBeingEdited}
            />
          ))}
        </ul>
      )) || <p className={styles.emptyLabel}>Empty</p>}
      <form
        className={styles.addCategoryForm}
        onSubmit={handleAddCategoryFormOnSubmit}
      >
        <label className={styles.addCategoryLabel}>
          <span className={styles.addCategorySpan}>
            {formActionType === CategoryActionType.Add
              ? "New category"
              : "Edit category"}
          </span>
          <div className={styles.addInputContainer}>
            <input
              className={styles.addCategoryInput}
              type="text"
              placeholder="Enter the text"
              value={newCategory}
              onChange={handleAddCategoryOnChange}
              required
            />
            <button className={styles.addCategoryButton}>
              {formActionType}
            </button>
          </div>
        </label>
      </form>
    </div>
  );
};
