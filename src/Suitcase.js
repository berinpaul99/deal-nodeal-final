import React from 'react';
import { obj, amountLeft, amountRight } from './json/object';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DealSuccess from './DealSuccess';
import power from './audio/power.mp3';
import ModalPart from './Modal';

export default class Suitcase extends React.Component {

    constructor() {
        super();
        this.myRef = React.createRef();
    }

    state = {
        suitValues: "",
        amtLeft: amountLeft,
        amtRight: amountRight,
        roundNumber: 1,
        roundNoUpdate: "Choose your lucky suitcase",
        overallSuitCasesSelected: 0,
        bankerOfferSection: false,
        overallAmountPresent: 3418418,
        round1Cases: 6,
        round2Cases: 5,
        round3Cases: 3,
        round4Cases: 2,
        round5Cases: 1,
        aud: power,
        openErrorModal: false
    }

    componentDidMount() {
        let updated = this.shuffledBox(obj)
        let updatedValues = updated.map((val, key) => {
            return {
                ...val,
                id: key + 1
            }
        })
        this.setState({
            suitValues: updatedValues,
        })

        if(window.innerWidth < 550) {
            console.log("enters")
            this.setState({
                openErrorModal: true
            })
        }
    }

    componentDidUpdate(prevProp) {
        if (prevProp.muteAudio !== this.props.muteAudio) {

            if (this.props.muteAudio) {
                this.myRef.current.play()
            }
            else this.myRef.current.pause()
        }
    }

    shuffledBox(sourceArray) {
        for (var i = 0; i < sourceArray.length - 1; i++) {
            var j = i + Math.floor(Math.random() * (sourceArray.length - i));

            var temp = sourceArray[j];
            sourceArray[j] = sourceArray[i];
            sourceArray[i] = temp;
        }
        return sourceArray
    }

    suitcaseLeftClick = (e) => {
        let a = this.state.suitLeft.find((val) => val.id === e.target.id)
        this.setState(prevState => ({
            suitLeft: prevState.suitLeft.map(
                obj => (obj.id === a.id ? Object.assign(obj, { case_open: true }) : obj)
            )
        }));
    }

    suitcaseRightClick = (e) => {
        let a = this.state.suitRight.find((val) => val.id === e.target.id)
        this.setState(prevState => ({
            suitRight: prevState.suitRight.map(
                obj => (obj.id === a.id ? Object.assign(obj, { case_open: true }) : obj)
            )
        }));
    }

