import React from "react";
import "./Research.scss";
import ResearchCard from "../../components/researchCard/ResearchCard";
import {researchInfo} from "../../portfolio";

export default function Research() {
  if (researchInfo.display) {
    return (
      <div className="research-section" id="research">
        <h1 className="research-heading">Research</h1>
        <div className="research-card-container">
          {researchInfo.publications.map((publication, index) => (
            (index < researchInfo.publications.length - 1) ?
            <ResearchCard key={index} publication={publication} last='0' /> :
            <ResearchCard key={index} publication={publication} last='1' />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
