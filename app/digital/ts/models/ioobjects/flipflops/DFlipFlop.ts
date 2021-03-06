import {V} from "Vector";
import {serializable} from "serialeazy";

import {FlipFlop} from "./FlipFlop";

@serializable("DFlipFlop")
export class DFlipFlop extends FlipFlop {

    public constructor() {
        super(2, V(80, 80));
        this.getInputPort(0).setName(">");
        this.getInputPort(1).setName("D");
    }

    // @Override
    public activate(): void {
        this.lastClock = this.clock;
        this.clock = this.inputs.get(0).getIsOn();
        const data = this.inputs.get(1).getIsOn();
        if (this.clock && !this.lastClock)
            this.state = data;

        super.activate(this.state, 1);
        super.activate(!this.state, 0);
    }

    public getDisplayName(): string {
        return "D Flip Flop";
    }
}
