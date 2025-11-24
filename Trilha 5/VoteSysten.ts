interface VoteResults {
    [candidate: string]: number;
}

abstract class VoteSystem {
    abstract voteFor(candidate: string): void;
    abstract getResults(): VoteResults;
}

class Election extends VoteSystem {
    private votes: VoteResults;

    constructor() {
    super();
    this.votes = {};
    }

    voteFor(candidate: string): void {
    if (this.votes[candidate]) {
        this.votes[candidate]++;
    } else {
        this.votes[candidate] = 1;
        }
    }

    getResults(): VoteResults {
        return this.votes;
    }
}

class Poll extends VoteSystem {
    private votes: VoteResults;

    constructor() {
    super();
    this.votes = {};
    }

    voteFor(candidate: string): void {
    if (this.votes[candidate]) {
    this.votes[candidate]++;
    } else {
        this.votes[candidate] = 1;
        }
    }

    getResults(): VoteResults {
    const sortedCandidates = Object.keys(this.votes).sort(
    (a, b) => this.votes[b] - this.votes[a]
    );
    const results: VoteResults = {};
    sortedCandidates.forEach((candidate) => {
    results[candidate] = this.votes[candidate];
    });
    return results;
    }
}

// Exemplo de uso
const eleição = new Election();
eleição.voteFor("João");
eleição.voteFor("Maria");
eleição.voteFor("João");
console.log(eleição.getResults()); // { João: 2, Maria: 1 }

const poll = new Poll();
poll.voteFor("João");
poll.voteFor("Maria");
poll.voteFor("João");
console.log(poll.getResults()); // { João: 2, Maria: 1 }
