import Heading from "@atoms/Headings";
import Guideline from "@molecules/Guideline";
import styles from "./styles.module.scss";
import React, { useState } from "react";
import Button from "@atoms/Button";

const GuidelineView = React.forwardRef(
  ({ categories, guidelines, categoryActive, viewType }, ref) => {
    return (
      <span className={styles.page__break}>
        <section ref={ref} className={styles.guidelineView}>
          {categories.map((category) => {
            const [isClear, setIsClear] = useState(false);
            if (category.slug === categoryActive || categoryActive === "") {
              return (
                <section
                  key={category.slug}
                  className={styles.guidelineView__container}
                >
                  <Heading level="2" align="left" weight="regular">
                    {category.category}
                  </Heading>
                  <ul
                    className={`${styles.guidelineView__list} ${
                      styles[`guidelineView__list--${viewType}`]
                    }`}
                  >
                    {guidelines.map((guideline) => {
                      return guideline.categories.map((guidelineCategory) => {
                        return (
                          category.category ===
                            guidelineCategory.fields.category && (
                            <li key={guideline.title}>
                              <Guideline
                                isClear={isClear}
                                setIsClear={setIsClear}
                                guideline={guideline.title}
                                item={guideline.id}
                                type={viewType}
                                image={category.image}
                                category={category.category}
                              />
                            </li>
                          )
                        );
                      });
                    })}
                  </ul>
                  <Button
                    isButton
                    color="blue"
                    size="large"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsClear(true);
                      if (typeof window !== "undefined") {
                        guidelines.forEach((guideline) => {
                          localStorage.removeItem(
                            category.category + guideline.id
                          );
                        });
                      }
                    }}
                  >
                    Clear Selections
                  </Button>
                </section>
              );
            }
          })}
        </section>
      </span>
    );
  }
);

export default GuidelineView;
