import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import './css/Why.css'

export default class Chart extends Component{
  constructor(props){
    super(props)
    this.state = {
      chartData: {},
      firstRender : false
    }
    this.newData = ""
  }

  handleResize = (data) => {
    if(window.pageYOffset>900 && !this.state.firstRender){
      this.setState({
        chartData:data,
        firstRender:true
      })
    }
  }

  componentWillMount(){
    var ctx = document.getElementById('canvas').getContext("2d")
    var gradient = ctx.createLinearGradient(1, 100, 100, 300)
    gradient.addColorStop(0, 'yellow')
    gradient.addColorStop(1, 'red')
    this.newData = {
      labels: ["Age 5", "Age 10","Age 15","Age 35"],
      datasets: [
        {
          id: 1,
          label: 'My First Dataset',
          data: this.props.data,
          backgroundColor: [gradient],
        }
      ]
    }
    console.log("this",this.newData);
    window.addEventListener("scroll", ()=>this.handleResize(this.newData));
  }


  render(){
    
    var delayed;
      const options = {
            ticks: {
              stepSize: 25,
              max: 100,
              min:35,
              color:"rgba(0, 0, 0, 0.1)"
            },
          plugins: {
              legend: {
                  display: false,
              }
          },
            // maintainAspectRatio: false,
            borderRadius: 5,
            scales: {
              x: {
                grid: {
                  display: false,
                  borderColor: this.props.color1
                },
                ticks: {
                  color:"#000000",
                }
              },
              y: {
                grid: {
                  display: false,
                  borderColor: this.props.color1
                },
                ticks: {
                  color:"#000000",
                }
              }
            },
            animation: {
              onComplete: () => {
                delayed = true;
              },
              delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                  delay = context.dataIndex * 1000 + context.datasetIndex * 100;
                }
                return delay;
              },
            },
      }
    return(
        <div className="chart" style={{width: "20rem", height: "20rem"}}>
            <div className="chart-p"><p>{this.props.title}</p></div>
            {console.log(this.newData)}
            <Bar
            id='canvas'
            datasetIdKey='id'
            data={this.newData}
            options={options}
            height={4}
            width={5}
          />
        </div>

    )
  }
}
