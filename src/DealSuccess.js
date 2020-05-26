import React from 'react';
import applause1 from './audio/applause1.mp3';


export default class Suitcase extends React.Component {

    componentDidMount() {
        document.getElementById("playerSuccessPage").play()
    }

    render() {
        return (
            <div className="dealSuccessPage">
                <audio id="playerSuccessPage" ref={this.myRef}>
                    <source src={applause1} type='audio/mpeg' />
                </audio>
                <img className="celebration" alt="celebration final" src={require('./images/celeb3.jpg')} />
                <div className="congratsPart">
                    <p>Congratulations you have won Rs {this.props.amountWon && this.props.amountWon.toLocaleString('en-IN')}</p>
                    <button onClick={()=> window.location.reload()} className="replayButton" ><span>Replay </span></button>
                </div>
            </div>
        )
    }

}