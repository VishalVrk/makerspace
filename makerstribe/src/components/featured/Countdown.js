import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Countdown extends Component {
    state={
        deadline:'Apr, 26, 2019',
        days:'0',
        hours:'0',
        minutes:'0',
        secounds:'0'
    }

    getTimeUntil(deadline){
        const time =Date.parse(deadline)-Date.parse(new Date());
        if(time<0){
            console.log('Date Passed');
        }else{
            const secounds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor((time/(1000*60*60*24)));

            this.setState({
                days,
                hours,
                minutes,
                secounds
            })
        }
    }

    componentDidMount(){
        setInterval(()=>
            this.getTimeUntil(this.state.deadline),1000
        
        )
    }

  render() {
    return (
        <Slide left delay={1000}>
             <div className="countdown_wrapper">
        <div className="countdown_top">
            Event Starts in
        </div>
        <div className="countdown_bottom">
            
            <div className="countdown_item">
                <div className="countdown_time">
                    {this.state.days}
                </div>
                <div className="countdown_tag">
                    Days
                </div>
            </div>


            <div className="countdown_item">
                <div className="countdown_time">
                {this.state.hours}
                </div>
                <div className="countdown_tag">
                   Hours
                </div>
            </div>


            <div className="countdown_item">
                <div className="countdown_time">
                {this.state.minutes}
                </div>
                <div className="countdown_tag">
                    Minutes
                </div>
            </div>

            <div className="countdown_item">
                <div className="countdown_time">
                {this.state.secounds}
                </div>
                <div className="countdown_tag">
                    Secounds
                </div>
            </div>

        </div>
      </div>
        </Slide>
    )
  }
}
export default Countdown;