    suitClick = (e, amt, selectedId) => {

        let a = e.target.id ? e.target.id : selectedId;
        let amountInCase = amt
        if (this.state.roundNumber === 1) {
            this.setState(prevState => ({
                suitValues: prevState.suitValues.map(
                    obj => (obj.id == a ? { ...obj, userSelectedCase: true, canOpenFirstCase: false } : obj)
                ),
                roundNumber: this.state.roundNumber + 1,
                roundNoUpdate: "Select 7 cases for Round 1",
                userSelectedCaseID: a,
                overallAmountPresent: this.state.overallAmountPresent - amountInCase
            }));
        }
        else {
            let exactRound;

            if (this.state.overallSuitCasesSelected >= 0 && this.state.overallSuitCasesSelected < 7) {
                exactRound = 1;
                this.setState(prevState => ({
                    suitValues: prevState.suitValues.map(
                        obj => (obj.id == a ? Object.assign(obj, { case_open: true }) : obj)
                    ),
                    amtLeft: prevState.amtLeft.map(
                        val => (val.value === amountInCase ? { ...val, disableBtn: true } : val)
                    ),
                    amtRight: prevState.amtRight.map(
                        val => (val.value === amountInCase ? { ...val, disableBtn: true } : val)
                    ),
                    overallSuitCasesSelected: this.state.overallSuitCasesSelected + 1,
                    overallAmountPresent: this.state.overallAmountPresent - amountInCase,
                    roundNoUpdate: `Select ${this.state.round1Cases} cases for Round ${exactRound}`,
                    round1Cases: this.state.round1Cases - 1
                }));
                setTimeout(() => this.roundUpdates(), 1)
            }

            else if (this.state.overallSuitCasesSelected >= 7 && this.state.overallSuitCasesSelected < 13) {
                exactRound = 2;
                this.setState(prevState => ({
                    suitValues: prevState.suitValues.map(
                        obj => (obj.id == a ? Object.assign(obj, { case_open: true }) : obj)
                    ),
                    amtLeft: prevState.amtLeft.map(
                        val => (val.value === amountInCase ? { ...val, disableBtn: true } : val)
                    ),
                    amtRight: prevState.amtRight.map(
                        val => (val.value === amountInCase ? { ...val, disableBtn: true } : val)
                    ),
                    overallSuitCasesSelected: this.state.overallSuitCasesSelected + 1,
                    overallAmountPresent: this.state.overallAmountPresent - amountInCase,
                    roundNoUpdate: `Select ${this.state.round2Cases} cases for Round ${exactRound}`,
                    round2Cases: this.state.round2Cases - 1
                }));
                setTimeout(() => this.roundUpdates(), 1)
            }

            else if (this.state.overallSuitCasesSelected >= 13 && this.state.overallSuitCasesSelected < 17) {
                exactRound = 3;
                this.setState(prevState => ({
                    suitValues: prevState.suitValues.map(
                        obj => (obj.id == a ? Object.assign(obj, { case_open: true }) : obj)
                    ),
                    amtLeft: prevState.amtLeft.map(
                        val => (val.value === amountInCase ? { ...val, disableBtn: true } : val)
                    ),
                    amtRight: prevState.amtRight.map(
                        val => (val.value === amountInCase ? { ...val, disableBtn: true } : val)
                    ),
                    overallSuitCasesSelected: this.state.overallSuitCasesSelected + 1,
                    overallAmountPresent: this.state.overallAmountPresent - amountInCase,
                    roundNoUpdate: `Select ${this.state.round3Cases} cases for Round ${exactRound}`,
                    round3Cases: this.state.round3Cases - 1
                }));
                setTimeout(() => this.roundUpdates(), 1)
            }

            else if (this.state.overallSuitCasesSelected >= 17 && this.state.overallSuitCasesSelected < 20) {
                exactRound = 4;
                this.setState(prevState => ({
                    suitValues: prevState.suitValues.map(
                        obj => (obj.id == a ? Object.assign(obj, { case_open: true }) : obj)
                    ),
                    amtLeft: prevState.amtLeft.map(
                        val => (val.value === amountInCase ? { ...val, disableBtn: true } : val)
                    ),
                    amtRight: prevState.amtRight.map(
                        val => (val.value === amountInCase ? { ...val, disableBtn: true } : val)
                    ),
                    overallSuitCasesSelected: this.state.overallSuitCasesSelected + 1,
                    overallAmountPresent: this.state.overallAmountPresent - amountInCase,
                    roundNoUpdate: `Select ${this.state.round4Cases} cases for Round ${exactRound}`,
                    round4Cases: this.state.round4Cases - 1
                }));
                setTimeout(() => this.roundUpdates(), 1)
            }

            else if (this.state.overallSuitCasesSelected >= 20 && this.state.overallSuitCasesSelected < 22) {
                exactRound = 5;
                this.setState(prevState => ({
                    suitValues: prevState.suitValues.map(
                        obj => (obj.id == a ? Object.assign(obj, { case_open: true }) : obj)
                    ),
                    amtLeft: prevState.amtLeft.map(
                        val => (val.value === amountInCase ? { ...val, disableBtn: true } : val)
                    ),
                    amtRight: prevState.amtRight.map(
                        val => (val.value === amountInCase ? { ...val, disableBtn: true } : val)
                    ),
                    overallSuitCasesSelected: this.state.overallSuitCasesSelected + 1,
                    overallAmountPresent: this.state.overallAmountPresent - amountInCase,
                    roundNoUpdate: `Select ${this.state.round5Cases} cases for Round ${exactRound}`,
                    round5Cases: this.state.round5Cases - 1
                }));
                setTimeout(() => this.roundUpdates(), 1)
            }

            else if (this.state.overallSuitCasesSelected >= 22 && this.state.overallSuitCasesSelected < 23) {
                exactRound = 6;
                this.setState(prevState => ({
                    suitValues: prevState.suitValues.map(
                        obj => (obj.id == a ? Object.assign(obj, { case_open: true }) : obj)
                    ),
                    amtLeft: prevState.amtLeft.map(
                        val => (val.value === amountInCase ? { ...val, disableBtn: true } : val)
                    ),
                    amtRight: prevState.amtRight.map(
                        val => (val.value === amountInCase ? { ...val, disableBtn: true } : val)
                    ),
                    overallSuitCasesSelected: this.state.overallSuitCasesSelected + 1,
                    overallAmountPresent: this.state.overallAmountPresent - amountInCase,
                    roundNoUpdate: `Select ${this.state.round5Cases} cases for Round ${exactRound}`,
                    round5Cases: this.state.round5Cases - 1
                }));
                setTimeout(() => this.roundUpdates(), 1)
            }

            else if (this.state.overallSuitCasesSelected >= 23 && this.state.overallSuitCasesSelected < 24) {
                exactRound = 7;
                this.setState(prevState => ({
                    suitValues: prevState.suitValues.map(
                        obj => (obj.id == a ? Object.assign(obj, { case_open: true }) : obj)
                    ),
                    amtLeft: prevState.amtLeft.map(
                        val => (val.value === amountInCase ? { ...val, disableBtn: true } : val)
                    ),
                    amtRight: prevState.amtRight.map(
                        val => (val.value === amountInCase ? { ...val, disableBtn: true } : val)
                    ),
                    overallSuitCasesSelected: this.state.overallSuitCasesSelected + 1,
                    overallAmountPresent: this.state.overallAmountPresent - amountInCase,
                    roundNoUpdate: `Select ${this.state.round5Cases} cases for Round ${exactRound}`,
                    round5Cases: this.state.round5Cases - 1
                }));
                setTimeout(() => this.roundUpdates(), 1)
            }

            else if (this.state.overallSuitCasesSelected == 24) {
                this.setState(prevState => ({
                    suitValues: prevState.suitValues.map(
                        obj => (obj.id == a ? Object.assign(obj, { case_open: true }) : obj)
                    ),
                    amtLeft: prevState.amtLeft.map(
                        val => (val.value === amountInCase ? { ...val, disableBtn: true } : val)
                    ),
                    amtRight: prevState.amtRight.map(
                        val => (val.value === amountInCase ? { ...val, disableBtn: true } : val)
                    ),
                    overallSuitCasesSelected: this.state.overallSuitCasesSelected + 1,
                    bankerOfferAmount: amountInCase
                }));

                setTimeout(() => this.roundUpdates(), 2000)

            }

        }
    }

