import data from '../../json/data.json';
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Category.css';

const itemsPerPage = 9; // Số sản phẩm mỗi trang

function Category() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('default');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState(10000); // Giá mặc định tối đa
  const [additionalFilter, setAdditionalFilter] = useState('all');
  const [selectedSubcategories, setSelectedSubcategories] = useState(new Set());
  const [expandedCategory, setExpandedCategory] = useState('');

  const {key} = useParams();

  const handleSubcategoryChange = (e, subcategoryName) => {
    const newSelectedSubcategories = new Set(selectedSubcategories);
    if (e.target.checked) {
      newSelectedSubcategories.add(subcategoryName);
    } else {
      newSelectedSubcategories.delete(subcategoryName);
    }
    setSelectedSubcategories(newSelectedSubcategories);
  };

  const handleCategoryToggle = (categoryName) => {
    setExpandedCategory((prev) => (prev === categoryName ? '' : categoryName));
  };

  const filterData = (data) => {
    let filteredData = data;

    if (key) {
      filteredData = filteredData.filter((item) =>
        item.name.toLowerCase().includes(key.toLowerCase())
      );
    }

    if (selectedCategory) {
      filteredData = filteredData.filter(
        (item) => item.parentCategory === selectedCategory
      );
    }

    if (selectedSubcategories.size > 0) {
      filteredData = filteredData.filter((item) =>
        selectedSubcategories.has(item.subcategory)
      );
    }

    filteredData = filteredData.filter(
      (item) => parseFloat(item.price.replace('$', '')) <= priceRange
    );

    if (additionalFilter && additionalFilter !== 'all') {
      filteredData = filteredData.filter(
        (item) => item.categoryType.toLowerCase() === additionalFilter
      );
    }

    return filteredData;
  };

  const sortData = (data) => {
    switch (sortOption) {
      case 'lowest':
        return data.sort(
          (a, b) =>
            parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''))
        );
      case 'highest':
        return data.sort(
          (a, b) =>
            parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''))
        );
      case 'rating':
        return data.sort(
          (a, b) => b.rating - a.rating
        );
      default:
        return data;
    }
  };

  const getPaginatedData = () => {
    const allItems = data.categories.flatMap((category) =>
      category.subcategories.flatMap((subcategory) =>
        subcategory.items.map((item) => ({
          ...item,
          parentCategory: category.name,
          subcategory: subcategory.name,
        }))
      )
    );

    const filteredItems = filterData(allItems);
    const sortedItems = sortData(filteredItems);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return sortedItems.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(
  filterData(
    data.categories
      .flatMap((category) =>
        category.subcategories.flatMap((subcategory) => subcategory.items)
      )
  ).length / itemsPerPage
);


  const changePage = (page, event) => {
    event.preventDefault();
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container-fluid homeStyler py-5">
      <div className="container py-5">
        <h1 className="mb-4">Home Styler</h1>
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="row g-4">
              <div className="col-xl-3">
                {/* <div className="input-group w-100 mx-auto d-flex">
                  <input
                    type="search"
                    className="form-control p-3"
                    placeholder="Search homeStylers"
                    aria-describedby="search-icon-1"
                  />
                  <span
                    id="search-icon-1"
                    className="input-group-text p-3"
                  >
                    <i className="fa fa-search"></i>
                  </span>
                </div> */}
              </div>
              <div className="col-6"></div>
              <div className="col-xl-3">
                <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                  <label htmlFor="homeStyler">Sort By:</label>
                  <select
                    id="homeStyler"
                    name="homeStylerlist"
                    className="border-0 form-select-sm bg-light me-3"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    form="homeStylerform"
                  >
                    <option value="default">No Sorted</option>
                    <option value="rating">Rating</option>
                    <option value="lowest">Price: Low to High</option>
                    <option value="highest">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>
                  
            <div className="row g-4">
              <div className="col-lg-3">
                {/* Multi-Level Menu for Category Filter */}
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <h2 className="font-bold p-5">Home Styler</h2>
                      <form>
                        <ul className="list-unstyled">
                          {data.categories.map((category) => (
                            <li key={category.id}>
                              <div
                                className="category-header"
                                onClick={() => handleCategoryToggle(category.name)}
                              >
                                <h3>{category.name}</h3>
                                <i
                                  className={`fa ${
                                    expandedCategory === category.name
                                      ? 'fa-chevron-up'
                                      : 'fa-chevron-down'
                                  }`}
                                ></i>
                              </div>
                              <ul
                                className={`subcategory-list ${
                                  expandedCategory === category.name ? 'show' : 'hide'
                                }`}
                              >
                                {category.subcategories.map((subcategory) => (
                                  <li key={subcategory.name} className="form-check">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      id={`subcategory-${subcategory.name}`}
                                      value={subcategory.name}
                                      onChange={(e) => handleSubcategoryChange(e, subcategory.name)}
                                    />
                                    <label className="form-check-label" htmlFor={`subcategory-${subcategory.name}`}>
                                      {subcategory.name}
                                    </label>
                                    <hr />  

                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </form>
                    </div>
                  </div>


                  <div className="col-lg-12">
                    <div className="mb-3">
                      <h4 className="mb-2">Price</h4>
                      <input
                        type="range"
                        className="form-range w-100 custom-range"
                        id="rangeInput"
                        name="rangeInput"
                        min="0"
                        max="10000"
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                      />
                      <output id="amount" name="amount" htmlFor="rangeInput">
                        $ {priceRange}
                      </output>
                    </div>
                  </div>


                  <div className="mb-3">
                    {['All', 'Contemporary Styles', 'Elegant Look Styles'].map((filter) => (
                      <div className="mb-2" key={filter}>
                        <input
                          type="radio"
                          className="me-2"
                          id={`StyleBy-${filter}`}
                          name="StyleBy"
                          value={filter.toLowerCase()}
                          onChange={(e) => setAdditionalFilter(e.target.value)}
                          checked={additionalFilter === filter.toLowerCase()}
                        />
                        <label htmlFor={`StyleBy-${filter}`}>{filter}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* homeStyler Listings */}
              <div className="col-lg-9">
                <div className="row g-4 justify-content-center">
                  {getPaginatedData().map((item) => (
                    <div key={item.id} className="col-md-6 col-lg-6 col-xl-4">
                      <div className="rounded position-relative homeStyler-item">
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: '10px', left: '10px' }}
                        >
                          {item.categoryType}
                        </div>
                        <div className="homeStyler-img">
                          <img
                            src={item.imageUrl}
                            className="img-fluid w-100 rounded-top"
                            alt={`${item.name} Image`}
                          />
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4 >
                          <Link to={`/detail/${item.id}`}>{item.name}</Link>
                            </h4>
                          <p>{item.description}</p>
                          <p>Rating: {item.rating} ★</p>
                          <p>Location: {item.location}</p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              {item.price}
                            </p>
                          
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="col-12">
                  <div className="pagination d-flex justify-content-center mt-5">
                    <a
                      href="#"
                      className="rounded"
                      onClick={(e) => changePage(currentPage - 1, e)}
                    >
                      &laquo;
                    </a>
                    {Array.from({ length: totalPages }, (_, index) => (
                      <a
                        key={index}
                        href="#"
                        className={`rounded ${
                          currentPage === index + 1 ? 'active' : ''
                        }`}
                        onClick={(e) => changePage(index + 1, e)}
                      >
                        {index + 1}
                      </a>
                    ))}
                    <a
                      href="#"
                      className="rounded"
                      onClick={(e) => changePage(currentPage + 1, e)}
                    >
                      &raquo;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
