import React, {createRef, useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./ResearchCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function ResearchCard({publication, last}) {
  const imgRef = createRef();

  const {isDark} = useContext(StyleContext);

  return (
    <div>
      <Fade left duration={1000}>
        <div className="research-card">
          <div className="research-card-right">
            <a href={publication.doi} target="_blank" rel="noopener noreferrer" className="publication-link">
              <h5 className="research-text-school">{publication.title}</h5>
            </a>

            <div className="research-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode research-text-subHeader"
                    : "research-text-subHeader"
                }
              >
                {publication.authors}
              </h5>
              <h5
                className={
                  isDark
                    ? "dark-mode research-text-subHeader"
                    : "research-text-subHeader"
                }
              >
                {publication.venue}, {publication.year}
              </h5>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="research-card-border"></div>
      </Slide>
    </div>
  );
}

//{(last == '1') ? '' :
//}
