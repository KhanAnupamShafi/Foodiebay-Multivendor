import React, { useState } from "react";
import axios from "axios";
import AsyncCreatableSelect from "react-select/async-creatable";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import styled from "styled-components";
import { Dollar } from "styled-icons/open-iconic";
import { Scissors } from "styled-icons/bootstrap";
import { customAlphabet } from "nanoid";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Col,
  Container,
  FileInput,
  Form,
  FormBody,
  FormContainer,
  InputGroup,
  Row,
} from "./AddMenu.elements";
import FormButtonGroup from "../../../components/Shared/FormButtonGroup/FormButtonGroup";

const ingredientOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "cheese", label: "Cheese" },
  { value: "pepperoni", label: "Pepperoni" },
  { value: "sausage", label: "Sausage" },
  { value: "bacon", label: "Bacon" },
  { value: "egg", label: "Egg" },
  { value: "onions", label: "Onions" },
  { value: "bbq", label: "BBQ Sauce" },
];
const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: `rgba(243,242,247,1)`,
  }),
};

const AddMenu = () => {
  const [user] = useAuthState(auth);
  const nanoid = customAlphabet("1234567890", 10);
  const imageAPI = `271c9489ae5aa7d1092687fcd00d617b`;
  const [inputValue, setValue] = useState({
    sku: "sku_" + nanoid(10),
    name: "",
    price: 0,
    offer: 0,
    desc: "",
  });
  const [selectedValue, setSelectedValue] = useState(null);
  const [tags, setTags] = useState([]);
  const [file, setFile] = useState([]);
  const getData = async () => {
    let res = await axios.get("https://foodiebay.onrender.com/category");
    return res.data;
  };
  const navigate = useNavigate();
  // handle input change event

  const handleInputChange = (e) => {
    setValue((oldValues) => ({
      ...oldValues,
      [e.target.name]:
        e.target.type === "number" ? parseInt(e.target.value) : e.target.value,
    }));
  };
  const handleOnFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  // handle selection
  const handleChange = (value) => {
    setSelectedValue(value);
  };
  console.log(selectedValue);
  // const loadOptions = (inputValue) => {
  //   return fetch(`https://foodiebay.onrender.com/products`).then((res) => res.json());
  // };
  function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  const loadOptions = (inputValue) => {
    return getData().then((res) => {
      return res
        .filter((r) =>
          r.label.toLowerCase().startsWith(inputValue.toLowerCase())
        )
        .map((t) => ({ value: t._id, label: capitalize(t.label) }));
    });
  };
  const { data: restaurantInfo } = useQuery(["Restaurant", user.email], () =>
    fetch(
      `https://foodiebay.onrender.com/restaurant?restaurantId=${user.email}`
    ).then((res) => res.json())
  );

  const onSubmit = (e) => {
    e.preventDefault();

    const uri = `https://api.imgbb.com/1/upload?key=${imageAPI}`;
    const formData = new FormData();

    if (selectedValue === null) {
      alert("Category must be filled out");
      return false;
    }

    formData.append("image", file);

    fetch(uri, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log("result", result);
        let data = {
          ...inputValue,
          category: { ...selectedValue },
          ingredients: tags,
          image: result.data.url,
          currency: "USD",
          restaurantInfo,
        };
        console.log("data", data);

        if (data?.category.__isNew__) {
          const categoryInfo = {
            value: data.category.value,
            label: data.category.label,
          };
          fetch(`https://foodiebay.onrender.com/category`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(categoryInfo),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.success) {
                toast.success(`New Category Added Successfully`);
              }
            });
        }
        if (result.success) {
          fetch(`https://foodiebay.onrender.com/meal`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.success) {
                toast.success(`Item Added Successfully`);
                navigate("/dashboard/manage_items");
              } else {
                toast.error(`Failed to add the product`);
              }
            })
            .catch((error) => {
              toast.error(`Error adding product`);
              console.log(error);
            });
        }
      });
  };
  const customTheme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#FFDCCA",
      primary: "#C27061",
      neutral0: "hsl(0, 0%, 99%)",
      neutral10: "hsl(0, 100%, 95%)",
      neutral15: "hsl(24, 100%, 99%)",
      neutral20: "hsl(210, 34%, 65%)",
      neutral50: "hsl(210, 9%, 31%)",
      neutral60: "hsl(9, 57%, 49%)",
      neutral90: "hsl(9, 57%, 49%)",
    },
  });
  return (
    <Form onSubmit={onSubmit}>
      <FormContainer>
        <FormBody>
          <Row>
            <Col>
              <div>
                <label htmlFor="name">Item Name</label>
                <input
                  required
                  id="name"
                  name="name"
                  value={inputValue.name}
                  onChange={handleInputChange}
                />
              </div>
            </Col>
            <Col>
              <div>
                <label htmlFor="sku">ID</label>
                <input
                  id="sku"
                  name="sku"
                  value={inputValue.sku}
                  placeholder={inputValue.sku}
                  onChange={handleInputChange}
                  disabled
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Box>
              <div>
                <label>Category</label>
                <AsyncCreatableSelect
                  cacheOptions
                  defaultOptions
                  isSearchable
                  value={selectedValue}
                  loadOptions={loadOptions}
                  // onInputChange={handleInputChange}
                  onChange={handleChange}
                  styles={customStyles}
                  theme={customTheme}
                />
              </div>
            </Box>
            <Box>
              <div>
                <label>Add On</label>
                <CreatableSelect
                  required
                  components={makeAnimated()}
                  placeholder={`Select Ingredients...`}
                  isClearable
                  options={ingredientOptions}
                  onChange={setTags}
                  styles={customStyles}
                  theme={customTheme}
                  isMulti
                />
              </div>
            </Box>
          </Row>
          <Row>
            <Col>
              <div>
                <label htmlFor="price">Price</label>
                <InputGroup>
                  <div>
                    <Dollar width={20} />
                  </div>
                  <input
                    required
                    id="price"
                    name="price"
                    type="number"
                    onChange={handleInputChange}
                  />
                </InputGroup>
              </div>
            </Col>
            <Col>
              <div>
                <label htmlFor="offer">Discount</label>
                <InputGroup>
                  <div>
                    <Scissors width={20} />
                  </div>
                  <input
                    id="offer"
                    name="offer"
                    type="number"
                    onChange={handleInputChange}
                  />
                </InputGroup>
              </div>
            </Col>
          </Row>
          <Row>
            <Container>
              <div>
                <label htmlFor="desc">Description</label>
                <textarea
                  name="desc"
                  id="desc"
                  value={inputValue.desc}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <FileInput>
                <h4 className="box-title mt-10">Uploaded Image</h4>
                <div>
                  <input
                    required
                    name="image"
                    id="image"
                    type="file"
                    onChange={handleOnFileChange}
                  />
                </div>
              </FileInput>
            </Container>
          </Row>
        </FormBody>
      </FormContainer>

      {/* <input type="submit" /> */}
      <FormButtonGroup
        btn1="Add / Submit"
        btn2="Cancel"
        btnType1="submit"
        btnType2="button"
      />
    </Form>
  );
};

export default AddMenu;
