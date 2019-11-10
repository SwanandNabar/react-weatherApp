import React, { Component } from "react";
import Cleave from 'cleave.js/react';
import './TipCalculator.css';

export default class TipCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            billWithoutTip: '',
            partySize: '',
            value: 0,
            tipAmount: 0,
            totalBill: 0,
            splitBill: false,
            formSubmitted: false
        }
        this.baseState = this.state;
        this.onTipAmountChange = this.onTipAmountChange.bind(this);
        this.toggleSplitBill = this.toggleSplitBill.bind(this);
        this.calculateTip = this.calculateTip.bind(this);
    }


    onTipAmountChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let selectorValue = target.name === "value" ? document.querySelector(".drop-down").value : this.state.value;

        switch (selectorValue) {
            case "0.15":
                document.querySelector(".tip-form").style.border = "solid 1px #00008B";
                break;
            case "0.18":
                document.querySelector(".tip-form").style.border = "solid 1px #00FFFF";
                break;
            case "0.2":
                document.querySelector(".tip-form").style.border = "solid 1px #32CD32";
                break;
            case "":
                document.querySelector(".tip-form").style.border = "none";
                break;
            default:
                break;
        }


        this.setState({
            [name]: value
        })

    }

    handleValidation(event) {
        if (!event.target.billWithoutTip.value || !event.target.value || !event.target.partySize.value) {
            this.setState({
                formSubmitted: true
            });
        }
    }

    toggleSplitBill() {
        this.setState({
            splitBill: !this.state.splitBill
        })
    }

    calculateTip(event) {
        event.preventDefault();

        this.handleValidation(event);

        var initialBill = parseFloat((this.state.billWithoutTip).replace(/,/g, ''));
        var partySizeRoundedOff = parseInt((this.state.partySize).replace(/,/g, ''), 10);

        if (this.state.splitBill) {
            var amountToSplit = initialBill / partySizeRoundedOff;
            var tipWhenSplittingBill = amountToSplit * this.state.value;
            var finalTotalWhenSplittingBill = (amountToSplit + tipWhenSplittingBill) * partySizeRoundedOff;

            // set state when splitting bill
            this.setState({
                tipAmount: tipWhenSplittingBill,
                totalBill: finalTotalWhenSplittingBill
            })
        } else {
            var tipWhenNotSplittingBill = initialBill * this.state.value;
            var finalTotalWhenNotSplittingBill = initialBill + tipWhenNotSplittingBill;

            //set state when not splitting the bill
            this.setState({
                tipAmount: tipWhenNotSplittingBill,
                totalBill: finalTotalWhenNotSplittingBill
            })
        }

    }

    render() {
        return (
            <div className="tip-calculator">
                <h1>Tip Calculator</h1>
                <div className="tip-form">
                    <form onSubmit={this.calculateTip} id="calculatorForm">
                        <div className="field">
                            <span className="title">Total Bill</span>
                            <Cleave name="billWithoutTip"
                                className="bill-without-tip"
                                placeholder="Total Bill"
                                onChange={this.onTipAmountChange}
                                value={this.state.billWithoutTip}
                                options={{ numeral: true, numeralPositiveOnly: true, numeralDecimalScale: 6 }} />
                        </div>
                        {/* validation error */}
                        {this.state.formSubmitted && !this.state.billWithoutTip &&
                            <span style={{ color: "red" }}>Please enter valid amount</span>
                        }
                        <div className="field">
                            <span className="title">Select a tip amount:</span>
                            <select name="value" value={this.state.value} onChange={this.onTipAmountChange} className="drop-down">
                                <option value="">Select a tip amount</option>
                                <option value="0.15">15 %</option>
                                <option value="0.18">18 %</option>
                                <option value="0.2">20 %</option>
                            </select>
                        </div>
                        {/* validation error */}
                        {this.state.formSubmitted && !this.state.value &&
                            <span style={{ color: "red" }}>Please select a tip amount</span>
                        }
                        <div className="field">
                            <span className="title">Party Size:</span>
                            <Cleave name="partySize"
                                className="party-size"
                                placeholder="Party Size"
                                onChange={this.onTipAmountChange}
                                value={this.state.partySize}
                                options={{ numeral: true, numeralPositiveOnly: true, stripLeadingZeroes: true, numeralDecimalScale: 0 }} />
                        </div>
                        {/* validation error */}
                        {this.state.formSubmitted && !this.state.partySize &&
                            <span style={{ color: "red" }}>Please enter the party size</span>
                        }
                        <div className="split">
                            <span className="split-checkbox">Split the bill between {this.state.partySize} people?</span>
                            <input name="splitBill"
                                className="checkbox"
                                type="checkbox"
                                checked={this.state.splitBill}
                                onChange={this.toggleSplitBill} />
                        </div>
                        <button type="submit" className="btn-calculate">Calculate tip</button>
                    </form>
                    <div className="tip-amount">
                        {this.state.splitBill &&
                            <p>
                                Tip for each person: <span id="tipsText">${(this.state.tipAmount).toFixed(2)}</span>
                            </p>
                        }
                        {!this.state.splitBill &&
                            <p>
                                Tip: <span id="tipsText">${(this.state.tipAmount).toFixed(2)}</span>
                            </p>
                        }
                    </div>
                    <div className="total">
                        Total: <span id="tipsText">${(this.state.totalBill).toFixed(2)}</span>
                    </div>
                </div>
            </div>
        )
    }

}