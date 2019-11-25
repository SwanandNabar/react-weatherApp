import GithubCards from '../GithubCards';

let githubCards;
describe ("GithubCards", () => {
    beforeEach(() => {
        githubCards = new GithubCards();
    });

    it ("Loads the component", () => {
        expect(githubCards).toMatchSnapshot();
    });

    it("Calls the getRepos function", () => {
        githubCards.getRepos();
        expect(githubCards).toMatchSnapshot();
    });

    it("Calls the getCommitList function", () => {
        githubCards.getCommitList();
        expect(githubCards).toMatchSnapshot();
    });

    it("Calls the getCommitListRepo function", () => {
        githubCards.getCommitListRepo();
        expect(githubCards).toMatchSnapshot();
    })
});
