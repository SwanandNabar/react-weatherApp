import TipCalculator from '../TipCalculator';

let tipCalculator;

describe("TipCalculator", () => {
    beforeEach(() => {
        tipCalculator = new TipCalculator();
    })
    it('Loads the component', () => {
        expect(tipCalculator).toMatchSnapshot();
    });
    it('calls the onTipAmountChange function', () => {
        const event = {
            preventDefault() { },
            value: 0.15,
            target: {
                billWithoutTip: '',
                partySize: '',
                value: 0.15,
            }
        };
        tipCalculator.onTipAmountChange(event);
        expect(tipCalculator).toMatchSnapshot();
    });

    it('calls the calculateTip function', () => {

        const event = {
            preventDefault() { },
            target: {
                initialBill: '',
                partySizeRoundedOff: '',
                billWithoutTip: ''
            }
        }
        tipCalculator.handleValidation(event);
        expect(tipCalculator).toMatchSnapshot();
        tipCalculator.calculateTip(event);
        expect(tipCalculator).toMatchSnapshot();
    });

    it('calls the toggleSplitBill function', () => {
        tipCalculator.toggleSplitBill();
        expect(tipCalculator).toMatchSnapshot();
    });
});