    roundUpdates() {

        if (this.state.overallSuitCasesSelected === 7) {
            this.setState({
                bankerOfferSection: true,
                roundNoUpdate: "Select 6 cases for Round 2",
                bankerOfferAmount: Math.floor((this.state.overallAmountPresent / (25 - 7)) * 0.90)
            })

        }
        else if (this.state.overallSuitCasesSelected === 13) {
            this.setState({
                bankerOfferSection: true,
                roundNoUpdate: "Select 4 cases for Round 3",
                bankerOfferAmount: Math.floor((this.state.overallAmountPresent / (25 - 13)) * 0.90)
            })
        }
        else if (this.state.overallSuitCasesSelected === 17) {
            this.setState({
                bankerOfferSection: true,
                roundNoUpdate: "Select 3 cases for Round 4",
                bankerOfferAmount: Math.floor((this.state.overallAmountPresent / (25 - 17)) * 0.90)
            })
        }
        else if (this.state.overallSuitCasesSelected === 20) {
            this.setState({
                bankerOfferSection: true,
                roundNoUpdate: "Select 2 cases for Round 5",
                bankerOfferAmount: Math.floor((this.state.overallAmountPresent / (25 - 20)) * 0.90)
            })
        }
        else if (this.state.overallSuitCasesSelected === 22) {
            this.setState({
                bankerOfferSection: true,
                roundNoUpdate: "Select 1 cases for Round 6",
                bankerOfferAmount: Math.floor((this.state.overallAmountPresent / (25 - 22)) * 0.90)
            })
        }
        else if (this.state.overallSuitCasesSelected === 23) {
            this.setState({
                bankerOfferSection: true,
                roundNoUpdate: "Select 1 cases for Round 7",
                bankerOfferAmount: Math.floor((this.state.overallAmountPresent / (25 - 23)) * 0.90)
            })
        }
        else if (this.state.overallSuitCasesSelected === 24) {

            this.setState(prevState => ({
                suitValues: prevState.suitValues.map(
                    obj => (obj.id == this.state.userSelectedCaseID ? { ...obj, canOpenFirstCase: true } : obj)
                ),
                roundNoUpdate: "Select any one suitcase to know how much you have won"
            }));
        }
        else if (this.state.overallSuitCasesSelected === 25) {
            this.props.hideMute();
            this.setState({
                successSection: true,
                bankerOfferSection: true
            })
        }
        else {
            return
        }
    }

