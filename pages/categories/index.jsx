import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import useContentful from "hooks/useContentful";
import contentfulTypes from "hooks/contentfulTypes";
import CategoriesActions from "@organisms/CategoriesActions";
import GuidelineView from "@organisms/GuidelineView";
import Printer from "@molecules/Printer";
import styles from "./styles.module.scss";

const Categories = ({ categories, guidelines }) => {
  const router = useRouter();
  const componentRef = useRef();
  const getPageMargins = () => {
    return `@page { margin: 1rem !important; }`;
  };

  let selectedCategory = "";

  if (router.query.select) {
    selectedCategory = router.query.select;
  }

  const [viewType, setViewType] = useState("list");

  const [categoryActive, setCategoryActive] = useState(selectedCategory);

  const filterSelectHandler = (value) => {
    setCategoryActive(value);
  };

  const filterConfig = {
    active: categoryActive,
    onSelect: filterSelectHandler,
  };

  return (
    <div className={styles.categories}>
      <Printer componentRef={componentRef} />

      <CategoriesActions
        categories={categories}
        filterConfig={filterConfig}
        viewType={viewType}
        setViewType={setViewType}
      />
      <GuidelineView
        ref={componentRef}
        categories={categories}
        guidelines={guidelines}
        categoryActive={categoryActive}
        viewType={viewType}
      />
    </div>
  );
};

export const getStaticProps = async () => {
  const { getEntries } = useContentful();

  const responseCategories = await getEntries({
    content_type: contentfulTypes.category,
    select: "fields",
  });
  const responseGuidelines = await getEntries({
    content_type: contentfulTypes.guideline,
  });

  return {
    props: {
      categories: responseCategories,
      guidelines: responseGuidelines,
    },
    revalidate: 3600,
  };
};

export default Categories;
