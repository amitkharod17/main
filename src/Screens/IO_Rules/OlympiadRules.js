import React from 'react';
import './OlympiadRules.css';

const rulesData = [
    {
        title: "About Innovation Olympiad",
        rule: [
            `Rancho Labs Innovation Olympiad is the team competition inviting young mind and 
            future leaders in helping India achieve the United Nation sustainable development goals. 
            Students from class 6th-10th need to form a team of 3 and select one theme of sustainable 
            developments goal (out of 17, or they can incorporate more). Successfully formed team need 
            to identify problem, in the chosen theme, and work on creating a solution, in form of some 
            hardware machine or digital solution. Team of students need to submit their idea and its 
            conceptualisation in form of PPT, along with the video of working prototype. 
            Selected ideas will get a chance to present their case live in front of panels of professor 
            from IIT Delhi. Top 3 team gets a cash reward of ₹1 lakh .`,
            `There are going to be two category of teams. One of 6th-8th class and other of 9th-10th class 
            and each category will be judged individually.`
        ]
    },
    {
        title: "Team Formation",
        rule: [
            `Team can be formed by any three students belonging to class 6th-8th or 9th-10th class.`,
            `Each team will have one team leader, who will be filling the details of other team members.`,
            `On getting team loggin details, each member of team will have to validate thier participation 
            by logging through thier Rancho Labs bootcamp loggin credentials. If any team memberr has not 
            completed 2-days bootcamp, he or she will get one week period to complete boootcamp and validate 
            his/her participation.`
        ]
    },
    {
        title: "Theme and Idea Selection",
        rule: [
            `After successful registration of team, team need to start working on finding the problem in society 
            and relating it with one or more of the 17 United Nation sustainable development goals.`,
            `Team will be required to think deeply on how they can provide a solution to the problem. 
            The solution can be either mechanical hardware or digital solution or both.`
        ]
    },
    {
        title: "PPT and prototype Guidelines",
        rule: [
            `All teams need to submit their presentation and prototype video before 10th July 2022 11:59pm.`,
            `All teams need to create x-slides presentation mentioning problem, users, motivation, limintation, .......`,
            `All teams need to create 1 minute video explaining their solution.`
        ]
    },
    {
        title: "Shortlisting of teams & its criterion",
        rule: [
            `Selected teams list will be released on 15th July 2022 12pm. These teams will have to appear for final live presentation`,
            `Criterion for shortlist : Problem chosen, Impact it create, extent of ideation of solution.`
        ]
    },
    {
        title: "Live Presentation round",
        rule: [
            `Shortlisted team will need to prepare a 10 minutes presentation on their problem and solution.`,
            `Live presentation round will take place on 20th July 2022 starting from 9pm.`,
            `Presentation will be judged by panel of IIT Delhi professors.`
        ]
    },
    {
        title: "Result Announcement and Prizes",
        rule: [
            `Top 3 teams in category of 6-8th and 9-10th class will be announced on Innovation olympiad home page on 1st August 2022 6pm.`,
            `First Position : ₹60,000`,
            `Second Position : ₹25,000`,
            `Third Position : ₹15,000`,
            `All winning teams will be get a chance to visit IIT Delhi campus and rewarded medals in lecture hall complex by IIT Delhi professors.`,
            `Winning teams will get free 2 years mentorship by Rancho Labs.`
        ]
    }
];

function OlympiadRules() {
    return (
        <div className="olympiad_rules">
            <div className="olympiad_rules_header">
                <h2 className="rules_header_text">Olympiad Rules & Guidelines</h2>
            </div>
            <div className="olympiad_rules_content">
                {
                    rulesData.map((rules, index) => {
                        return (
                            <div className="rules_item">
                                <h2 className="rules_item_title">{rules.title}</h2>
                                <ul className="rules_points">
                                {
                                    rules.rule.map((point,index) => {
                                        return <li className="rules_point">{point}</li>
                                    })
                                }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OlympiadRules;