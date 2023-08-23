import React from "react";
import "./css/Why.css";
import Chart from "./Graph";

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
          <i class="fas fa-quote-left" /> <hr />
        </div>
        <p>
          <b>{quote}</b>
        </p>
        <div>
          <hr />
          <i class="fas fa-quote-right" />
        </div>
      </div>
    </div>
  );
};

export default class Why extends React.Component {
  state = {
    chartData: {},
    chartData2:{},
  };

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: ["Age 5", "Age 10", "Age 15", "Age 35"],
        datasets: [
          {
            data: [2, 15, 27, 100],
            //backgroundColor:'green',
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
          },
        ],
      },
      chartData2: {
        labels: ["Age 5", "Age 10", "Age 15", "Age 35"],
        datasets: [
          {
            data: [100, 27, 15, 2],
            //backgroundColor:'green',
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
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
          <span>Why</span> this Program?
        </h2>
        <p>
          Our Younger selves are far more creative, intelligent and better
          learners than our older selves
        </p>
        <div className="gh-container gh-1">
          <Chart chartData={this.state.chartData} displayLegend={false} title="Creativity Levels"/>
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
          <Chart chartData={this.state.chartData} displayLegend={false} title="Language Learning Abilities"/>
        </div>
        <div className="gh-container gh-3">
          <Chart chartData={this.state.chartData2} displayLegend={false} title="IQ Levels"/>
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
