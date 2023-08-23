import React from "react";
import "../css/Why.css";
import Graph from "./GraphChart";

const data = {
  2017: [
    { month: "Age 5", sale: 98, total: 100 },
    { month: "Age 10", sale: 27, total: 100 },
    { month: "Age 15", sale: 15, total: 100 },
    { month: "Age 35", sale: 5, total: 100 },
  ],
};

const Card = ({ title, desc, quote }) => {
  return (
    <div className="why-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <div>
        <div>
          <i className="fas fa-quote-left" /> <hr />
        </div>
        <p>
          {quote}
        </p>
        <div>
          <hr />
          <i className="fas fa-quote-right" />
        </div>
      </div>
    </div>
  );
};

export default class WhyThisProgram extends React.Component {
  state = {
    chartData1: {},
    chartData2: {},
    chartData3: {},
  };

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
        
      chartData1: {
        labels: ["Age 5", "Age 10", "Age 15", "Age 35"],
        datasets: [
          {
            data: [98, 30, 12, 2],
            //backgroundColor:'green',
            backgroundColor: [
              "rgb(255,155,23)",
              "rgb(255,155,23)",
              "rgb(255,155,23)",
              "rgb(255,155,23)",
            ],
          },
        ],
      },
      chartData2: {
        labels: ["Age 5", "Age 10", "Age 15", "Age 35"],
        datasets: [
          {
            data: [98, 60, 40, 2],
            //backgroundColor:'green',
            backgroundColor: [
              "rgb(97,78,205)",
              "rgb(97,78,205)",
              "rgb(97,78,205)",
              "rgb(97,78,205)",
            ],
          },
        ],
      },
      chartData3: {
        labels: ["Age 5", "Age 10", "Age 15", "Age 35"],
        datasets: [
          {
            data: [10, 50, 70, 75],
            //backgroundColor:'green',
            backgroundColor: [
              "rgb(52,182,191)",
              "rgb(52,182,191)",
              "rgb(52,182,191)",
              "rgb(52,182,191)",
            ],
          },
        ],
      },
    });
  }
  
  render() {
    return (
      <div className="why-container">
        <h2>
          <span>Why</span> this Program
        </h2>
        <p>
          Our Younger selves are far more creative, intelligent and better
          learners than our older selves
        </p>
        <div className="gh-container gh-1">
          <Graph chartData={this.state.chartData1} displayLegend={false} type="creativity" title="Creativity Score"/>
          <Card
            title="Creativity Levels"
            desc="Scientists of NASA, Dr.George Land & Beth Jarman, tested some 1600 five-year olds, and gave them a test to solve problem and come up with innovative solutions. They were retested as 10 yr olds and then again as 15 yr olds."
            quote="You are 90% more creative as a child than as an adult."
          />
        </div>
        <div className="gh-container gh-2">
          <Card
            title="Language Learning Abilities"
            desc="Dr. Paul Thompson, a neurology professor at UCLA, conducted a study to analyse the capability of acquisition of a new language with age."
            quote="Learning a language is much easier for a 10 year old than a 25 year old."
          />
          <Graph chartData={this.state.chartData2} displayLegend={false} type="language" title="Language Learning Abilities"/>
        </div>
        <div className="gh-container gh-3">
          <Graph chartData={this.state.chartData3} displayLegend={false} type="IQ" title="IQ Levels"/>
          <Card
            title="IQ Levels"
            desc="Indian Psychiatry Journal conducted a study on different forms of intelligence in Indian school-going children with age."
            quote="Maximum growth of IQ is witnessed between 5 years to 15 years."
          />{" "}
        </div>
      </div>
    );
  }
}
