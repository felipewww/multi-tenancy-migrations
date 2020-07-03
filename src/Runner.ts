import yargs, {Arguments} from "yargs";
import {TenantsModel} from "./TenantsModel";

export abstract class Runner {
    protected model: TenantsModel;

    public constructor(
        protected yargs: yargs.Argv
    ) {
        this.model = new TenantsModel();
    }

    public abstract handle(argv: Arguments<any>): void;
}
