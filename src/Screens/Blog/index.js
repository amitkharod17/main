import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import "./index.css";
import { blogList } from "../../Actions/Blog";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowBack from "./images/arrowRight.png";
import blogMobileBanner from "./images/blogMobileBanner.png";
import axios from "axios";
import Loading from "../../Components/Loading";

function Blog() {
  const { blogs } = useSelector((state) => state.blogs);
  const [temparray, settemparray] = useState([]);
  const [selection, setSelection] = useState(false);
  const [selectedCategory, setselectedCategory] = useState(
    localStorage.getItem("category") === null
      ? "Robotics"
      : localStorage.getItem("category")
  );

  const [allBlogCategory, setallBlogCategory] = useState([]);
  const dispatch = useDispatch();
  console.log(blogs);
  // console.log(localStorage.getItem("category"));
  const [nextItems, setNextItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    localStorage.setItem("category", selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    dispatch(blogList(0));
    const userInfo = localStorage.getItem("userInfo");
    const token = userInfo ? JSON.parse(userInfo).token : "";
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    };
    axios
      .get("/api/blogcategory", config)
      .then((res) => setallBlogCategory(res.data));
  }, []);

  useEffect(() => {
    if (blogs && allBlogCategory) {
      var size = 4;
      var arrayOfArrays = [];
      var singleCategoryBlogs = [];

      // for (var j = 0; j < blogs.length; j++) {
      //   for (var k = 0; k < blogs[j].blogCategory; k++) {
      //     if (blogs[j].blogCategory[k].categoryName === selectedCategory) {
      //       singleCategoryBlogs.push(blogs[j]);
      //     }
      //   }
      // }
      const blogCatID = allBlogCategory.filter(
        (bcat) => bcat.name === selectedCategory
      );
      // console.log(blogCatID);
      blogs.forEach((singleBlog) => {
        if (
          (singleBlog.blogCategory?.filter(
            (bcat) => bcat.categoryName === blogCatID[0]?._id
          )).length > 0
        ) {
          singleCategoryBlogs.push(singleBlog);
        }
      });

      for (var i = 0; i < singleCategoryBlogs.length; i += size) {
        arrayOfArrays.push(singleCategoryBlogs.slice(i, i + size));
      }

      settemparray(arrayOfArrays);
    }
  }, [blogs, selectedCategory, allBlogCategory]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomLeft = ({ onClick }) => (
    <button
      className="course-carousel-icon-button course-carousel-icon-left"
      onClick={onClick}
    >
      <img src={ArrowBack} className="course-carousel-icon" />
    </button>
  );

  const CustomRight = ({ onClick }) => (
    <button
      className="course-carousel-icon-button course-carousel-icon-right"
      onClick={onClick}
    >
      <img src={ArrowBack} className="course-carousel-icon" />
    </button>
  );

  const handleNextBlogs = () => {
    const newNexItems = nextItems + 12;
    setNextItems(newNexItems);
    setCurrentPage((prevPage) => prevPage + 1);
    dispatch(blogList(newNexItems));
  };

  const handlePrevBlogs = () => {
    if (nextItems > 0) {
      const newPrevItems = nextItems - 12;
      setNextItems(newPrevItems);
      setCurrentPage((prevPage) => prevPage - 1);
      dispatch(blogList(newPrevItems));
    }
  };

  // console.log(temparray);
  // className="selected"
  return (
    <div className="blog">
      <div className="blog__category">
        <ul className="blog__categoryList">
          {allBlogCategory?.map((blogCat) => {
            return (
              <li
                className={selectedCategory === blogCat.name && "selected"}
                onClick={() => setselectedCategory(blogCat.name)}
              >
                {blogCat.name}
              </li>
            );
          })}
          {/* <li
            className={selectedCategory === "Robotics" && "selected"}
            onClick={() => setselectedCategory("Robotics")}
          >
            Robotics
          </li>
          <li
            className={selectedCategory === "Programming" && "selected"}
            onClick={() => setselectedCategory("Programming")}
          >
            Programming
          </li>
          <li
            className={
              selectedCategory === "Artificial Intelligence" && "selected"
            }
            onClick={() => setselectedCategory("Artificial Intelligence")}
          >
            Artificial Intelligence
          </li> */}
        </ul>
      </div>
      <div className="blog__categoryMobile">
        <label className="blog__categoryList__label">
          Select A Particular Category
        </label>
        <select
          className="blog__categoryList__select"
          value={selectedCategory}
          onChange={(e) => setselectedCategory(e.target.value)}
        >
          {allBlogCategory?.map((blogCat) => {
            return <option value={blogCat.name}> {blogCat.name}</option>;
          })}
        </select>
      </div>
      {temparray.length < 1 && currentPage === 1 ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          <Loading
            type="spinningBubbles"
            color="#5a6bff"
            width="32px"
            height="32px"
          />
        </div>
      ) : temparray.length < 1 && currentPage !== 1 ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          <h3 className="no_blogs_text">No Blogs</h3>
        </div>
      ) : (
        temparray.map((blogSet, index) => {
          return (
            <div className="blog__cardsContainer">
              {blogSet[0] && <BlogCard isVertical={false} blog={blogSet[0]} />}
              {window.innerWidth < 600 ? (
                <Carousel
                  swipeable={true}
                  draggable={true}
                  showDots={true}
                  responsive={responsive}
                  infinite={true}
                  // arrows={false}
                  // autoPlay={true}
                  // autoPlaySpeed={2500}
                  // centerMode={showCenteredMode}
                  customLeftArrow={<CustomLeft />}
                  customRightArrow={<CustomRight />}
                  // keyBoardControl={true}
                  className="blog__cards__carousel"
                >
                  {blogSet[1] && (
                    <BlogCard isVertical={true} blog={blogSet[1]} />
                  )}
                  {blogSet[2] && (
                    <BlogCard isVertical={true} blog={blogSet[2]} />
                  )}
                  {blogSet[3] && (
                    <BlogCard isVertical={true} blog={blogSet[3]} />
                  )}
                </Carousel>
              ) : (
                <div className="blog__cardsContainer__vertical">
                  {blogSet[1] && (
                    <BlogCard isVertical={true} blog={blogSet[1]} />
                  )}
                  {blogSet[2] && (
                    <BlogCard isVertical={true} blog={blogSet[2]} />
                  )}
                  {blogSet[3] && (
                    <BlogCard isVertical={true} blog={blogSet[3]} />
                  )}
                </div>
              )}
            </div>
          );
        })
      )}
      <div className="pagination_box">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <button className="page-link" onClick={handlePrevBlogs}>
                Previous
              </button>
            </li>
            <li class="page-item">
              <button className="page-link">{currentPage}</button>
            </li>
            <li class="page-item">
              <button className="page-link" onClick={handleNextBlogs}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="blog__featured">
        <p>
          Write to us at <strong>admin@rancholabs.com</strong> to get your
          article featured
        </p>
      </div>
      <div className="blog__banner">
        <h3>
          It's Time To Start <br /> Investing In Yourself
        </h3>
        <p>
          Explore The Tech Sector With Us And Take A Step Towards Your Passion
          And Future.
        </p>
        <button onClick={() => (window.location.href = "/courses")}>
          Enroll Now
        </button>
      </div>
    </div>
  );
}

export default Blog;
