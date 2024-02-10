import { nanoid } from "@reduxjs/toolkit";
import TransactionType from "../../constants/TransactionType";
import styles from "./CategoriesModal.module.css";
import { useState } from "react";
import { CategoryItem } from "./CategoryItem/CategoryItem";
import CategoryActionType from "../../constants/CategoryActionType";

export const CategoriesModal = ({
  transactionType = TransactionType.Expense,
  categories: backendCategories = [],
  approveCategory,
}) => {
  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState(backendCategories);
  const [formActionType, setFormActionType] = useState(CategoryActionType.Add);
  const [activeCategory, setActiveCategory] = useState({});
  const [isBeingEdited, setIsBeingEdited] = useState(false);

  const handleAddCategoryFormOnSubmit = (event) => {
    event.preventDefault();

    if (formActionType === CategoryActionType.Add) {
      setCategories([...categories, { id: nanoid(), name: newCategory }]);
      setNewCategory("");
    } else if (formActionType === CategoryActionType.Edit) {
      setIsBeingEdited(false);
      setFormActionType(CategoryActionType.Add);

      categories.filter(
        (category) => category.id === activeCategory.id
      )[0].name = newCategory;
      setActiveCategory({});
      setNewCategory("");
    }
  };

  const handleAddCategoryOnChange = (event) => {
    setNewCategory(event.target.value);
  };

  // const handleApproveCategory = (category) => {
  //   approveCategory(category);
  // };

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
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <div className={styles.categoryModalContainer}>
      <h3 className={styles.modalTitle}>{transactionType + "s"}</h3>
      <p className={styles.allCategoryLabel}>All category</p>
      {(categories.length > 0 && (
        <ul className={styles.categoriesList}>
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              id={category.id}
              name={category.name}
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