    nodealclick = () => {
        this.setState({ bankerOfferSection: false })
    }

    dealclick = () => {
        this.setState({ successSection: true, aud: "" })
        this.props.hideMute();
    }

    render() {

        return (
            <div>

                <div className="game-container">
                    <div className="roundDetails">
                        {
                            !this.state.successSection ? <h1>{this.state.roundNoUpdate}</h1> : <h1>Great Effort</h1>
                        }
                    </div>
                    {
                        !this.state.successSection &&
                        <audio id="player" ref={this.myRef}>
                            <source src={this.state.aud} type='audio/mpeg' />
                        </audio>
                    }

                    <div>
                        <div className="leftpane">
                            {
                                this.state.amtLeft.map((val, key) => <button key={key} className="rightamountSection" disabled={val.disableBtn}>{(val.value.toLocaleString('en-IN'))}</button>)
                            }
                        </div>
                        <div className="first_row">
                            {
                                this.state.bankerOfferSection && !this.state.successSection &&
                                <div className="BankerPage">
                                    <header className="bank_offer_banner"><h2>Banker Offers Rs {(this.state.bankerOfferAmount.toLocaleString('en-IN'))}</h2></header>
                                    <div className="dnd_button">
                                        <button onClick={this.dealclick}><img src={require("./images/dealBtn.png")} alt="deal button" /></button>
                                        <button onClick={this.nodealclick}><img src={require("./images/noDealBtn.png")} alt="no deal button" /></button>
                                    </div>

                                </div>
                            }
                            {
                                this.state.bankerOfferSection && this.state.successSection &&
                                <DealSuccess amountWon={this.state.bankerOfferAmount} />
                            }
                            {!this.state.bankerOfferSection && this.state.suitValues &&
                                this.state.suitValues.map((val, key) => <li key={key}><div className={`suitcase ${val.case_open ? "suitcase-open" : ""}`}
                                    id={val.id} onClick={e => {
                                        if ((val.userSelectedCase === true && val.canOpenFirstCase === false) || val.case_open === true) {
                                            return
                                        }
                                        this.suitClick(e, val.value, val.id)
                                    }
                                    }
                                >
                                    <p className={val.userSelectedCase ? "user_selected_case" : ""}>{val.case_open ? val.value : val.id}</p></div></li>)
                            }
                        </div>
                        <div className="rightpane">
                            {
                                this.state.amtRight.map((val, key) => <button key={key} className="rightamountSection" disabled={val.disableBtn}>{(val.value.toLocaleString('en-IN'))}</button>)
                            }
                        </div>
                    </div>
                </div>

                <div className="warning">
                    <ModalPart openErrorModal={this.state.openErrorModal} />
                    <div className="warningMessage"><h2>Please switch-over to continue</h2></div>
                </div>
            </div>
        )
    }
}