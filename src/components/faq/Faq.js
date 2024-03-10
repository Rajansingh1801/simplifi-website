import React, { useEffect, useState } from "react";
import {
  Faq,
  FaqContainer,
  FaqLogo,
  FaqSearch,
  Searchbar,
  SearchIcon,
  MainContainer,
  Quest,
  QuesContainer,
  Answer,
} from "./element.js";
import axios from "../../axios";

import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { toast } from "react-toastify";
import Overlay from "../Overlay";
const Faqbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/get-faq");
      setData(response?.data?.data || []);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error?.response?.data?.errors) {
        toast.error(`${error.response.data.errors[0].msg}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error(`${error?.response?.data?.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredStrings =
    data?.filter((str) =>
      (str?.question).toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Faq>
        <FaqContainer>
          <FaqLogo>FAQ's</FaqLogo>
          <FaqSearch>
            <Searchbar>
              <form action="">
                <input
                  type="text"
                  style={{ border: "none" }}
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <SearchIcon color="#F37335">
                  <button type="submit" style={{ border: "none" }}></button>
                </SearchIcon>
              </form>
            </Searchbar>
          </FaqSearch>
        </FaqContainer>
      </Faq>
      <MainContainer>
        {filteredStrings?.map((currentEl) => {
          const { id } = currentEl;
          return <MyAccordion key={id} {...currentEl} />;
        })}
      </MainContainer>
      {isLoading && <Overlay />}
    </>
  );
};

export default Faqbar;

const MyAccordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <QuesContainer>
        <Quest style={{ fontFamily: "var(--pp-book)", fontWeight: "500" }}>
          <div onClick={() => setShow(!show)}>
            {show ? <FaMinus color="#F37335" /> : <FaPlus color="#F37335" />}{" "}
            {question}
          </div>
        </Quest>
        {show && (
          <Answer
            dangerouslySetInnerHTML={{ __html: answer }}
            style={{ fontFamily: "var(--pp-book)", fontSize: "18px" }}
          ></Answer>
        )}
      </QuesContainer>
    </>
  );
};
