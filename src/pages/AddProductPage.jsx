import React, { useState } from "react";
import "../css/add.css";
import { useProductContext } from "../context/ProductContext";

function AddProductPage() {
  const { addProduct } = useProductContext();
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  function handleChange(e) {
    const obj = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(obj);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !formValue.title.trim() ||
      !formValue.description.trim() ||
      !formValue.price.trim() ||
      !formValue.category.trim() ||
      !formValue.image.trim()
    ) {
      alert("Заполните все поля");
      return;
    }

    addProduct(formValue);

    setFormValue({
      title: "",
      description: "",
      price: "",
      category: "",
      image: "",
    });
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} class="input-container">
        <div className="title-product">Add product</div>
        <input
          onChange={(e) => handleChange(e)}
          placeholder="Title"
          class="input-field"
          type="text"
          name="title"
          value={formValue.title}
        />
        <label for="input-field" class="input-label">
          title
        </label>
        <span class="input-highlight"></span>

        <input
          onChange={(e) => handleChange(e)}
          placeholder="Price"
          class="input-field"
          name="price"
          type="text"
          value={formValue.price}
        />
        <label for="input-field" class="input-label">
          price
        </label>
        <span class="input-highlight"></span>

        <input
          onChange={(e) => handleChange(e)}
          placeholder="Description"
          class="input-field"
          type="text"
          name="description"
          value={formValue.description}
        />
        <label for="input-field" class="input-label">
          description
        </label>
        <span class="input-highlight"></span>

        <h1>Category</h1>
        <select
          name="category"
          value={formValue.category}
          onChange={(e) => handleChange(e)}
        >
          <option value={"japaneese"}>Japaneese</option>
          <option value={"all"}>All</option>
          <option value={"japaneesegirl"}>girl</option>
        </select>
        <span class="input-highlight"></span>

        <input
          onChange={(e) => handleChange(e)}
          placeholder="Image"
          class="input-field"
          type="text"
          name="image"
          value={formValue.image}
        />
        <label for="input-field" class="input-label">
          image
        </label>
        <span class="input-highlight"></span>

        <button type="submit" className="add-submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default AddProductPage;
